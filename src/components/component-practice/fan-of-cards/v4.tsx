import React from "react";
import styled from "styled-components";

import { FanOfCardsProps } from "./fan-of-cards-props";

const FanContainer = styled(({ nchildren, ...props }) => (
	<div nchildren={nchildren} {...props} />
))`
	--card-height: 8rem;
	--aspect-ratio: 1 / 2;
	--card-not-focused-opacity: 0.5;

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

	--scale-unit: 10%;
	--scale-amplifier: 0;

	--is-user-selecting-one: 0;
	--is-selected: 0;

	/* Used to squish cards close together when there are a lot of them */
	--n-children: ${(props) => props.nchildren};

	padding-block: 1em;

	&:hover,
	&:focus-within,
	&:focus-visible {
		/* Less spread out when there are more total children */
		--rotation-amplifier: calc(12 / (var(--n-children) + 1));
		--translate-x-amplifier: 1;
		--translate-y-amplifier: 0.5;

		--is-user-selecting-one: 1;
	}
`;

const CardStack = styled.div`
	position: relative;
`;

const EmptyCardContainer = styled.div`
	height: var(--card-height);
	aspect-ratio: 1;
`;

const CardContainer = styled(({ nthchild, ...props }) => (
	<div nthchild={nthchild} {...props} />
))`
	--nth-child: ${(props) => props.nthchild ?? 0};
	--nth-child-from-center: calc(0.5 + var(--nth-child) - var(--n-children) / 2);

	/* Between -nChildren/2 and nChildren/2, more or less */
	--rotation-direction: var(--nth-child-from-center);
	/* Between -nChildren/2 and nChildren/2, more or less */
	--translate-x-direction: var(--nth-child-from-center);
	/* Less spread out when there are more total children */
	--rotation-amplifier: calc(6 / (var(--n-children)));

	position: absolute;
	z-index: calc(var(--n-children) - var(--nth-child-from-center));
	border-radius: calc(var(--card-height) / 10);
	box-shadow: 0.5em 0em 1.5em hsl(0 0% 0% / 40%);
	overflow: hidden;

	left: 50%;
	top: 50%;
	translate: -50% -50%;

	/*
	1 - isUserSelectingOne: use 100% opacity if user isn't selecting one
	isUserSelectingOne: use cardNotFocusedOpacity when user IS selecting a card,
			but it's not this card
	isSelected: use 100% opacity (overflow if needed!) when this card is selected
	*/
	opacity: calc(
		(1 * (1 - var(--is-user-selecting-one))) +
			(var(--card-not-focused-opacity) * var(--is-user-selecting-one)) +
			(1 * var(--is-selected))
	);
	transform: translateX(
			calc(
				var(--translate-x-unit) * var(--translate-x-direction) *
					var(--translate-x-amplifier)
			)
		)
		scale(calc(100% + var(--scale-unit) * var(--scale-amplifier)))
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

	transition: transform 300ms ease-out, opacity 300ms ease-out;
	/* Only delay the animations on mouse-out */
	transition-delay: 100ms;

	&:hover,
	&:focus-within,
	&:focus-visible {
		--scale-amplifier: 2;
		--translate-y-amplifier: 1;
		--is-selected: 1;

		/* Only delay the animations on mouse-out */
		transition-delay: 0ms;
	}
`;

const Card = styled.img`
	height: var(--card-height);
	aspect-ratio: var(--aspect-ratio);
	object-fit: cover;
`;

export const V4: React.FC<FanOfCardsProps> = ({ cardImages, ...props }) => {
	return (
		<FanContainer nchildren={cardImages.length}>
			<CardStack>
				{cardImages.map(({ src, alt }, index) => (
					<CardContainer
						key={index}
						nthchild={index}
						className="card-container"
					>
						<Card src={src} alt={alt} />
					</CardContainer>
				))}

				{cardImages.length > 0 && <EmptyCardContainer />}
			</CardStack>
		</FanContainer>
	);
};
