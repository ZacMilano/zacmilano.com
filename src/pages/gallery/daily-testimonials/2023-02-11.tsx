import React from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
	TestimonialHead,
} from "$components";

const BlurbColumn = styled.div``;

const CardWithDecor = styled.article`
	position: relative;

	max-width: 30em;

	padding: 3em;
	text-align: justify;
	text-indent: 3em;

	background-color: black;
	color: white;
	border-radius: 1em;
	box-shadow: 0em 0.5em 5em hsla(0, 0%, 0%, 0.3);

	&::before,
	&::after {
		content: "";
		position: absolute;
		z-index: -1;

		width: 20%;
		height: 50%;

		border-radius: inherit;
		box-shadow: 0em 0.5em 5em hsla(0, 0%, 0%, 0.3);
	}

	&::before {
		transform: rotate(-15deg);

		top: -1em;
		left: -1.5em;

		background-color: cornflowerblue;
	}

	&::after {
		transform: rotate(15deg);

		bottom: -1em;
		right: -1.5em;

		background-color: deepskyblue;
	}
`;

const QuotedPerson = styled.p`
	text-align: right;
`;

const Testimonial: React.FC = () => {
	return (
		<CardWithDecor>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
				quasi mollitia obcaecati ullam repellendus. Error, non officiis?
				Nesciunt iste nam, distinctio eos nihil delectus, vero necessitatibus
				ducimus quae iure illo quasi autem ullam eligendi modi suscipit esse
				voluptate in asperiores? Quae amet hic impedit delectus mollitia aut
				eaque officia magnam.
			</p>

			<QuotedPerson>&mdash; Allison Yoyd</QuotedPerson>
		</CardWithDecor>
	);
};

const businessName = "Lorem's Ipsum";

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate businessName={businessName}>
			<TwoColumnTestimonial>
				<Testimonial />
				<BlurbColumn>
					<p>
						I don't have much time today, so I'm just doing something simple
						real quick.
					</p>

					<p>
						Today's business is Lorem's Ipsum again, specializing in non-english
						copy text.
					</p>
				</BlurbColumn>
			</TwoColumnTestimonial>
		</TestimonialPageTemplate>
	);
};

export default TodaysTestimonialPage;

export const Head: React.FC = () => {
	return <TestimonialHead businessName={businessName} />;
};
