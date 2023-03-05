import React from "react";
import styled from "styled-components";

import {
	CommonBlurbColumn,
	TwoColumnTestimonial,
	TestimonialPageTemplate,
	TestimonialHead,
} from "$components";
import allie from "$images/allie-sniffing.jpeg";
import { CommonTestimonialProps } from "$types/testimonials";
import { blackRockBlue } from "$styles";

const Card = styled.article`
	--padding: 3em;
	--color-accent: ${blackRockBlue};
	display: grid;

	max-width: 35em;

	border: 2px solid var(--color-accent);
	/* box-shadow: 0 -1em 5em var(--color-accent); */
`;

const ReviewBody = styled.p`
	--color-background: white;

	position: relative;

	padding: var(--padding);

	background-color: var(--color-background);
	line-height: 2;

	&::after {
		--height: 1em;
		z-index: 100;
		content: "";
		position: absolute;
		width: 0;
		height: 0;

		bottom: calc(-1 * var(--height));
		left: var(--padding);

		border-left: var(--height) solid transparent;
		border-right: var(--height) solid transparent;
		border-top: var(--height) solid var(--color-background);
	}
`;

const ReviewerSection = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1ch;

	padding: calc(0.75 * var(--padding)) var(--padding);

	background-color: var(--color-accent);
	color: white;

	box-shadow: 0 1em 5em var(--color-accent);
`;

const Avatar = styled.img`
	width: 3em;
	aspect-ratio: 1;

	border-radius: 9999px;
	margin-inline-start: auto;

	box-shadow: 0 0 1em hsl(0 0% 100% / 30%);
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({ ...props }) => {
	return (
		<Card className={props.className}>
			<ReviewBody>{props.review.body}</ReviewBody>

			<ReviewerSection>
				<b>{props.reviewer.name},</b> <i>{props.reviewer.title}</i>
				<Avatar
					src={props.reviewer.avatar}
					alt={`${props.reviewer.name}, ${props.reviewer.title}`}
				/>
			</ReviewerSection>
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
			date: "2023-02-24",
		},
	},
} as const;

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
