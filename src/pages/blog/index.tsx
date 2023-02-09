import React from "react";

import { InternalLink, MainWithCenteredContent } from "../../components";

const BlogHome: React.FC = () => {
	return (
		<MainWithCenteredContent>
			<InternalLink to="./make-the-same-thing-every-day">
				Make the Same Thing Every Day
			</InternalLink>
		</MainWithCenteredContent>
	);
};

export default BlogHome;

export const Head: React.FC = () => {
	return <title>Blog | Zac Milano</title>;
};
