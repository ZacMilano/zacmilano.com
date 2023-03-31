import React from "react";
import styled from "styled-components";

import { blackRockBlue, blackRockBlueWithAlpha } from "$styles/colors";
import { ConcentricButtonProps } from "./concentric-button-props";

const Button = styled.button`
	--scale-factor: 0.1;
	--color-bg: ${blackRockBlue};
	--color-text: white;
	--radius: 7.5rem;

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
	width: calc(2 * var(--radius));
	aspect-ratio; 1;

	background-color: ${blackRockBlueWithAlpha(80)};
	color: var(--color-text);
	font-weight: bold;
	border: none;
	border-radius: 9999px;

	cursor: pointer;
	transition: scale 200ms ease-out, background-color 500ms ease-out;

	&::before {
		animation-name: oscillate-small;
	}

	&::after {
		animation-name: oscillate-large;
		animation-delay: -500ms;
	}

	&:hover {
		scale: calc(1 + var(--scale-factor));
		background-color: var(--color-bg);

		&::before,
		&::after {
			scale: calc(1 - 3 * var(--scale-factor));
		}
		
		& .curved-word {
			animation-play-state: paused;
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
		background-color: ${blackRockBlue};
		opacity: 0.1;
		pointer-events: none;

		transition: scale 200ms ease-out;
		animation-duration: 2s;
		animation-direction: alternate;
		animation-iteration-count: infinite;
	}
`;

const CharacterOnCurve = styled.span`
	position: absolute;

	height: calc(1.2 * var(--radius));

	color: var(--color-bg);
	text-shadow: var(--color-bg) 0px 0px 20px;

	${Array.from(Array(50))
		.map((unused, index) => {
			return `&.character--${index} {
				transform-origin: bottom center;
				transform: translateY(-100%) rotate(${7 * index}deg);
			}`;
		})
		.join("\n\n")};
`;

const CurvedWord = styled.p`
	position: absolute;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);

	transition: animation-duration 500ms ease-out, rotate 500ms ease-out;

	@keyframes rotate-word {
		0% {
			rotate: 0deg;
		}

		100% {
			rotate: 360deg;
		}
	}

	animation-name: rotate-word;
	animation-duration: 30s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
`;

const CurvedWordContainer = styled.div`
	animation-name: rotate-word;
	animation-duration: 120s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
`;

export const V3: React.FC<ConcentricButtonProps> = ({ children, onClick }) => {
	let curvableChildren: string[] = [];
	if (typeof children === "string") {
		curvableChildren = children.split("");
	}

	return (
		<Button onClick={onClick}>
			{curvableChildren.length > 0 ? (
				<CurvedWordContainer>
					<CurvedWord className="curved-word">
						{curvableChildren.map((character, index) => (
							<CharacterOnCurve
								className={`character--${index}`}
								key={index}
								data-index={index}
							>
								{character}
							</CharacterOnCurve>
						))}
					</CurvedWord>
				</CurvedWordContainer>
			) : (
				<p>{children}</p>
			)}
		</Button>
	);
};
