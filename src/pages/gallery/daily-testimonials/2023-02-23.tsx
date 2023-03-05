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

const Card = styled.article`
	position: relative;
	/* isolation: isolate; */

	max-width: 35em;
	padding: 2.5em;

	background-color: white;
	box-shadow: 0 1em 2em hsl(0 0% 0% / 30%);

	&::before,
	&::after {
		content: "";
		position: absolute;
		z-index: -1;

		height: 50%;
		aspect-ratio: 1;

		background-color: teal;
	}

	&::before {
		top: -2em;
		left: -2em;

		clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
	}

	&::after {
		bottom: -2em;
		right: -2em;

		clip-path: polygon(100% 0%, 100% 1000%, 0% 100%);
	}
`;

const ReviewBody = styled.p`
	margin-block-end: 2em;
	line-height: 2;
`;

const Reviewer = styled.div`
	display: flex;
	gap: 2em;
`;

const Avatar = styled.img`
	width: 4em;
	aspect-ratio: 1;
	border-radius: 9999px;
`;

const ReviewerInfo = styled.div`
	display: grid;
	gap: 0;
	align-items: center;
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({ ...props }) => {
	return (
		<Card className={props.className}>
			<ReviewBody>{props.review.body}</ReviewBody>

			<Reviewer>
				<Avatar src={props.reviewer.avatar} />
				<ReviewerInfo>
					<b>{props.reviewer.name}</b>
					<i>{props.reviewer.title}</i>
				</ReviewerInfo>
			</Reviewer>
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
			date: "2023-02-23",
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
