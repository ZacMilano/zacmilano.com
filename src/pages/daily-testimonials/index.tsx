import React from "react";

import { InternalLink, MainWithCenteredContent } from "../../components";

const TestimonialsHome: React.FC = () => {
	return (
		<MainWithCenteredContent>
			<InternalLink to="./2023-02-08">2023-02-08: FaaSt Foods</InternalLink>
		</MainWithCenteredContent>
	);
};

export default TestimonialsHome;

export const Head: React.FC = () => {
	return <title>Testimonials</title>;
};
