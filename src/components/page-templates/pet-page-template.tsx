import React, { PropsWithChildren } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { BackLinkSection, InfoBox, NavigationHeader } from "..";
import { pagePaddingInline } from "$styles";
import { PetPageData } from "$data";

const FullHeightMain = styled.main`
	min-height: 100%;
	padding-block: 4em;
	padding-inline: ${pagePaddingInline};
`;

const SummarySection = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2em;
	margin-block: 2em;

	@media only screen and (min-width: 48rem) {
		grid-template-columns: 2fr minmax(24rem, 1fr);
	}
`;

const Section = styled.section`
	margin-block: 2em;
`;

export interface PetPageTemplateProps {
	intro: React.ReactElement;
	pet: PetPageData;
	style?: React.CSSProperties;
}

// TODO Dynamically define page's title with React Helmet (or similar)
export const PetPageTemplate: React.FC<
	PropsWithChildren<PetPageTemplateProps>
> = ({ intro, children, pet, style, ...rest }) => {
	const backLink = <Link to="../..">&larr; Back to Bois' Pets</Link>;

	/**
	 * Layout
	 *
	 * Desktop:
	 *
	 * Title
	 * Intro # <= Info Card
	 * text  # <=
	 *
	 * Gallery
	 *
	 * Section
	 *
	 * Section
	 */

	return (
		<>
			<NavigationHeader />

			<BackLinkSection className="back-link--top">{backLink}</BackLinkSection>

			<FullHeightMain style={style}>
				<h1>{pet.name}</h1>

				<SummarySection>
					{intro}
					<InfoBox pet={pet} />
				</SummarySection>

				{children}
			</FullHeightMain>

			<BackLinkSection className="back-link--bottom">
				{backLink}
			</BackLinkSection>
		</>
	);
};
