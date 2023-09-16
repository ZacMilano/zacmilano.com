import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { NavigationHeader } from "$components";
import { pagePaddingInline } from "$styles";

const Main = styled.main`
	display: grid;
	margin-block-start: 4em;
	padding-inline: ${pagePaddingInline};

	& > * + * {
		margin-block-start: 2em;
	}

	& > header {
		margin-block-end: 2em;
	}
`;

const Subheader = styled.p`
	font-size: 1.25rem;
`;

const BoisPetsHome: React.FC = () => {
	const petLinks = (
		// @index('./pet/*', f => `<p>\n\t\t\t<Link to="${f.path}">${f.name.split("-").join(" ")}</Link>\n\t\t</p>`)
		<p>
			<Link to="./pet/Allie">Allie</Link>
		</p>
		// @endindex
	);

	return (
		<>
			<NavigationHeader />

			<Main>
				<header>
					<h1>Bois' Pets</h1>

					<Subheader>
						Your home for everything related to my social circle's pets.
					</Subheader>
				</header>

				{petLinks}
			</Main>
		</>
	);
};

export default BoisPetsHome;

export const Head: React.FC = () => {
	return <title>Bois' Pets | Zac Milano</title>;
};
