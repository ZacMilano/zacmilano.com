import React, { PropsWithChildren } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { useTestimonialRegistryContext } from ".";
import { blackRockBlue } from "../styles";

const InterTestimonialNavigationContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	padding-block: 1em;

	margin-block-end: 10em;
`;

const InterTestimonialNavigationLink = styled((props) => <Link {...props} />)`
	position: relative;

	display: flex;
	gap: 1em;

	/* Slight case of magic numbers */
	padding: 1em clamp(1em, 5vw, 3em);

	color: white;
	background-color: ${blackRockBlue};
	text-decoration: none;
	font-weight: bold;

	border-radius: 2em;

	transition: transform 250ms ease-out;

	&::after {
		content: "";
		position: absolute;
		z-index: -1;

		inset: 0;

		opacity: 0;
		border-radius: inherit;
		box-shadow: 0 0.5em 2em hsl(0 0% 0% / 20%);

		transition: opacity 250ms ease-out;
	}

	&:hover::after,
	&:focus-within::after {
		opacity: 1;
	}

	&:hover,
	&:focus-within {
		transform: scale(1.02);
	}
`;

interface EmptyIfNoValidDateProps extends PropsWithChildren {
	date: string;
}

const EmptyIfNoValidDate = ({
	children,
	...props
}: EmptyIfNoValidDateProps) => {
	if (props.date === "") {
		return <div />;
	}

	return (
		<InterTestimonialNavigationLink to={`../${props.date}`}>
			{children}
		</InterTestimonialNavigationLink>
	);
};

export interface InterTestimonialNavigationProps {
	currentDate: string;
}

export const InterTestimonialNavigation: React.FC<
	InterTestimonialNavigationProps
> = ({ ...props }) => {
	const { getPreviousTestimonial, getNextTestimonial } =
		useTestimonialRegistryContext();

	const previousDate = getPreviousTestimonial(props.currentDate) ?? "";
	const nextDate = getNextTestimonial(props.currentDate) ?? "";

	return (
		<InterTestimonialNavigationContainer>
			<EmptyIfNoValidDate date={previousDate}>
				<p>&larr;</p>
				<p>Previous</p>
			</EmptyIfNoValidDate>

			<EmptyIfNoValidDate date={nextDate}>
				<p>Next</p>
				<p>&rarr;</p>
			</EmptyIfNoValidDate>
		</InterTestimonialNavigationContainer>
	);
};
