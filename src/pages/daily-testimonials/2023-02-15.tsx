import React from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
} from "../../components";
import allie from "../../images/allie-sniffing.jpeg";

const BlurbColumn = styled.div``;

const QuotedPerson = styled.div`
	position: relative;

	display: flex;
	justify-content: start;
	align-items: center;

	gap: 1.5em;

	padding: 1em;

	color: white;
	background: teal;

	box-shadow: 0 1em 1em rgba(0, 0, 0, 20%);
	border-top-left-radius: 1000em;
	border-bottom-left-radius: 1000em;

	&::before {
		content: "";
		position: absolute;
		z-index: -1;

		left: -1em;
		right: 1em;
		top: -1em;
		bottom: -1em;

		border-radius: inherit;
		background-color: aquamarine;
		box-shadow: 0 1em 1em rgba(0, 0, 0, 20%);
	}

	& > img {
		width: 4em;
		aspect-ratio: 1 / 1;

		border-radius: 100%;
		box-shadow: 0 1em 1em rgba(0, 0, 0, 20%);
	}
`;

const QuotedPersonInfo = styled.div`
	display: grid;
`;

const Card = styled.article`
	display: grid;
	gap: 2.5em;

	width: 30em;
	padding: 3em;

	box-shadow: 0 1em 2em rgba(0, 0, 0, 50%);
`;

const Testimonial: React.FC = () => {
	const reviewerName = "Allison Lloyd";
	return (
		<Card>
			<QuotedPerson>
				<img src={allie} alt={reviewerName} />
				<QuotedPersonInfo>
					<b>{reviewerName}</b>
					<i>Local guide</i>
				</QuotedPersonInfo>
			</QuotedPerson>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
				praesentium numquam, amet maiores fugit dolorum, minima exercitationem
				aliquid quae veritatis facere placeat magnam voluptatum. Eligendi cum
				obcaecati excepturi aperiam dolor.
			</p>
		</Card>
	);
};

// TODO: Define consistent structure to automatically include each day in the
// index page for this meta-project, and to not repeat myself
const businessName = "Lorem's Ipsum";

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate date="2023-02-14" businessName={businessName}>
			<TwoColumnTestimonial>
				<Testimonial />

				<BlurbColumn>
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
