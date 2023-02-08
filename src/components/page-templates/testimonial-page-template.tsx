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

export interface TestimonialPageTemplateProps {
	date: string;
	businessName: string;
}

// TODO Dynamically define page's title with React Helmet (or similar)
export const TestimonialPageTemplate: React.FC<
	PropsWithChildren<TestimonialPageTemplateProps>
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
