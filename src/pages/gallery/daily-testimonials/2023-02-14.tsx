import React from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
	TestimonialHead,
} from "../../../components";

const BlurbColumn = styled.div``;

const RatingBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Rating = styled.div`
	display: flex;
	/* gap: 1em; */
	color: white;

	& > i {
		aspect-ratio: 1 / 1;
	}
`;

const QuotedPerson = styled.p`
	text-align: right;
`;

const Card = styled.article`
	--animation-duration: 1000ms;
	--animation-timing: ease-in-out;

	position: relative;
	box-shadow: 0em 0.5em 5em hsla(0, 0%, 0%, 0.5);

	display: flex;
	flex-direction: column;
	gap: 1em;

	max-width: 35em;
	padding: 3em;

	color: white;
	font-weight: bold;
	line-height: 2;

	border-radius: 1em;
	overflow: hidden;

	transition: transform var(--animation-duration) var(--animation-timing);

	&::before {
		content: "";
		position: absolute;

		inset: 0;

		border-radius: inherit;
		background: linear-gradient(
			to bottom right,
			rgba(80, 33, 112, 1) 0%,
			rgba(131, 58, 180, 1) 35%,
			rgba(253, 29, 29, 1) 75%,
			rgba(252, 176, 69, 1) 100%
		);

		transform: scale(3) translateX(30%);

		transition: transform var(--animation-duration) var(--animation-timing);
	}

	&::before {
		z-index: -1;
	}

	&:hover {
		transform: scale(1.03);

		&::before {
			transform: scale(3) translateX(-30%);
			opacity: 1;
		}
	}
`;

const Testimonial: React.FC = () => {
	return (
		<Card>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
				praesentium numquam, amet maiores fugit dolorum, minima exercitationem
				aliquid quae veritatis facere placeat magnam voluptatum. Eligendi cum
				obcaecati excepturi aperiam dolor.
			</p>

			<RatingBlock>
				<Rating>
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
					<i className="fa-regular fa-star"></i>
					<i className="fa-regular fa-star"></i>
				</Rating>

				<QuotedPerson>&mdash; Lucille Milano</QuotedPerson>
			</RatingBlock>
		</Card>
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
						I have some extra time today, but I want to focus that into the
						testimonial component and not the copy text over here.
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
	return (
		<TestimonialHead businessName={businessName} includeFontAwesomeScript />
	);
};
