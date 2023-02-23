import React from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
} from "../../../components";

const BlurbColumn = styled.div``;

const Card = styled.article`
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: flex-end;

	max-width: 30em;
	padding: 3em;

	background-color: white;
	border-radius: 1em;
	box-shadow: 0em 0.5em 5em hsla(0, 0%, 0%, 0.3);

	&::before,
	&::after {
		content: "";
		position: absolute;
		z-index: -1;
		border-radius: 1em;
	}
	&::after {
		top: -1em;
		bottom: -1em;
		left: 1em;
		right: 1em;
		background-color: teal;
	}
	&::before {
		top: 1em;
		bottom: 1em;
		left: -1em;
		right: -1em;
		background-color: aqua;
	}
`;

const QuotedPerson = styled.p`
	width: max-content;
	align-self: right;
`;

const Testimonial: React.FC = () => {
	return (
		<Card>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
				blanditiis corrupti maxime iusto dolorem tempora expedita molestias
				labore praesentium quod ratione reiciendis cumque necessitatibus libero
				facere autem quis distinctio. Vel quia dolore ad, tempore nisi doloribus
				magnam odio porro harum. Cupiditate esse consequuntur maxime labore
				assumenda possimus iure autem ratione.
			</p>

			<QuotedPerson>&mdash; Dolor S. Amet</QuotedPerson>
		</Card>
	);
};

// TODO: Define consistent structure to automatically include each day in the
// index page for this meta-project, and to not repeat myself
const businessName = "Lorem's Ipsum";

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate date="2023-02-10" businessName={businessName}>
			<TwoColumnTestimonial>
				<Testimonial />
				<BlurbColumn>
					<p>
						I don't have much time today, so I'm just doing something simple
						real quick.
					</p>

					<p>
						Today's business is Lorem's Ipsum, specializing in non-english copy
						text.
					</p>
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
