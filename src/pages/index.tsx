import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import styled from "styled-components";

import { MainWithCenteredContent } from "../components";

const InternalLink = styled((props) => <Link {...props} />)`
	font-size: 2em;
	display: block;
`;

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
