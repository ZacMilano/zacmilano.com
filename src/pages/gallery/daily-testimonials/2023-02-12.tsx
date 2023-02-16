import React from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
} from "../../../components";

const BlurbColumn = styled.div``;

const FootballShape = styled.article`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 40em;
	height: 24em;
	padding: 10em;

	background-color: peru;
	color: white;
	font-weight: bold;

	clip-path: ellipse(50% 50% at 50% 50%);

	&::before {
		content: "";
		position: absolute;

		width: 100%;
		z-index: -1;

		border: 0.5em dashed rgba(0, 0, 0, 10%);
	}

	&::after {
		content: "";
		position: absolute;

		z-index: -2;
		inset: 0;
		bottom: 50%;

		background-color: white;

		clip-path: polygon(
			10% 100%,
			20% 100%,
			20% 0%,
			41% 2%,
			41% 20%,
			43% 20%,
			43% 2%,
			45% 2%,
			45% 20%,
			47% 20%,
			47% 2%,
			49% 2%,
			49% 20%,
			51% 20%,
			51% 2%,
			53% 2%,
			53% 20%,
			55% 20%,
			55% 2%,
			57% 2%,
			57% 20%,
			59% 20%,
			59% 0%,
			80% 0%,
			80% 100%,
			90% 100%,
			90% 0%,
			10% 0%
		);
	}
`;

const QuotedPerson = styled.p`
	text-align: right;
`;

const Testimonial: React.FC = () => {
	return (
		<FootballShape>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
				quasi mollitia obcaecati ullam repellendus. Error, non officiis?
				Nesciunt iste nam, distinctio eos nihil delectus, vero necessitatibus
				ducimus quae iure illo quasi autem ullam eligendi modi suscipit esse
				voluptate in asperiores? Quae amet hic impedit delectus mollitia aut
				eaque officia magnam.
			</p>
			<QuotedPerson>&mdash; Anonymous lunchtime regular</QuotedPerson>
		</FootballShape>
	);
};

// TODO: Define consistent structure to automatically include each day in the
// index page for this meta-project, and to not repeat myself
const businessName = "Superb Bowls";

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate date="2023-02-12" businessName={businessName}>
			<TwoColumnTestimonial>
				<Testimonial />
				<BlurbColumn>
					<p>
						I don't have much time today, so I'm just doing something simple
						real quick.
					</p>

					<p>Today's business is Superb Bowls, specializing in lunch bowls.</p>
				</BlurbColumn>
			</TwoColumnTestimonial>
		</TestimonialPageTemplate>
	);
};

export default TodaysTestimonialPage;

export const Head: React.FC = () => {
	return (
		<>
			<title>{businessName} | Testimonials</title>
			<script
				src="https://kit.fontawesome.com/6ab573e32e.js"
				crossOrigin="anonymous"
			/>
		</>
	);
};
