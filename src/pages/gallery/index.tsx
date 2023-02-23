import React from "react";
import styled from "styled-components";

import {
	InternalLink,
	MainWithCenteredContent,
	NavigationHeader,
} from "../../components";
import { VisuallyHidden } from "../../styles";

interface TestimonialPracticeConfig {
	date: string;
	businessName: string;
}

// TODO: Create TestimonialRegistry, and make testimonial pages auto-register
// => This may make us lose this guaranteed data of first/last date

// The registry/database & source of truth for testimonial metadata
const testimonialPractices: TestimonialPracticeConfig[] = [
	{ date: "2023-02-08", businessName: "FaaSt Foods" },
	{ date: "2023-02-09", businessName: "Froggy's Daycare" },
	{ date: "2023-02-10", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-11", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-12", businessName: "Superb Bowls" },
	{ date: "2023-02-13", businessName: "Chunky Dunkies" },
	{ date: "2023-02-14", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-15", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-16", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-17", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-18", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-19", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-20", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-21", businessName: "Lorem's Ipsum" },
	{ date: "2023-02-22", businessName: "EagleEye, LLC" },
];

export const firstTestimonialDate = testimonialPractices[0].date;
export const lastTestimonialDate =
	testimonialPractices[testimonialPractices.length - 1].date;

const TestimonialList = styled.ul`
	padding-left: 0;
	list-style-type: none;
`;

const TestimonialsHome: React.FC = () => {
	return (
		<>
			<NavigationHeader />

			<MainWithCenteredContent>
				<nav aria-labelledby="gallery-nav-label">
					<h2 id="gallery-nav-label">
						<VisuallyHidden>Gallery Navigation Menu</VisuallyHidden>
					</h2>

					<TestimonialList>
						{testimonialPractices.map(({ date, businessName }) => (
							<li>
								<InternalLink to={`./daily-testimonials/${date}`}>
									{`${date}: ${businessName}`}
								</InternalLink>
							</li>
						))}
					</TestimonialList>
				</nav>
			</MainWithCenteredContent>
		</>
	);
};

export default TestimonialsHome;

export const Head: React.FC = () => {
	return <title>Testimonials</title>;
};
