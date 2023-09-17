import React, { PropsWithChildren } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { BackLinkSection, NavigationHeader } from "$components";
import { pagePaddingInline } from "$styles";

const FullHeightMain = styled.main`
	min-height: 100%;
	padding-block: 4em;
	padding-inline: ${pagePaddingInline};

	& > * + * {
		margin-block-start: 2em;
	}
`;

const Subheader = styled.p`
	font-weight: normal;
`;

const HeaderSection = styled.div``;

export interface GalleryPageTemplateProps {
	title: string;
	date: string;
	style?: React.CSSProperties;
}

// TODO Dynamically define page's title with React Helmet (or similar)
export const GalleryPageTemplate: React.FC<
	PropsWithChildren<GalleryPageTemplateProps>
> = ({ children, ...props }) => {
	const { title, date } = props;

	const backLink = <Link to="/gallery">&larr; Back to the Gallery</Link>;

	return (
		<>
			<NavigationHeader />

			<BackLinkSection className="back-link--top">{backLink}</BackLinkSection>

			<FullHeightMain style={props.style}>
				<HeaderSection>
					<h1>{title}</h1>

					<Subheader>
						<i>Made on {date}</i>
					</Subheader>
				</HeaderSection>

				{children}
			</FullHeightMain>

			<BackLinkSection className="back-link--bottom">
				{backLink}
			</BackLinkSection>
		</>
	);
};
