import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

import {
	InternalLink,
	MainWithCenteredContent,
	NavigationHeader,
} from "../components";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<NavigationHeader />

			<MainWithCenteredContent>
				<InternalLink to="/blog">Blog</InternalLink>

				<InternalLink to="/gallery">
					Making the same thing every day
				</InternalLink>
			</MainWithCenteredContent>
		</>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
