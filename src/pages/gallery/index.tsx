import React from "react";
import styled from "styled-components";

import { NavigationHeader } from "../../components";
import { VisuallyHidden } from "../../styles";
import { useTestimonialRegistry } from "../../components/testimonial-registry";
import { Link } from "gatsby";

const TestimonialList = styled.ul`
	padding-left: 0;
	list-style-type: none;
`;

const TestimonialsHome: React.FC = () => {
	const registry = useTestimonialRegistry();

	return (
		<>
			<NavigationHeader />

			<main>
				<nav aria-labelledby="gallery-nav-label">
					<h2 id="gallery-nav-label">
						<VisuallyHidden>Gallery Navigation Menu</VisuallyHidden>
					</h2>

					<TestimonialList>
						{registry.map((date, index) => (
							<li key={index}>
								<Link to={`./daily-testimonials/${date}`}>{date}</Link>
							</li>
						))}
					</TestimonialList>
				</nav>
			</main>
		</>
	);
};

export default TestimonialsHome;

export const Head: React.FC = () => {
	return <title>Testimonials</title>;
};
