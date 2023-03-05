import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

import { VisuallyHidden, blackRockBlue } from "$styles";
import { zmLogo } from "$images";

const SiteHeader = styled.header`
	--mobile-padding: 3em;
	--logo-height: 4em;
	--transition-duration: 750ms;
	/* https://cubic-bezier.com/ */
	--transition-timing: cubic-bezier(0.77, -0.65, 0, 1.74);

	--color-accent: ${blackRockBlue};

	position: relative;

	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;

	padding-block: 2em;
	padding-inline: 4em;

	& .header-logo {
		height: var(--logo-height);
	}

	@media (max-width: 45rem) {
		padding: var(--mobile-padding);
	}
`;

const NavList = styled.ul`
	display: flex;
	justify-content: flex-start;
	gap: 2em;

	padding-left: 0;

	list-style-type: none;

	@media (max-width: 45rem) {
		position: fixed;
		z-index: 1000;

		flex-direction: column;

		inset: 0 0 0 30%;
		padding-inline: var(--mobile-padding);
		padding-block: min(30vh, 10em);

		opacity: 0%;
		background: hsl(0, 0%, 100%, 100%);
		box-shadow: -2em 0 2em hsl(0 0% 0% / 10%);

		/* backdrop-filter: blur(2em); */
		transform: translateX(100%);
	}

	transition: transform var(--transition-duration) var(--transition-timing),
		opacity var(--transition-duration) var(--transition-timing);

	&[data-visible="true"] {
		transform: translateX(0%);
		opacity: 100%;
	}
`;

const NavItem = styled.li`
	font-size: 1.5rem;

	& a {
		position: relative;

		text-decoration: none;
		color: gray;

		transition: color 250ms ease-in-out;

		&.active-link {
			color: var(--color-accent);
		}

		&:hover,
		&:focus-within {
			color: var(--color-accent);

			/* Reveal */
			&::before {
				transform: translateY(0) scaleY(1);
			}
		}

		/* Animated thick underline on hover */
		&::before {
			content: "";
			position: absolute;
			z-index: -1;

			width: 100%;
			height: 0.25em;
			bottom: -0.5em;

			background-color: var(--color-accent);

			transform: translateY(-50%) scaleY(0);
			transition: transform 250ms ease-out;
		}
	}
`;

const MobileNavToggle = styled.button`
	position: absolute;
	z-index: 9999;

	display: block;

	height: var(--logo-height);
	aspect-ratio: 1 / 1;

	padding: 0;
	background-color: transparent;

	top: var(--mobile-padding);
	right: var(--mobile-padding);

	border: 0;

	cursor: pointer;

	@media (min-width: 45rem) {
		display: none;
	}

	& .hamburger-icon {
		position: relative;

		width: 100%;
		height: 14%;

		background-color: var(--color-accent);

		/* Upper & lower bars */
		&::before,
		&::after {
			content: "";
			position: absolute;

			width: inherit;
			height: 100%;

			background-color: inherit;
		}

		/* Upper bar */
		&::before {
			top: 0;
			left: 0;

			/* For transition animation */
			transform: translateY(-200%);
		}

		/* Lower bar */
		&::after {
			left: 0;
			bottom: 0;

			/* For transition animation */
			transform: translateY(200%);
		}

		&,
		&::before,
		&::after {
			border-radius: 9999px;
			transition: opacity var(--transition-duration) var(--transition-timing),
				transform var(--transition-duration) var(--transition-timing);
		}
	}

	&[aria-expanded="true"] .hamburger-icon {
		transform: rotate(-135deg);

		&::before {
			opacity: 0%;
			transform: translateY(0%);
		}

		&::after {
			transform: rotate(270deg);
		}
	}
`;

interface InternalLinkConfig {
	path: string;
	displayText: string;
}

const topLevelLinks: InternalLinkConfig[] = [
	{ path: "/", displayText: "Home" },
	{ path: "/blog", displayText: "Blog" },
	{ path: "/gallery", displayText: "Gallery" },
];

export const NavigationHeader: React.FC = () => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	return (
		<SiteHeader>
			<Link to={"/"}>
				<img src={zmLogo} alt="Zac Milano's Logo" className="header-logo" />
			</Link>

			<MobileNavToggle
				aria-controls="primary-nav"
				aria-expanded={isNavExpanded}
				onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}
			>
				<VisuallyHidden>Menu</VisuallyHidden>
				<div className="hamburger-icon" />
			</MobileNavToggle>

			<nav id="primary-nav" aria-labelledby="primary-nav-label">
				<h2 id="primary-nav-label">
					<VisuallyHidden>Main Navigation Menu</VisuallyHidden>
				</h2>

				<NavList data-visible={isNavExpanded}>
					{topLevelLinks.map((linkConfig, index) => (
						<NavItem key={index}>
							<Link to={linkConfig.path} activeClassName={"active-link"}>
								{linkConfig.displayText}
							</Link>
						</NavItem>
					))}
				</NavList>
			</nav>
		</SiteHeader>
	);
};
