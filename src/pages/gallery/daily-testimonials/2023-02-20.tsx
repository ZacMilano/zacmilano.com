import React from "react";
import styled from "styled-components";

import {
	CommonBlurbColumn,
	TwoColumnTestimonial,
	TestimonialPageTemplate,
} from "../../../components";
import allie from "../../../images/allie-sniffing.jpeg";
import { CommonTestimonialProps } from "../../../types/testimonials";

const Card = styled.article`
	--padding: 5em;
	position: relative;

	max-width: 35em;
	padding: var(--padding);

	box-shadow: 0 1em 2em hsl(0 0% 0% / 30%);

	& > .banner {
		--sqrt-2: 1.4142;
		--banner-height: calc(var(--padding) / 2);
		position: absolute;

		display: flex;
		justify-content: center;
		align-items: center;

		height: var(--banner-height);
		aspect-ratio: 4;

		color: white;
		background-color: teal;

		transform: scale(1) rotate(-45deg);

		&.top-left {
			top: 1.25em;
			left: -2.5em;

			clip-path: polygon(0% 100%, 100% 100%, 75% 0%, 25% 0%);
		}

		&.bottom-right {
			bottom: 1.25em;
			right: -2.5em;

			clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%);
		}
	}
`;

const ReviewerAvatar = styled.img`
	height: var(--banner-height);
	aspect-ratio: 1;

	outline: 0.5em solid white;
	border-radius: 9999px;
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({ ...props }) => {
	return (
		<Card className={props.className}>
			<div className="banner top-left">
				<ReviewerAvatar
					src={props.reviewer.avatar}
					alt={`${props.reviewer.name}, ${props.reviewer.title}`}
				/>
			</div>

			<div className="banner bottom-right">
				<i className="fa-star fa-solid"></i>
				<i className="fa-star fa-solid"></i>
				<i className="fa-star fa-solid"></i>
				<i className="fa-star fa-solid"></i>
				<i className="fa-star fa-regular"></i>
			</div>

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
			date: "2023-02-20",
		},
	},
};

// TODO: Define consistent structure to automatically include each day in the
// index page for this meta-project, and to not repeat myself
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
