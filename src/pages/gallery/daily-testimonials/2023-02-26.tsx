import React from "react";
import styled from "styled-components";

import {
	CommonBlurbColumn,
	TwoColumnTestimonial,
	TestimonialPageTemplate,
} from "../../../components";
import luSeal from "../../../images/lu-seal.jpg";
import { CommonTestimonialProps } from "../../../types/testimonials";
import { RatingStars } from "../../../components/rating-stars";

const Card = styled.article`
	--padding: 3em;
	--color-accent: hsl(239, 43%, 41%);
	--color-accent-300: hsl(239, 43%, 41%, 30%);

	display: flex;
	align-items: stretch;

	max-width: 35em;

	outline: 2px solid var(--color-accent);

	@media (max-width: 45rem) {
		flex-direction: column;
	}
`;

const ReviewBody = styled.p`
	padding: var(--padding);
	line-height: 2;
`;

const Avatar = styled.img`
	width: 4em;
	aspect-ratio: 1;
	border-radius: 9999px;
`;

const Rating = styled.div`
	display: flex;
	gap: 0.25em;
`;

const ReviewMetadata = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: var(--padding);

	color: white;
	background-color: var(--color-accent);
	box-shadow: 0 1em 4em var(--color-accent-300);

	& > * {
		justify-self: center;
	}

	& > img {
		margin-block-end: 1em;
	}

	& > :last-child {
		padding-block-start: 1em;
		margin-block-start: auto;
	}
`;

const BlurbColumn = styled.div`
	/* All direct children with a sibling before them, i.e. all but the first one */
	& > * + * {
		margin-block-start: 1em;
	}
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({ ...props }) => {
	return (
		<Card className={props.className}>
			<ReviewMetadata>
				<Avatar
					src={props.reviewer.avatar}
					alt={`${props.reviewer.name}, ${props.reviewer.title}`}
				/>

				<b>{props.reviewer.name}</b>
				<i>{props.reviewer.title}</i>

				{props.review.starRating && (
					<Rating>
						<RatingStars starRating={props.review.starRating} />
					</Rating>
				)}
			</ReviewMetadata>

			<ReviewBody>{props.review.body}</ReviewBody>
		</Card>
	);
};

const today = {
	blurb: {
		business: {
			name: "EagleEye, LLC",
			specialty: "private investigation services",
		},
	},
	testimonial: {
		reviewer: {
			name: "Lucille Milano",
			title: "Fearful Cat",
			avatar: luSeal,
		},
		review: {
			body: "Holy guacamole. I think my cousin put these guys on me (I read her review). I'm not sure why though, we share all our foods and litter box and beds and toys and stuff. I can't stress enough how scared I am all the time because of them. I'm toast.",
			date: "2023-02-26",
			starRating: 5,
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

				<BlurbColumn>
					<p>
						Today's business is {today.blurb.business.name}, specializing in{" "}
						{today.blurb.business.specialty}.
					</p>

					<p>
						Try changing the window's width (if on desktop) to see the
						responsiveness of today's component!
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
			<title>{today.blurb.business.name} | Testimonials</title>
			<script
				src="https://kit.fontawesome.com/6ab573e32e.js"
				crossOrigin="anonymous"
			/>
		</>
	);
};
