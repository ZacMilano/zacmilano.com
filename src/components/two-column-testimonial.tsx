import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const TwoColumnLayout = styled.section`
	display: grid;
	grid-template-columns: 2fr 3fr;
	grid-auto-rows: min-content;
	gap: 6em;

	& > article {
		/* Prevent testimonials from unnecessarily stretching vertically */
		align-self: start;
	}

	@media only screen and (max-width: 80rem) {
		grid-template-columns: 1fr;
		place-items: center;

		padding-inline: 1em;
	}
`;

export const TwoColumnTestimonial: React.FC<PropsWithChildren> = ({
	children,
}) => {
	return <TwoColumnLayout>{children}</TwoColumnLayout>;
};
