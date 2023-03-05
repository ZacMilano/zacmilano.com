import React from "react";
import styled from "styled-components";

import { allie } from "$images";
import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
	TestimonialHead,
	CommonBlurbColumn,
	RatingStars,
} from "$components";
import { CommonTestimonialProps } from "$types/testimonials";
import { blackRockBlue } from "$styles";
import { testimonialBusinesses } from "$constants";

const Avatar = styled.img`
	width: 6em;
	aspect-ratio: 1;
	border-radius: 9999px;
`;

const ReviewBody = styled.p`
	position: relative;

	line-height: 2;

	&::before {
		content: open-quote;

		position: absolute;
		top: -0.75em;
		left: -0.75ch;

		color: var(--color-accent);
		font-size: 8rem;
		/* text-shadow: -0.01em 0.01em 10px hsl(0 0% 0% / 50%); */
	}

	&::after {
		content: no-close-quote;
	}
`;

const Rating = styled.p`
	display: flex;
	gap: 1ch;

	& > i {
		aspect-ratio: 1;
		color: white;
		background-color: var(--color-accent);
		padding: 0.5ch;
		border-radius: 0.5ch;
	}
`;

const ReviewerSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.25em;

	min-width: max-content;

	& > img {
		margin-block-end: 1em;
	}

	& > .rating {
		margin-block-start: auto;
	}
`;

const Container = styled.article`
	--color-accent: ${blackRockBlue};

	display: flex;
	align-items: stretch;
	gap: 3em;

	max-width: 35em;
	padding: 3em;

	box-shadow: 0 1em 2em hsl(0 0% 0% / 30%);

	@media (max-width: 45rem) {
		flex-direction: column;
		gap: 6em;

		.rating {
			margin-block-start: 1em;
		}

		.review-body::before {
			left: 0;
			top: -1em;
		}
	}
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({
	reviewer: { avatar, name, title },
	review: { body: reviewBody, starRating },
	...props
}) => {
	const avatarAltText = `${name}, ${title}`;

	return (
		<Container>
			<ReviewerSection>
				<Avatar src={avatar} alt={avatarAltText} />

				<p>
					<b>{name}</b>
				</p>

				<p>
					<i>{title}</i>
				</p>

				{starRating && (
					<Rating className="rating">
						<RatingStars starRating={starRating} />
					</Rating>
				)}
			</ReviewerSection>

			<ReviewBody className="review-body">{reviewBody}</ReviewBody>
		</Container>
	);
};

const today = {
	blurb: {
		business: testimonialBusinesses.loremsIpsum,
	},
	testimonial: {
		reviewer: {
			name: "Allie Jandro",
			title: "Monster of the Night",
			avatar: allie,
		},
		review: {
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime molestiae labore laborum non, eos quam facere, similique hic ad accusamus impedit ratione, consectetur repellendus dolor! Accusantium ex assumenda voluptatibus distinctio, cupiditate in, numquam maiores velit eius libero corporis porro vitae! Vero omnis at eius doloribus quo dignissimos quis labore.",
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
