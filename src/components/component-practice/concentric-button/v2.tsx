import React from "react";
import styled from "styled-components";

import { blackRockBlue, blackRockBlueWithAlpha } from "$styles/colors";
import { ConcentricButtonProps } from "./concentric-button-props";

const Button = styled.button`
	--scale-factor: 0.1;

	@keyframes oscillate-small {
		0% {
			transform: scale(calc(1 + var(--scale-factor)));
		}

		100% {
			transform: scale(calc(1 + 2 * var(--scale-factor)));
		}
	}

	@keyframes oscillate-large {
		0% {
			transform: scale(calc(1 + 2 * var(--scale-factor)));
		}

		100% {
			transform: scale(calc(1 + 4 * var(--scale-factor)));
		}
	}

	position: relative;
	isolation: isolate;

	aspect-ratio: 1;
	padding: 2em;

	background-color: ${blackRockBlue};
	color: white;
	font-weight: bold;
	border: none;
	border-radius: 9999px;
	cursor: pointer;
	transition: scale 500ms ease-out;

	&::before {
		animation-name: oscillate-small;
	}

	&::after {
		animation-name: oscillate-large;
		animation-delay: -500ms;
	}

	&:hover {
		scale: calc(1 + var(--scale-factor));

		&::before,
		&::after {
			scale: calc(1 - 3 * var(--scale-factor));
		}
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		z-index: -2;

		inset: 0;

		aspect-ratio: inherit;
		border-radius: inherit;
		background-color: ${blackRockBlueWithAlpha(10)};
		pointer-events: none;

		transition: scale 500ms ease-out;
		animation-duration: 2s;
		animation-direction: alternate;
		animation-iteration-count: infinite;
	}
`;

export const V2: React.FC<React.PropsWithChildren<ConcentricButtonProps>> = ({
	children,
	onClick,
}) => {
	return (
		<Button onClick={onClick}>
			<p>{children}</p>
		</Button>
	);
};
