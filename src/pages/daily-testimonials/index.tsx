import React from "react";

import {
	InternalLink,
	MainWithCenteredContent,
	NavigationHeader,
} from "../../components";

interface TestimonialPracticeConfig {
	date: string;
	businessName: string;
}

const testimonialPractices: TestimonialPracticeConfig[] = [
	{ date: "2023-02-08", businessName: "FaaSt Foods" },
	{ date: "2023-02-09", businessName: "Froggy's Daycare" },
	{ date: "2023-02-10", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-11", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-12", businessName: "Superb Bowls" },
	{ date: "2023-02-13", businessName: "Chunky Dunkies" },
	{ date: "2023-02-14", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-15", businessName: "Lorem's Ipsum" },
];

const TestimonialsHome: React.FC = () => {
	return (
		<>
			<NavigationHeader />

			<MainWithCenteredContent>
				{testimonialPractices.map(({ date, businessName }) => (
					<InternalLink to={`./${date}`}>
						{`${date}: ${businessName}`}
					</InternalLink>
				))}
			</MainWithCenteredContent>
		</>
	);
};

export default TestimonialsHome;

export const Head: React.FC = () => {
	return <title>Testimonials</title>;
};
