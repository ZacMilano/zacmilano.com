import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { NavigationHeader } from "$components";
import {
	blackRockBlue,
	blackRockBlueWithAlpha,
	pagePaddingInline,
} from "$styles";
import { Link } from "gatsby";

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

	const backLink = <Link to="..">&larr; Back to the Gallery</Link>;

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
