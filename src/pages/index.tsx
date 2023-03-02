import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import { NavigationHeader } from "../components";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<NavigationHeader />

			<main>
				<Link to="/blog">Blog</Link>

				<Link to="/gallery">Making the same thing every day</Link>
			</main>
		</>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
