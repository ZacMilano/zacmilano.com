import React from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
} from "../../../components";
import allie from "../../../images/allie-sniffing.jpeg";

const BlurbColumn = styled.div``;

const Card = styled.article`
	--gap: 2em;

	display: grid;
	gap: var(--gap);

	max-width: 35em;
	padding: 3em;

	border-radius: 2em;
	box-shadow: 0 0 2em 0.5em hsl(0 0% 0% / 20%);
`;

const QuotedPerson = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: var(--gap);
`;

const QuotedPersonAvatar = styled.img`
	width: 5em;
	aspect-ratio: 1;

	border-radius: 100%;
	box-shadow: 0 1em 2em hsl(0 0% 0% / 20%);
`;

const QuotedPersonInfo = styled.div`
	display: grid;
`;

const Rating = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5em;
`;

const Testimonial: React.FC = () => {
	const reviewerName = "Allison Lloyd";

	return (
		<Card>
			<QuotedPerson>
				<QuotedPersonAvatar src={allie} alt={reviewerName} />

				<QuotedPersonInfo>
					<b>{reviewerName}</b>
					<i>Local Fool</i>
				</QuotedPersonInfo>
			</QuotedPerson>

			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
				praesentium numquam, amet maiores fugit dolorum, minima exercitationem
				aliquid quae veritatis facere placeat magnam voluptatum. Eligendi cum
				obcaecati excepturi aperiam dolor.
			</p>

			<Rating>
				<i className="fa-solid fa-star" />
				<i className="fa-solid fa-star" />
				<i className="fa-solid fa-star" />
				<i className="fa-regular fa-star" />
				<i className="fa-regular fa-star" />
			</Rating>
		</Card>
	);
};

const businessName = "Lorem's Ipsum";

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate businessName={businessName}>
			<TwoColumnTestimonial>
				<Testimonial />

				<BlurbColumn>
					<p>
						Today's business is Lorem's Ipsum again, specializing in non-english
						copy text.
					</p>
				</BlurbColumn>
			</TwoColumnTestimonial>
		</TestimonialPageTemplate>
	);
};

export default TodaysTestimonialPage;

export const Head: React.FC = () => {
	return (
		<>
			<title>{businessName} | Testimonials</title>
			<script
				src="https://kit.fontawesome.com/6ab573e32e.js"
				crossOrigin="anonymous"
			/>
		</>
	);
};
