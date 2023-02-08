import React from "react";
import styled from "styled-components";

import { TestimonialPage, TwoColumnTestimonial } from "../../components";
import { Link } from "gatsby";

const CenteredCardWithShadow = styled.article`
	margin-inline: auto;

	display: grid;
	gap: 1em;

	width: 25em;
	height: min-content;
	padding: 3em;

	border-radius: 1em;
	box-shadow: 0em 0.5em 5em hsla(0, 0%, 0%, 0.3);
`;

const QuotedParty = styled.cite`
	text-align: right;
`;

const Testimonial: React.FC = () => {
	return (
		<CenteredCardWithShadow>
			<blockquote>
				"I would trust FaaSt Foods with my life; they've been there for me from
				the start! I highly recommend the Italian bread crumbs on your fried
				mozzarella sticks. Don't forget the marinara!"
			</blockquote>

			<QuotedParty>&mdash; Bobby Baccalieri</QuotedParty>
		</CenteredCardWithShadow>
	);
};

const TestimonialBlurb = styled.div`
	display: grid;
	gap: 2em;
`;

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPage date="2022-02-08" businessName="FaaSt Foods">
			<TwoColumnTestimonial>
				<TestimonialBlurb>
					<p>
						This is my first testimonial component that I'm making in an effort
						to build the same thing every day. I talk more about this concept in
						this <Link to="#TODO">blog post</Link>.
					</p>

					<p>
						The imaginary company being shouted out here is FaaSt Foods, which
						specializes in Frying-as-a-Service. Customers bring in their raw
						ingredients (e.g. chicken legs, mozzarella sticks) for FaaSt Foods
						to bread & fry them. Customers can specify details such as:
					</p>

					<ul>
						<li>Breading type (e.g. bread crumbs, beer batter, naked)</li>
						<li>Oil type</li>
						<li>Seasoning blend</li>
						<li>Sauce(s)</li>
						<li>Doneness (e.g. extra crispy)</li>
					</ul>
				</TestimonialBlurb>

				<Testimonial />
			</TwoColumnTestimonial>
		</TestimonialPage>
	);
};

export default TodaysTestimonialPage;