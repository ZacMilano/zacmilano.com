import React from "react";
import styled from "styled-components";

import { lucy } from "$images";
import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
	RatingStars,
	TestimonialHead,
	CommonBlurbColumn,
} from "$components";
import { CommonTestimonialProps } from "$types/testimonials";
import { blackRockBlue, blackRockBlueWithLightness } from "$styles";
import { testimonialBusinesses } from "$constants";

const Avatar = styled.img`
	width: 4em;
	aspect-ratio: 1;
	border-radius: 9999px;
`;

const ReviewBody = styled.p`
	position: relative;
	isolation: isolate;

	margin-block-start: 2em;
	line-height: 2;

	&::before {
		content: open-quote;
		position: absolute;
		z-index: -1;

		font-size: 12em;
		top: -0.75em;
		left: -0.1em;
		color: ${blackRockBlueWithLightness(85)};
	}

	&::after {
		content: no-close-quote;
	}
`;

const Rating = styled.p`
	display: flex;
	gap: 0.5em;

	& > i {
		aspect-ratio: 1;
		padding: 0.5ch;

		background-color: var(--color-accent);
		color: white;
		border-radius: 0.5ch;
	}
`;

const ReviewerSection = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5em;
`;

const ReviewerInfo = styled.div``;

const Card = styled.article`
	--color-accent: ${blackRockBlue};
	display: grid;
	gap: 2em;

	max-width: 35em;
	padding: 2.5em;

	background-color: ${blackRockBlueWithLightness(90)};

	box-shadow: 0 1em 2em ${blackRockBlueWithLightness(80)};
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({
	reviewer: { avatar, name, title },
	review: { body: reviewBody, starRating },
	...props
}) => {
	return (
		<Card>
			<ReviewerSection>
				<Avatar src={avatar} alt={`${name}, ${title}`} />

				<ReviewerInfo>
					<p>
						<b>{name}</b>
					</p>
					<p>
						<i>{title}</i>
					</p>
				</ReviewerInfo>
			</ReviewerSection>

			<ReviewBody>{reviewBody}</ReviewBody>

			{starRating && (
				<Rating>
					<RatingStars starRating={starRating} />
				</Rating>
			)}
		</Card>
	);
};

const today = {
	blurb: {
		business: testimonialBusinesses.loremsIpsum,
	},
	testimonial: {
		reviewer: {
			name: "Lucille Bluth",
			title: "Mogul",
			avatar: lucy,
		},
		review: {
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime molestiae labore laborum non, eos quam facere, similique hic ad accusamus impedit ratione, consectetur repellendus dolor! Accusantium ex assumenda voluptatibus distinctio, cupiditate in, numquam maiores velit eius libero corporis porro vitae! Vero omnis at eius doloribus quo dignissimos quis labore.",
			starRating: 3,
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
