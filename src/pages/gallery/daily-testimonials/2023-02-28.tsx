import React from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
	RatingStars,
	TestimonialHead,
} from "../../../components";
import luSeal from "../../../images/lu-seal.jpg";
import { CommonTestimonialProps } from "../../../types/testimonials";
import { blackRockBlueWithAlpha } from "../../../styles";

const BlurbColumn = styled.div`
	& > * + * {
		margin-block-start: 1em;
	}
`;

const ReviewBody = styled.p`
	line-height: 2;

	position: relative;

	display: inline-block;

	max-width: 25em;
	height: max-content;
	padding: var(--padding);

	border-radius: var(--padding);
`;

const FloatingInfo = styled.div`
	display: grid;
	justify-self: center;
	align-self: center;

	padding: var(--padding);
	width: max-content;

	border-radius: var(--padding);
	box-shadow: 0 1em 2em hsl(0 0% 0% / 30%);

	& > img {
		margin-block-end: 1em;
	}

	& > :last-child {
		margin-block-start: 2em;
	}

	& > * {
		justify-self: center;
		align-self: center;
	}
`;

const Avatar = styled.img`
	width: 5em;
	aspect-ratio: 1;
`;

const Rating = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.25em;
`;

const GridLayout = styled.article`
	--padding: 2.5em;

	display: grid;
	grid-template-columns: auto auto;
	gap: 2em;
	padding: var(--padding);
	/* max-width: 55em; */

	background-color: ${blackRockBlueWithAlpha(15)};

	& .neumorphic {
		position: relative;

		&::after {
			content: "";
			position: absolute;
			z-index: 10;

			inset: 0;

			box-shadow: -1em -1em 3em white, 1em 1em 3em ${blackRockBlueWithAlpha(30)};
			border-radius: inherit;
		}
	}

	@media (max-width: 55rem) {
		grid-template-columns: auto;
	}
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({
	reviewer: { avatar, name, title },
	review: { body: reviewBody, starRating },
	...props
}) => {
	return (
		<GridLayout>
			<ReviewBody className="neumorphic">{reviewBody}</ReviewBody>

			<FloatingInfo className="neumorphic">
				<Avatar src={avatar} alt={`${name}, ${title}`} />

				<b>{name}</b>
				<i>{title}</i>

				{starRating && (
					<Rating>
						<RatingStars starRating={starRating} />
					</Rating>
				)}
			</FloatingInfo>
		</GridLayout>
	);
};

const today = {
	blurb: {
		business: {
			name: "Mudd & Rox",
			specialty: "cat food, both wet and dry",
		},
	},
	testimonial: {
		reviewer: {
			name: "Bungus McGee",
			title: "Former Street Cat",
			avatar: luSeal,
		},
		review: {
			body: "Mudd & Rox is my favorite things. I eat them every day, at least twice per day. My pa chases me around for a couple minutes beforehand, I don't really get it. And then my cousin Allie punches me in the head a couple times. Is that enough for your review, MuddMann?",
			starRating: 5,
		},
	},
} as const;

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate businessName={today.blurb.business.name}>
			<TwoColumnTestimonial>
				<Testimonial {...today.testimonial} />

				<BlurbColumn>
					<p>
						Today's business is {today.blurb.business.name}, specializing in{" "}
						{today.blurb.business.specialty}.
					</p>

					<p>
						{today.blurb.business.name} is a somewhat trendy company, with some
						rather neumorphic web design. We snagged a screenshot from their
						site, since their background color is a little different from ours.
					</p>
				</BlurbColumn>
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
