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
	display: grid;
	gap: 2em;

	max-width: 35em;
	padding: 3em;

	box-shadow: 0 1em 2em hsl(0 0% 0% / 20%);
`;

const ReviewerSection = styled.div`
	display: flex;
	align-items: center;
	gap: 1em;
	transition: transform 250ms ease-out;

	&:hover {
		transform: translateX(25%) scale(1.5);
	}
`;

const ReviewerAvatar = styled.img`
	width: 4em;

	aspect-ratio: 1;
	border-radius: 9999px;
`;

const ReviewerInfo = styled.div`
	display: grid;
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({ ...props }) => {
	return (
		<Card className={props.className}>
			<ReviewerSection>
				<ReviewerAvatar
					src={props.reviewer.avatar}
					alt={`${props.reviewer.name}, ${props.reviewer.title}`}
				/>

				<ReviewerInfo>
					<b>{props.reviewer.name}</b>
					<i>{props.reviewer.title}</i>
				</ReviewerInfo>
			</ReviewerSection>

			<p>{props.review.body}</p>
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
			name: "Allie Jandro",
			title: "Monster",
			avatar: allie,
		},
		review: {
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore id vitae non. Recusandae laboriosam quibusdam dolor dicta magni itaque! Omnis, porro fuga minus harum aliquam sed, dolorum ducimus ad quae obcaecati praesentium est debitis. Atque consequuntur, laudantium tempore molestias ut animi vero explicabo dolores hic modi ipsa optio in libero.",
			date: "2023-02-19",
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
