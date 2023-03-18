import React from "react";
import styled from "styled-components";

import { FanOfCardsProps } from "./fan-of-cards-props";

const FanContainer = styled.div`
	--card-height: 8rem;
	--aspect-ratio: 1 / 2;

	/* 
	x-unit: the standard unit for x
	x-direction: the sign is the direction of the specific card, the magnitude is
		the relative intensity for the specific card
	x-amplifier: global scale, changes in one spot to trigger an animation
	 */

	--rotation-unit: 10deg;
	--rotation-direction: 0; // in [-1, 1]
	--rotation-amplifier: 1;

	--translate-x-unit: 1em;
	--translate-x-direction: 0; // in [-1, 1]
	--translate-x-amplifier: 0.5;

	--translate-y-unit: 1em;
	--translate-y-direction: -1; // in [-1, 1]
	--translate-y-amplifier: 0;

	padding-block: 1em;

	&:hover,
	&:focus-within,
	&:focus-visible {
		--rotation-amplifier: 2;
		--translate-x-amplifier: 1;
		--translate-y-amplifier: 0.5;
	}
`;

const CardStack = styled.div`
	position: relative;
`;

const EmptyCardContainer = styled.div`
	height: var(--card-height);
	aspect-ratio: 1;
`;

const CardContainer = styled.div`
	position: absolute;

	border-radius: calc(var(--card-height) / 10);
	box-shadow: 0.5em 0em 1.5em hsl(0 0% 0% / 40%);
	overflow: hidden;

	left: 50%;
	top: 50%;
	translate: -50% -50%;

	transform: translateX(
			calc(
				var(--translate-x-unit) * var(--translate-x-direction) *
					var(--translate-x-amplifier)
			)
		)
		rotate(
			calc(
				var(--rotation-unit) * var(--rotation-direction) *
					var(--rotation-amplifier)
			)
		)
		translateY(
			calc(
				var(--translate-y-unit) * var(--translate-y-direction) *
					var(--translate-y-amplifier)
			)
		);
	transform-origin: bottom center;
	transition: transform 300ms ease-out;

	:nth-child(1) {
		--rotation-direction: -1;
		--translate-x-direction: -1;
		z-index: 3;
	}

	:nth-child(2) {
		--rotation-direction: 0;
		--translate-x-direction: 0;
		z-index: 2;
	}

	:nth-child(3) {
		--rotation-direction: 1;
		--translate-x-direction: 1;
		z-index: 1;
	}
`;

const Card = styled.img`
	height: var(--card-height);
	aspect-ratio: var(--aspect-ratio);
`;

export const V2: React.FC<FanOfCardsProps> = ({ cardImages, ...props }) => {
	return (
		<FanContainer>
			<CardStack>
				{cardImages.map(({ src, alt }, index) => (
					<CardContainer key={index}>
						<Card src={src} alt={alt} />
					</CardContainer>
				))}

				{cardImages.length > 0 && <EmptyCardContainer />}
			</CardStack>
		</FanContainer>
	);
};
