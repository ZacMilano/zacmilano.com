import React from "react";

import { InternalLink, MainWithCenteredContent } from "../../components";

const TestimonialsHome: React.FC = () => {
	return (
		<MainWithCenteredContent>
			<InternalLink to="./2023-02-08">2023-02-08: FaaSt Foods</InternalLink>
			<InternalLink to="./2023-02-09">
				2023-02-09: Froggy's Daycare
			</InternalLink>
		</MainWithCenteredContent>
	);
};

export default TestimonialsHome;

export const Head: React.FC = () => {
	return <title>Testimonials</title>;
};
