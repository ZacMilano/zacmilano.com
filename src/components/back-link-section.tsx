import styled from "styled-components";

import {
	blackRockBlue,
	blackRockBlueWithAlpha,
	pagePaddingInline,
} from "$styles";

export const BackLinkSection = styled.section`
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
