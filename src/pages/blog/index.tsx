import React from "react";

import { NavigationHeader } from "../../components";
import { Link } from "gatsby";

const BlogHome: React.FC = () => {
	return (
		<>
			<NavigationHeader />

			<main>
				<Link to="./make-the-same-thing-every-day">
					Make the Same Thing Every Day
				</Link>
			</main>
		</>
	);
};

export default BlogHome;

export const Head: React.FC = () => {
	return <title>Blog | Zac Milano</title>;
};
