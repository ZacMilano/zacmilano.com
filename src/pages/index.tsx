import { HeadFC, Link, PageProps } from "gatsby";
import * as React from "react";
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

const Welcome = styled.p`
	font-size: 1.25rem;
`;

// TODO make shiny link
const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<NavigationHeader />

			<Main>
				<header>
					<h1>Hi, I'm Zac Milano.</h1>

					<Welcome>Welcome to my page.</Welcome>
				</header>

				<p>
					Check out my latest project, Bois' Pets,{" "}
					<Link to="/bois-pets">here</Link>.
				</p>

				<p>
					Find a couple blog posts <Link to="/blog">here</Link>.
				</p>

				<p>
					See parts of the website I've worked on in the past{" "}
					<Link to="/gallery">here</Link>.
				</p>
			</Main>
		</>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
