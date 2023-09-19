import { blackRockBlue, blackRockBlueWithAlpha } from "$styles/colors";
import React, { useState } from "react";
import styled from "styled-components";

interface CollapsibleSectionProps {
	title: string;
}

const StyledSection = styled.section`
	/* TODO put this on basically the whole app lol */
	line-height: 2;

	& > .section-content {
		margin-block: 4em;
	}

	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-block: 0.5em;
	}

	figure {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		margin-block: 1.5em;
		padding-inline: clamp(1em, 20vw, 35% - 8em);

		& > * {
			margin-block: 0.25em;
		}
	}

	blockquote {
		&::before {
			content: open-quote;
		}

		&::after {
			content: close-quote;
		}
	}

	figcaption {
		margin-inline: 1.5em;
		font-style: italic;
		opacity: 50%;
	}
`;

const AccordionBanner = styled.button`
	position: relative;

	display: flex;
	align-items: center;
	gap: 1em;

	width: 100%;
	padding-inline: 2em;

	background-color: inherit;
	border: none;
	border-bottom: 2px solid ${blackRockBlue};

	cursor: pointer;
	transition: transform 500ms ease;

	& > .open-indicator {
		color: ${blackRockBlue};
		font-size: 1.5em;

		transition: transform 500ms ease;

		/* Accordion is open: rotate indicator */
		[data-open="true"]& {
			transform: rotate(-180deg);
		}
	}

	&::before {
		content: "";
		position: absolute;

		inset: 0;

		opacity: 0;
		box-shadow: 0em 1.5em 1em -1em ${blackRockBlueWithAlpha(30)};
		transition: opacity 500ms ease;
	}

	&[data-open="true"]::before {
		opacity: 1;
	}
`;

/**
 * Use `h3`s and lower in here.
 */
export const CollapsibleSection: React.FC<
	React.PropsWithChildren<CollapsibleSectionProps>
> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<StyledSection>
			<AccordionBanner
				onClick={() => setIsOpen((prev) => !prev)}
				data-open={isOpen}
			>
				<i className="open-indicator fas fa-caret-down" />
				<h2>{title}</h2>
			</AccordionBanner>

			{isOpen && <div className="section-content">{children}</div>}
		</StyledSection>
	);
};
