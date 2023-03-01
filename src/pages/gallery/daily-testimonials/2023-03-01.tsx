import React from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
	RatingStars,
	TestimonialHead,
	CommonBlurbColumn,
} from "../../../components";
import allie from "../../../images/allie-sniffing.jpeg";
import { CommonTestimonialProps } from "../../../types/testimonials";
import { blackRockBlue } from "../../../styles";
import { businesses } from "../../../constants";

const Avatar = styled.img`
	width: 4em;
	aspect-ratio: 1;
	border-radius: 9999px;
`;

const Review = styled.div`
	max-width: 30em;
	padding: 4em;

	background-color: var(--bg-color);
	line-height: 2;
	border-radius: var(--border-radius) var(--border-radius) 0
		var(--border-radius);
	outline: 0.25em solid ${blackRockBlue};
	box-shadow: 0 1em 2em hsl(0 0% 0% / 30%);
`;

const ReviewBody = styled.p``;

const Rating = styled.p`
	margin-block-start: 1em;

	font-size: 1.25rem;
	text-align: right;
`;

const Reviewer = styled.div`
	display: flex;
	align-items: center;
	gap: 1em;

	justify-self: end;

	padding: 2em;

	border-radius: var(--border-radius) 0 var(--border-radius)
		var(--border-radius);
	background-color: var(--bg-color);
	outline: 0.25em solid ${blackRockBlue};
	box-shadow: 0 1em 2em hsl(0 0% 0% / 30%);

	@media (max-width: 45rem) {
		flex-direction: column;
		padding: 2em 4em;
		text-align: center;
	}
`;

const ReviewerInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

const GridLayout = styled.article`
	--border-radius: 6em;
	--bg-color: ${blackRockBlue};

	display: grid;
	gap: 1.5em;

	color: white;
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({
	reviewer: { avatar, name, title },
	review: { body: reviewBody, starRating },
	...props
}) => {
	return (
		<GridLayout>
			<Review>
				<ReviewBody>{reviewBody}</ReviewBody>
				{starRating && (
					<Rating>
						<RatingStars starRating={starRating} />
					</Rating>
				)}
			</Review>

			<Reviewer>
				<Avatar src={avatar} alt={`${name}, ${title}`} />

				<ReviewerInfo>
					<b>{name}</b>
					<i>{title}</i>
				</ReviewerInfo>
			</Reviewer>
		</GridLayout>
	);
};

const today = {
	blurb: {
		business: businesses.muddAndRox,
	},
	testimonial: {
		reviewer: {
			name: "Amogus Allie",
			title: "Cat Food Connoisseur",
			avatar: allie,
		},
		review: {
			body: "Having grown up on Indiana birds & mice, Mudd & Rox's Vermin Blend is a tasty & nostalgic post-play-time meal.",
			starRating: 4,
		},
	},
} as const;

const TodaysTestimonialPage: React.FC = () => {
	const {
		blurb: { business },
		testimonial,
	} = today;

	return (
		<TestimonialPageTemplate businessName={business.name}>
			<TwoColumnTestimonial>
				<Testimonial {...testimonial} />

				<CommonBlurbColumn {...today.blurb} />
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
