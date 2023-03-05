import React from "react";
import styled from "styled-components";

import lucy from "$images/lu-seal.jpg";
import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
	TestimonialHead,
	CommonBlurbColumn,
} from "$components";
import { CommonTestimonialProps } from "$types/testimonials";
import { blackRockBlueWithLightness } from "$styles";
import { testimonialBusinesses } from "$constants";

const Avatar = styled.img`
	width: 6em;
	aspect-ratio: 1;
	border-radius: 9999px;
`;

const ReviewBody = styled.p`
	--bg-color: ${blackRockBlueWithLightness(85)};
	--triangle-height: 2em;

	position: relative;

	padding: 2em;
	margin-block-end: calc(1em + var(--triangle-height));

	background-color: var(--bg-color);
	line-height: 2;
	border-radius: 1em;

	&::after {
		content: "";
		position: absolute;
		bottom: calc(-1 * var(--triangle-height));
		left: 0;

		width: 0;
		height: 0;

		border: calc(var(--triangle-height)) solid transparent;
		border-color: transparent transparent transparent var(--bg-color);
	}
`;

const Rating = styled.p``;

const ReviewerSection = styled.div`
	display: flex;
	align-items: center;
	gap: 1em;
`;

const ReviewerInfo = styled.div``;

const Container = styled.article`
	max-width: 30em;
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({
	reviewer: { avatar, name, title },
	review: { body: reviewBody, starRating },
	...props
}) => {
	const avatarAltText = `${name}, ${title}`;

	return (
		<Container>
			<ReviewBody>{reviewBody}</ReviewBody>

			<ReviewerSection>
				<Avatar src={avatar} alt={avatarAltText} />

				<ReviewerInfo>
					<p>
						<b>{name}</b>
					</p>

					<p>
						<i>{title}</i>
					</p>
				</ReviewerInfo>
			</ReviewerSection>
		</Container>
	);
};

const today = {
	blurb: {
		business: testimonialBusinesses.loremsIpsum,
	},
	testimonial: {
		reviewer: {
			name: 'Lucy "Lunchy" McGee',
			title: "Snacks Addict",
			avatar: lucy,
		},
		review: {
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime molestiae labore laborum non, eos quam facere, similique hic ad accusamus impedit ratione, consectetur repellendus dolor! Accusantium ex assumenda voluptatibus distinctio, cupiditate in, numquam maiores velit eius libero corporis porro vitae! Vero omnis at eius doloribus quo dignissimos quis labore.",
			starRating: 5,
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
