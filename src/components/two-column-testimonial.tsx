import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const TwoColumnLayout = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1em;
`;

export const TwoColumnTestimonial: React.FC<PropsWithChildren> = ({
	children,
}) => {
	return <TwoColumnLayout>{children}</TwoColumnLayout>;
};
