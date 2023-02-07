import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import styled from "styled-components";

import { MainWithCenteredContent } from "../components";

const InternalLink = styled((props) => <Link {...props} />)`
	font-size: 2em;
`;

const IndexPage: React.FC<PageProps> = () => {
	return (
		<MainWithCenteredContent>
			<InternalLink to="/blog" className="link">
				Blog
			</InternalLink>
		</MainWithCenteredContent>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
