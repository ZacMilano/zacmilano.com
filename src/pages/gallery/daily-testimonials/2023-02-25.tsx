import React from "react";
import styled from "styled-components";

import {
	CommonBlurbColumn,
	TwoColumnTestimonial,
	TestimonialPageTemplate,
} from "../../../components";
import allie from "../../../images/allie-sniffing.jpeg";
import { CommonTestimonialProps } from "../../../types/testimonials";

const Rating = styled.div`
	position: absolute;
	z-index: -1;
	width: 100%;
	bottom: 0;

	display: flex;
	gap: 0.25em;

	padding: var(--padding);
	background-color: var(--color-accent);
	color: white;

	transition: transform var(--duration) var(--timing);
`;

const ReviewerSection = styled.div`
	position: absolute;
	z-index: -1;

	display: flex;
	gap: 2em;

	width: 100%;
	padding: var(--padding);

	color: white;
	background-color: var(--color-accent);

	transition: transform var(--duration) var(--timing);
`;

const Avatar = styled.img`
	width: 4em;
	aspect-ratio: 1;
	border-radius: 999px;
`;

const ReviewerInfo = styled.div`
	display: grid;
`;

const ReviewBody = styled.p`
	z-index: 2;

	padding: var(--padding);
	background: white;

	transition: transform var(--duration) var(--timing);

	&::after {
		content: "";
		position: absolute;

		inset: 0;

		opacity: 0;
		box-shadow: 0 1em 2em var(--color-accent);

		transition: opacity var(--duration) var(--timing);
	}
`;

const Card = styled.article`
	--padding: 3em;
	--color-accent: hsl(239, 43%, 41%);
	--duration: 300ms;
	--timing: ease-out;

	position: relative;
	z-index: 2;

	max-width: 30em;

	line-height: 2;

	outline: 2px solid var(--color-accent);

	transition: outline var(--duration) var(--timing);

	&:hover {
		outline: 2px solid transparent;

		& .review-body-section {
			transform: scale(1.05);

			&::after {
				opacity: 1;
			}
		}

		& .rating-section {
			transform: translateY(100%);
		}

		& .reviewer-section {
			transform: translateY(-100%);
		}
	}
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({ ...props }) => {
	return (
		<Card className={props.className}>
			<ReviewerSection className="reviewer-section">
				<Avatar
					src={props.reviewer.avatar}
					alt={`${props.reviewer.name}, ${props.reviewer.title}`}
				/>

				<ReviewerInfo>
					<b>{props.reviewer.name}</b>
					<i>{props.reviewer.title}</i>
				</ReviewerInfo>
			</ReviewerSection>

			<ReviewBody className="review-body-section">
				{props.review.body}
			</ReviewBody>

			<Rating className="rating-section">
				{props.review.starRating &&
					Array.from(Array(5)).map((value, index) => {
						const starIcon = "fa-star";
						let style: string;

						if (
							props.review.starRating &&
							index + 1 <= props.review.starRating
						) {
							style = "fa-solid";
						} else {
							style = "fa-regular";
						}

						return <i className={`${starIcon} ${style}`} />;
					})}
			</Rating>
		</Card>
	);
};

const today = {
	blurb: {
		business: {
			name: "Lorem's Ipsum",
			specialty: "non-English copy text",
		},
	},
	testimonial: {
		reviewer: {
			name: "Allie Cat",
			title: "Amateur Cat",
			avatar: allie,
		},
		review: {
			body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, suscipit optio explicabo incidunt tenetur veritatis omnis eaque iusto quisquam placeat saepe iure nesciunt dignissimos perspiciatis voluptatem nemo nobis in, at a delectus magni? Sequi modi tenetur veritatis repellat fugit repudiandae numquam, suscipit ratione doloribus impedit esse corrupti corporis vitae tempore.",
			date: "2023-02-25",
			starRating: 4,
		},
	},
} as const;

// TODO: Define consistent structure to automatically include each day in the
// index page for this meta-project, and to not repeat myself
const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate
			date={today.testimonial.review.date}
			businessName={today.blurb.business.name}
		>
			<TwoColumnTestimonial>
				<Testimonial {...today.testimonial} />
				<CommonBlurbColumn {...today.blurb} />
			</TwoColumnTestimonial>
		</TestimonialPageTemplate>
	);
};

export default TodaysTestimonialPage;

export const Head: React.FC = () => {
	return (
		<>
			<title>{today.blurb.business.name} | Testimonials</title>
			<script
				src="https://kit.fontawesome.com/6ab573e32e.js"
				crossOrigin="anonymous"
			/>
		</>
	);
};
