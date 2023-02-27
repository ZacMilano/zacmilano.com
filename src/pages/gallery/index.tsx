import React from "react";
import styled from "styled-components";

import {
	InternalLink,
	MainWithCenteredContent,
	NavigationHeader,
	TestimonialRegistry,
} from "../../components";
import { VisuallyHidden } from "../../styles";

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
						{TestimonialRegistry.sortedRegistry.map(
							({ date, registration }, index) => (
								<li key={index}>
									<InternalLink to={`./daily-testimonials/${date}`}>
										{`${date}: ${registration.businessName}`}
									</InternalLink>
								</li>
							)
						)}
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
