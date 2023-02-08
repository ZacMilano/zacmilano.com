import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

import { InternalLink, MainWithCenteredContent } from "../components";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<MainWithCenteredContent>
			<InternalLink to="/blog">Blog</InternalLink>

			<InternalLink to="/daily-testimonials">
				Making the same thing every day
			</InternalLink>
		</MainWithCenteredContent>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
