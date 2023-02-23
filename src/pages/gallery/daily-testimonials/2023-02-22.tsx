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
	display: grid;
	gap: 2em;

	max-width: 35em;
	padding: 3em;

	box-shadow: 0 1em 2em hsl(0 0% 0% / 30%);
`;

const ReviewBody = styled.p`
	line-height: 2;
`;

const ReviewerSection = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 2em;
`;

const Rating = styled.div`
	display: flex;
	justify-self: center;
	gap: 0.5em;
`;

const ReviewerInfo = styled.div`
	display: grid;

	& > * {
		justify-self: end;
	}
`;

const Avatar = styled.img`
	width: 4em;
	aspect-ratio: 1;
	border-radius: 9999px;
`;

const Testimonial: React.FC<CommonTestimonialProps> = ({ ...props }) => {
	const {
		review: { starRating },
	} = props;

	return (
		<Card className={props.className}>
			<ReviewBody>{props.review.body}</ReviewBody>

			{starRating && (
				<Rating>
					{Array.from(Array(5)).map((value, index) => {
						const isSolid = index + 1 <= starRating;
						return (
							<i
								className={`fa-star ${isSolid ? "fa-solid" : "fa-regular"}`}
							></i>
						);
					})}
				</Rating>
			)}

			<ReviewerSection>
				<ReviewerInfo>
					<b>{props.reviewer.name}</b>
					<i>{props.reviewer.title}</i>
				</ReviewerInfo>

				<Avatar
					src={allie}
					alt={`${props.reviewer.name}, ${props.reviewer.title}`}
				/>
			</ReviewerSection>
		</Card>
	);
};

const today = {
	blurb: {
		business: {
			name: "EagleEye, LLC",
			specialty: "private investigation services",
		},
	},
	testimonial: {
		reviewer: {
			name: "Allison Wonderland",
			title: "Amateur PI",
			avatar: allie,
		},
		review: {
			body: "I've been a PI for all 3 of my 9 lives so far, and I have never worked with more frightening professionals. I hired the Eagles to watch my cousin Lucy (making sure she's not stealing my treats) (I know it was you, Lucy), and they brought me back ample evidence of her wrongdoing. I got caught though. Whoops.",
			date: "2023-02-22",
			starRating: 4,
		},
	},
} as const;

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
