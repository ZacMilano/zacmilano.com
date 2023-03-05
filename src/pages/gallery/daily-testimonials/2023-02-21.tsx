import React from "react";
import styled from "styled-components";

import {
	CommonBlurbColumn,
	TwoColumnTestimonial,
	TestimonialPageTemplate,
	TestimonialHead,
} from "$components";
import { allie } from "$images";
import { CommonTestimonialProps } from "$types/testimonials";
import { blackRockBlue } from "$styles";

const Card = styled.article`
	--padding: 3em;
	--color-accent: ${blackRockBlue};
	--transition-duration: 500ms;
	--transition-timing: ease-out;

	position: relative;
	isolation: isolate;

	display: grid;
	gap: 1em;

	max-width: 30em;
	padding: calc(2 * var(--padding)) var(--padding);

	transition: transform var(--transition-duration) var(--transition-timing);

	&::before,
	&::after {
		content: "";
		position: absolute;

		inset: 0;

		transition: opacity var(--transition-duration) var(--transition-timing);
	}

	&::before {
		border: 2px solid var(--color-accent);
	}

	&:hover {
		&::before {
			opacity: 0;
		}

		&::after {
			opacity: 1;
		}

		transform: translateY(-1em);
	}

	&::after {
		opacity: 0;
		box-shadow: 0 1em 5em var(--color-accent);
	}
`;

const ReviewerSection = styled.div`
	display: grid;
	justify-content: center;

	text-align: center;
`;

const Avatar = styled.img`
	width: 5em;
	aspect-ratio: 1;

	margin-inline: auto;
	margin-block-end: 1em;

	border-radius: 9999px;
`;

const ReviewerName = styled.b`
	font-size: 1.25rem;
`;

const Divider = styled.hr`
	margin-block: 1em;
	width: 100%;

	border-color: var(--color-accent);
	opacity: 70%;
`;

const ReviewBody = styled.p`
	padding-inline: var(--padding);
	line-height: 2;
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({ ...props }) => {
	return (
		<Card className={props.className}>
			<ReviewerSection>
				<Avatar
					src={props.reviewer.avatar}
					alt={`${props.reviewer.name}, ${props.reviewer.title}`}
				/>
				<ReviewerName>{props.reviewer.name}</ReviewerName>
				<i>{props.reviewer.title}</i>
			</ReviewerSection>

			<Divider />

			<ReviewBody>{props.review.body}</ReviewBody>
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
			name: "Allison Wonderland",
			title: "Misleader of Cats",
			avatar: allie,
		},
		review: {
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore id vitae non. Recusandae laboriosam quibusdam dolor dicta magni itaque! Omnis, porro fuga minus harum aliquam sed, dolorum ducimus ad quae obcaecati praesentium est debitis. Atque consequuntur, laudantium tempore molestias ut animi vero explicabo dolores hic modi ipsa optio in libero.",
			date: "2023-02-21",
		},
	},
};

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate businessName={today.blurb.business.name}>
			<TwoColumnTestimonial>
				<Testimonial {...today.testimonial} />
				<CommonBlurbColumn {...today.blurb} />
			</TwoColumnTestimonial>
		</TestimonialPageTemplate>
	);
};

export default TodaysTestimonialPage;

export const Head: React.FC = () => {
	return <TestimonialHead businessName={today.blurb.business.name} />;
};
