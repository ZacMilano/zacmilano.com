import React, { createContext, useContext, useEffect, useRef } from "react";
import styled from "styled-components";

import { useAnnotations } from "./AnnotationProvider";
import { AnnotationTooltip } from "./AnnotationTooltip";

interface ParentAnnotation {
	id: string | null;
	depth: number;
}

export const ParentAnnotationContext = createContext<ParentAnnotation>({
	id: null,
	depth: 0,
});

const Trigger = styled.span`
	color: hsl(239, 43%, 50%);
	text-decoration: underline;
	text-decoration-style: dotted;
	text-underline-offset: 2px;
	cursor: pointer;

	&:hover {
		text-decoration-style: solid;
	}
`;

interface AnnotatedProps {
	id: string;
	content: React.ReactNode;
	children: React.ReactNode;
}

export const Annotated: React.FC<AnnotatedProps> = ({
	id,
	content,
	children,
}) => {
	const { register, isOpen, pin, hoverEnter, hoverLeave, setParent } =
		useAnnotations();
	const parent = useContext(ParentAnnotationContext);
	const parentId = parent.id;
	const depth = parent.depth;
	const triggerRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		register(id, content);
	}, [id, content, register]);

	useEffect(() => {
		if (parentId) {
			setParent(id, parentId);
		}
	}, [id, parentId, setParent]);

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		pin(id);
	};

	return (
		<>
			<Trigger
				ref={triggerRef}
				data-annotation-trigger
				data-annotation-id={id}
				onMouseEnter={() => hoverEnter(id)}
				onMouseLeave={() => hoverLeave(id)}
				onClick={handleClick}
			>
				{children}
			</Trigger>
			{isOpen(id) && (
				<ParentAnnotationContext.Provider
					value={{ id, depth: depth + 1 }}
				>
					<AnnotationTooltip
						id={id}
						depth={depth + 1}
						referenceElement={triggerRef.current}
					>
						{content}
					</AnnotationTooltip>
				</ParentAnnotationContext.Provider>
			)}
		</>
	);
};
