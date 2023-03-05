import React from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
	CommonBlurbColumn,
	RatingStars,
	TestimonialHead,
} from "$components";
import luSeal from "$images/lu-seal.jpg";
import { CommonTestimonialProps } from "$types/testimonials";
import { blackRockBlue } from "$styles";

const Avatar = styled.img`
	width: 4em;
	aspect-ratio: 1;
`;

const Card = styled.article`
	--gap: 3em;
	--color-accent: ${blackRockBlue};

	position: relative;

	max-width: 30em;
	padding: var(--gap) var(--gap) var(--gap);

	line-height: 2;

	border: 2px solid var(--color-accent);
`;

const ReviewerDataSection = styled.div`
	display: flex;
	align-items: center;
	gap: var(--gap);
	margin-block-end: calc(0.5 * var(--gap));
`;

const ReviewerData = styled.div`
	position: relative;

	display: grid;

	&::before {
		content: "";
		position: absolute;

		height: 100%;
		width: 2px;
		left: calc(-0.5 * var(--gap));

		background-color: var(--color-accent);
	}
`;

const Rating = styled.div`
	position: absolute;

	padding: 1.5em 2em;
	min-width: max-content;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%) translateY(50%);

	background: var(--color-accent);
	color: white;

	/* Gap between stars */
	& > i + i {
		margin-inline-start: 0.25em;
	}
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({ ...props }) => {
	return (
		<Card className={props.className}>
			<ReviewerDataSection>
				<Avatar
					src={props.reviewer.avatar}
					alt={`${props.reviewer.name}, ${props.reviewer.title}`}
				/>

				<ReviewerData>
					<b>{props.reviewer.name}</b>
					<i>{props.reviewer.title}</i>
				</ReviewerData>
			</ReviewerDataSection>

			<p>{props.review.body}</p>

			{props.review.starRating && (
				<Rating>
					<RatingStars starRating={props.review.starRating} />
				</Rating>
			)}
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
			name: "Lucy Deuci",
			title: "Local Angel",
			avatar: luSeal,
		},
		review: {
			body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptate repudiandae doloremque quibusdam facilis voluptatibus unde? Doloremque, vero. Voluptatem adipisci aliquam accusamus laborum omnis enim sunt laudantium voluptates, illum eaque ipsa laboriosam nesciunt ratione obcaecati, fugit optio? Commodi, in? Dolor consequatur adipisci consectetur ad veniam ipsum quod veritatis velit ex!",
			starRating: 3,
		},
	},
} as const;

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate businessName={today.blurb.business.name}>
			<TwoColumnTestimonial>
				<Testimonial {...today.testimonial} />

				<CommonBlurbColumn business={today.blurb.business} />
			</TwoColumnTestimonial>
		</TestimonialPageTemplate>
	);
};

export default TodaysTestimonialPage;

export const Head: React.FC = () => {
	return (
		<TestimonialHead
			businessName={today.blurb.business.name}
			includeFontAwesomeScript
		/>
	);
};
