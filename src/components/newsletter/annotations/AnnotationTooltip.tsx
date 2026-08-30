import React, { useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import styled, { css, keyframes } from "styled-components";

import { useAnnotations } from "./AnnotationProvider";

const flashHighlight = keyframes`
	0%, 100% { box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15); }
	50% { box-shadow: 0 0 0 3px hsl(239, 43%, 60%), 0 2px 12px rgba(0, 0, 0, 0.15); }
`;

const TooltipOuter = styled.div`
	padding: 8px;
	pointer-events: auto;
`;

const TooltipCard = styled.div<{ $highlighted: boolean }>`
	background: white;
	border: 1px solid hsl(0, 0%, 85%);
	border-radius: 8px;
	padding: 12px 16px;
	/* wide enough for a media embed on desktop; viewport-bounded on mobile */
	max-width: min(520px, calc(100vw - 32px));
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
	font-size: 0.9rem;
	line-height: 1.5;
	z-index: 1000;

	${(p) =>
		p.$highlighted &&
		css`
			animation: ${flashHighlight} 0.4s ease 2;
		`}
`;

interface AnnotationTooltipProps {
	id: string;
	depth: number;
	referenceElement: HTMLElement | null;
	children: React.ReactNode;
}

export const AnnotationTooltip: React.FC<AnnotationTooltipProps> = ({
	id,
	depth,
	referenceElement,
	children,
}) => {
	const { hoverEnter, hoverLeave, highlightedId } = useAnnotations();
	const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
		null
	);

	const { styles, attributes } = usePopper(referenceElement, popperElement, {
		placement: "bottom",
		modifiers: [
			{ name: "offset", options: { offset: [0, -4] } },
			{ name: "flip", options: { fallbackPlacements: ["top", "right", "left"] } },
			{ name: "preventOverflow", options: { padding: 8 } },
		],
	});

	if (typeof document === "undefined") return null;

	return createPortal(
		<div
			ref={setPopperElement}
			style={{ ...styles.popper, zIndex: 1000 + depth }}
			{...attributes.popper}
			data-annotation-tooltip
			data-annotation-id={id}
			onMouseEnter={() => hoverEnter(id)}
			onMouseLeave={() => hoverLeave(id)}
		>
			<TooltipOuter>
				<TooltipCard $highlighted={highlightedId === id}>
					{children}
				</TooltipCard>
			</TooltipOuter>
		</div>,
		document.body
	);
};
