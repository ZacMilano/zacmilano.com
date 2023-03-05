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
					Check out my blog posts <Link to="/blog">here</Link>.
				</p>

				<p>
					Check out a collection of the stuff I've been working on lately{" "}
					<Link to="/gallery">here</Link>.
				</p>
			</Main>
		</>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
