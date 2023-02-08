import React from "react";

import { TestimonialPage, TwoColumnTestimonial } from "../../components";

const Testimonial: React.FC = () => {
	return <article>Today's component</article>;
};

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPage date="2022-02-08">
			<TwoColumnTestimonial>
				<Testimonial />

				<p>Another paragraph</p>
			</TwoColumnTestimonial>
		</TestimonialPage>
	);
};

export default TodaysTestimonialPage;
