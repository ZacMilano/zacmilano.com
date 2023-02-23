import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const TwoColumnLayout = styled.section`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-auto-rows: min-content;
	gap: 3em;

	& > article {
		/* Prevent testimonials from unnecessarily stretching vertically */
		align-self: start;
	}

	@media only screen and (max-width: 60rem) {
		grid-template-columns: 1fr;
		place-items: center;
		gap: 6em;

		padding-inline: 1em;
	}
`;

export const TwoColumnTestimonial: React.FC<PropsWithChildren> = ({
	children,
}) => {
	return <TwoColumnLayout>{children}</TwoColumnLayout>;
};
