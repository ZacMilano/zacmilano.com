import React from "react";
import styled from "styled-components";

import { FanOfCardsProps } from "./fan-of-cards-props";

const FanContainer = styled.div`
	padding-block: 2em;
`;

const CardStack = styled.div`
	--card-height: 8rem;
	--aspect-ratio: 1 / 2;

	position: relative;
`;

const EmptyCardContainer = styled.div`
	height: var(--card-height);
	/* TODO problem: cards spread out horizontally if we change the aspect-ratio of this */
	aspect-ratio: var(--aspect-ratio);
`;

const CardContainer = styled.div`
	position: absolute;

	border-radius: calc(var(--card-height) / 10);
	box-shadow: 0.5em 0em 1.5em hsl(0 0% 0% / 90%);
	overflow: hidden;

	:nth-child(1) {
		z-index: 3;
		left: -80%;
		top: 5%;
		transform: rotate(-10deg);
	}

	:nth-child(2) {
		z-index: 2;
	}

	:nth-child(3) {
		z-index: 1;
		right: -80%;
		top: 5%;
		transform: rotate(10deg);
	}
`;

const Card = styled.img`
	height: var(--card-height);
	aspect-ratio: var(--aspect-ratio);
`;

export const V1: React.FC<FanOfCardsProps> = ({ cardImages, ...props }) => {
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
