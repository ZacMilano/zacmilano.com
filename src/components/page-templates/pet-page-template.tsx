import React, { PropsWithChildren } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { NavigationHeader } from "..";
import {
	blackRockBlue,
	blackRockBlueWithAlpha,
	pagePaddingInline,
} from "$styles";

const FullHeightMain = styled.main`
	min-height: 100%;
	padding-block: 4em;
	padding-inline: ${pagePaddingInline};
`;

const Subheader = styled.p`
	font-weight: normal;
`;

const HeaderSection = styled.div``;

const BackLinkSection = styled.section`
	padding-inline: ${pagePaddingInline};

	&.back-link {
		&--bottom {
			padding-block: 10em;
		}

		&--top {
			margin-block-start: 4em;
		}
	}

	& > a {
		position: relative;

		display: inline-block;
		padding: 1em;

		background-color: white;
		color: ${blackRockBlue};
		border: 2px solid ${blackRockBlue};

		font-weight: bold;
		text-decoration: none;

		&::after {
			content: "";
			position: absolute;
			inset: 0;

			opacity: 0;

			border-radius: inherit;
			box-shadow: 0 1em 1em ${blackRockBlueWithAlpha(15)};

			transition: opacity 250ms ease-out;
		}

		:is(&:hover, &:focus-visible)::after {
			opacity: 1;
		}
	}
`;

export interface PetPageTemplateProps {
	petName: string;
	style?: React.CSSProperties;
}

// TODO Dynamically define page's title with React Helmet (or similar)
export const PetPageTemplate: React.FC<
	PropsWithChildren<PetPageTemplateProps>
> = ({ children, petName, ...props }) => {
	const backLink = <Link to="../..">&larr; Back to Bois' Pets</Link>;

	return (
		<>
			<NavigationHeader />

			<BackLinkSection className="back-link--top">{backLink}</BackLinkSection>

			<FullHeightMain style={props.style}>
				<HeaderSection>
					<h1>{petName}</h1>
				</HeaderSection>

				{children}
			</FullHeightMain>

			<BackLinkSection className="back-link--bottom">
				{backLink}
			</BackLinkSection>
		</>
	);
};
