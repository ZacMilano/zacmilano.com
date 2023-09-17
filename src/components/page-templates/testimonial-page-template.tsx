import React, { PropsWithChildren } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import {
	BackLinkSection,
	InterTestimonialNavigation,
	NavigationHeader,
} from "..";
import { pagePaddingInline } from "$styles";

const FullHeightMain = styled.main`
	min-height: 100%;
	padding-block: 4em;
	padding-inline: ${pagePaddingInline};
`;

const Subheader = styled.p`
	font-weight: normal;
`;

const HeaderSection = styled.div``;

export interface TestimonialPageTemplateProps {
	businessName: string;
	style?: React.CSSProperties;
}

// TODO Dynamically define page's title with React Helmet (or similar)
export const TestimonialPageTemplate: React.FC<
	PropsWithChildren<TestimonialPageTemplateProps>
> = ({ children, ...props }) => {
	const path =
			typeof window !== "undefined"
				? window.location.pathname.split("/")
				: ["some day"],
		date = path[path.length - 1];

	const backLink = <Link to="../..">&larr; Back to the Gallery</Link>;

	return (
		<>
			<NavigationHeader />

			<BackLinkSection className="back-link--top">{backLink}</BackLinkSection>

			<FullHeightMain style={props.style}>
				<HeaderSection>
					<h1>{props.businessName}</h1>

					<Subheader>
						<i>Made on {date}</i>
					</Subheader>
				</HeaderSection>

				<InterTestimonialNavigation currentDate={date} />

				{children}
			</FullHeightMain>

			<BackLinkSection className="back-link--bottom">
				{backLink}
			</BackLinkSection>
		</>
	);
};
