import React from "react";
import styled from "styled-components";

import {
	InternalLink,
	MainWithCenteredContent,
	NavigationHeader,
} from "../../components";
import { VISUALLY_HIDDEN } from "../../styles";

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

const HiddenNavLabel = styled.h2`
	${VISUALLY_HIDDEN}
`;

const TestimonialList = styled.ul`
	padding-left: 0;
	list-style-type: none;
`;

const TestimonialsHome: React.FC = () => {
	return (
		<>
			<NavigationHeader />

			<MainWithCenteredContent>
				<nav aria-labelledby="main-nav-label">
					<HiddenNavLabel id="main-nav-label">
						Main Navigation Menu
					</HiddenNavLabel>

					<TestimonialList>
						{testimonialPractices.map(({ date, businessName }) => (
							<li>
								<InternalLink to={`./${date}`}>
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
