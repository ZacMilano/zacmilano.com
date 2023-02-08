import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const FullHeightMain = styled.main`
	height: 100%;
	padding-block: 4em;
	padding-inline: 10em;
`;

const Header = styled.h1``;

const Subheader = styled.h2`
	margin-bottom: 2em;
	font-weight: normal;
`;

export interface TestimonialPageProps {
	date: string;
	businessName: string;
}

export const TestimonialPage: React.FC<
	PropsWithChildren<TestimonialPageProps>
> = ({ children, ...props }) => {
	return (
		<FullHeightMain>
			<Header>{props.businessName}</Header>
			<Subheader>
				<i>Daily testimonial component for {props.date}</i>
			</Subheader>

			{children}
		</FullHeightMain>
	);
};
