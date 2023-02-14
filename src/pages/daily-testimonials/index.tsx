import React from "react";

import { InternalLink, MainWithCenteredContent } from "../../components";

const TestimonialsHome: React.FC = () => {
	return (
		<MainWithCenteredContent>
			<InternalLink to="./2023-02-08">2023-02-08: FaaSt Foods</InternalLink>
			<InternalLink to="./2023-02-09">
				2023-02-09: Froggy's Daycare
			</InternalLink>
			<InternalLink to="./2023-02-10">2023-02-10: Lorem's Ipsum</InternalLink>
			<InternalLink to="./2023-02-11">2023-02-11: Lorem's Ipsum</InternalLink>
			<InternalLink to="./2023-02-12">2023-02-12: Superb Bowls</InternalLink>
			<InternalLink to="./2023-02-13">2023-02-13: Chunky Dunkies</InternalLink>
		</MainWithCenteredContent>
	);
};

export default TestimonialsHome;

export const Head: React.FC = () => {
	return <title>Testimonials</title>;
};
