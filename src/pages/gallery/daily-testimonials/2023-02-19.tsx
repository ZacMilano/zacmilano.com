import React from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
} from "../../../components";
import allie from "../../../images/allie-sniffing.jpeg";

interface Reviewer {
	name: string;
	title: string;
	avatar: string;
}

interface Review {
	body: string;
	date: string;
	starRating?: 1 | 2 | 3 | 4 | 5;
}

interface TestimonialProps {
	reviewer: Reviewer;
	review: Review;
	className?: string;
}

interface Business {
	name: string;
	specialty: string;
}

interface BlurbColumnProps {
	business: Business;
}

const Card = styled.article`
	display: grid;
	gap: 2em;

	width: 35em;
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

const Testimonial: React.FC<TestimonialProps> = ({ ...props }) => {
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

const BlurbColumn: React.FC<BlurbColumnProps> = ({ ...props }) => {
	return (
		<div>
			<p>
				Today's business is {props.business.name}, specializing in{" "}
				{props.business.specialty}.
			</p>
		</div>
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

// TODO: Define consistent structure to automatically include each day in the
// index page for this meta-project, and to not repeat myself
const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate
			date={today.testimonial.review.date}
			businessName={today.blurb.business.name}
		>
			<TwoColumnTestimonial>
				<Testimonial {...today.testimonial} />
				<BlurbColumn {...today.blurb} />
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
