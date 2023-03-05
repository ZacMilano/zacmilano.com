import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { InterTestimonialNavigation, NavigationHeader } from "..";
import {
	blackRockBlue,
	blackRockBlueWithAlpha,
	pagePaddingInline,
} from "../../styles";
import { Link } from "gatsby";

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
