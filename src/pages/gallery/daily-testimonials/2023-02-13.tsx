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
	gap: 1em;

	width: 30em;
	padding: 2.5em;

	border-radius: 1em;

	background-color: darkslategray;
	color: white;
	font-weight: bold;

	box-shadow: 0em 0.5em 5em hsla(0, 0%, 0%, 0.5);

	transition: transform 300ms ease-in-out;

	&::before,
	&::after {
		content: "";
		position: absolute;

		inset: 1.25em;

		border-radius: inherit;

		transition: opacity 300ms ease-in-out;
	}

	/* Glowing inset border on hover */
	&::after {
		box-shadow: 0 0 2em hsla(0, 0%, 100%, 0.5),
			0 0 2em hsla(0, 0%, 100%, 0.2) inset;

		opacity: 0;
	}

	&::before {
		border: 2px solid white;
	}

	&:hover {
		transform: scale(1.05);

		&::after {
			opacity: 1;
		}
	}
`;

const QuotedPerson = styled.p`
	text-align: right;
`;

const Testimonial: React.FC = () => {
	return (
		<Card>
			<p>
				They sold me half-eaten turkey hot dogs wrapped in pre-made off-brand
				croissant dough. There were literally bites taken out of most of them.
				What kind of restaurant even is this?
			</p>
			<QuotedPerson>&mdash; Jane Friedman, Yelp reviewer</QuotedPerson>
		</Card>
	);
};

// TODO: Define consistent structure to automatically include each day in the
// index page for this meta-project, and to not repeat myself
const businessName = "Chunky Dunkies";

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate date="2023-02-13" businessName={businessName}>
			<TwoColumnTestimonial>
				<Testimonial />
				<BlurbColumn>
					<p>
						I don't have much time today, so I'm just doing something simple
						real quick.
					</p>

					<p>
						Today's business is Chunky Dunkies, a local food truck selling
						leftover party snacks. Sounds kinda gross, if you ask me.
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
