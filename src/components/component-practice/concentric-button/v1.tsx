import React from "react";
import styled from "styled-components";

import { blackRockBlue, blackRockBlueWithAlpha } from "$styles/colors";
import { ConcentricButtonProps } from "./concentric-button-props";

const Button = styled.button`
	@keyframes oscillate-small {
		0% {
			transform: scale(1.1);
		}

		100% {
			transform: scale(1.2);
		}
	}

	@keyframes oscillate-large {
		0% {
			transform: scale(1.2);
		}

		100% {
			transform: scale(1.4);
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

	&::before {
		animation-name: oscillate-small;
	}

	&::after {
		animation-name: oscillate-large;
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

		transition: transform 2500ms ease-out;
		animation-duration: 2s;
		animation-direction: alternate;
		animation-iteration-count: infinite;
	}
`;

export const V1: React.FC<ConcentricButtonProps> = ({ children, onClick }) => {
	return (
		<Button onClick={onClick}>
			{children}

			<div className="concentric-ring" />
			<div className="concentric-ring" />
			<div className="concentric-ring" />
		</Button>
	);
};
