import React from "react";

import {
	InternalLink,
	MainWithCenteredContent,
	NavigationHeader,
} from "../../components";

const BlogHome: React.FC = () => {
	return (
		<>
			<NavigationHeader />

			<MainWithCenteredContent>
				<InternalLink to="./make-the-same-thing-every-day">
					Make the Same Thing Every Day
				</InternalLink>
			</MainWithCenteredContent>
		</>
	);
};

export default BlogHome;

export const Head: React.FC = () => {
	return <title>Blog | Zac Milano</title>;
};
