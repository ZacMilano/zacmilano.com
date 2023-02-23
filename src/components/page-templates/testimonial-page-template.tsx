import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { NavigationHeader } from "..";

const FullHeightMain = styled.main`
	min-height: 100%;
	padding-block: 4em;
	padding-inline: clamp(1em, 10vw, 10em);
`;

const Subheader = styled.p`
	margin-bottom: 6em;
	font-weight: normal;
`;

const HeaderSection = styled.div``;

export interface TestimonialPageTemplateProps {
	date: string;
	businessName: string;
	style?: React.CSSProperties;
}

// TODO Dynamically define page's title with React Helmet (or similar)
export const TestimonialPageTemplate: React.FC<
	PropsWithChildren<TestimonialPageTemplateProps>
> = ({ children, ...props }) => {
	return (
		<>
			<NavigationHeader />

			<FullHeightMain style={props.style}>
				<HeaderSection>
					<h1>{props.businessName}</h1>

					<Subheader>
						<i>Daily testimonial component for {props.date}</i>
					</Subheader>
				</HeaderSection>

				{children}
			</FullHeightMain>
		</>
	);
};
