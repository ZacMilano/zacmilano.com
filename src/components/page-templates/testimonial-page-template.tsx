import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const FullHeightMain = styled.main`
	min-height: 100%;
	padding-block: 4em;
`;

const Subheader = styled.p`
	margin-bottom: 2em;
	font-weight: normal;
`;

const HeaderSection = styled.div`
	padding-inline: 10em;
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
			<HeaderSection>
				<h1>{props.businessName}</h1>
				<Subheader>
					<i>Daily testimonial component for {props.date}</i>
				</Subheader>
			</HeaderSection>

			{children}
		</FullHeightMain>
	);
};
