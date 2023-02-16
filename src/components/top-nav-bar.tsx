import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { VISUALLY_HIDDEN } from "../styles";
import zmLogo from "../images/zm-logo.png";

const SiteHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 2em;

	& .header-logo {
		height: 4em;
	}
`;

const HiddenNavLabel = styled.h2`
	${VISUALLY_HIDDEN}
`;

const NavList = styled.ul`
	display: flex;
	justify-content: flex-start;
	gap: 2em;

	padding-left: 0;

	list-style-type: none;
`;

const NavItem = styled.li`
	font-size: 1.5rem;

	& a {
		text-decoration: none;
		color: cornflowerblue;
	}

	& a.active-link {
		text-decoration: revert;
		color: purple;
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

export const NavigationHeader = () => {
	return (
		<SiteHeader>
			<Link to={"/"}>
				<img src={zmLogo} alt="Zac Milano's Logo" className="header-logo" />
			</Link>

			<nav aria-labelledby="main-nav-label">
				<HiddenNavLabel id="main-nav-label">
					Main Navigation Menu
				</HiddenNavLabel>

				<NavList>
					{topLevelLinks.map((linkConfig) => (
						<NavItem>
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
