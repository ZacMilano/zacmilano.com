import React from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
	TestimonialHead,
} from "../../../components";
import allie from "../../../images/allie-sniffing.jpeg";

const BlurbColumn = styled.div``;

const Avatar = styled.img`
	--vertical-displacement: calc(
		-1 * (var(--padding) + var(--avatar-height) / 2)
	);

	position: relative;

	/* Center horizontally */
	left: 50%;
	transform: translateX(-50%);

	/* Half of the image is sticking out */
	top: var(--vertical-displacement);

	height: var(--avatar-height);
	aspect-ratio: 1;
	margin-bottom: var(--vertical-displacement);

	border-radius: 9999px;
	outline: 0.5em solid var(--background-color);
`;

const Card = styled.article`
	--padding: 2em;
	--avatar-height: 8em;
	--background-color: lightblue;
	--accent-color: indigo;

	position: relative;

	display: grid;
	gap: var(--padding);

	max-width: 30em;
	padding: var(--padding);
	margin-top: calc(var(--avatar-height) / 2);

	background-color: var(--background-color);
	box-shadow: 0 2em 2em hsl(0 0% 0% / 20%);
`;

const Quote = styled.p`
	position: relative;

	padding-left: var(--padding);

	&::before {
		content: open-quote;
		position: absolute;

		left: 0;
		top: -0.25em;

		font-size: 3em;
		color: var(--accent-color);
	}
`;

const QuotedPerson = styled.div`
	display: grid;
`;

const Name = styled.b`
	color: var(--accent-color);
`;

const Testimonial: React.FC = () => {
	const reviewerName = "Allie";

	return (
		<Card>
			<Avatar src={allie} alt={reviewerName} />

			<Quote>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
				veritatis aut eum dignissimos cumque eos recusandae quibusdam voluptatum
				architecto consectetur aliquam, dolor maiores expedita officiis, culpa
				suscipit doloribus quaerat accusamus natus error? Reprehenderit deleniti
				sequi quaerat doloremque iusto amet nulla nobis asperiores nam illo?
				Impedit numquam aliquam ad maxime accusantium in iure quisquam doloribus
				nesciunt, rerum et. Aut, consequatur explicabo!
			</Quote>

			<QuotedPerson>
				<Name>{reviewerName}</Name>
				<i>Local Rat Hunter</i>
			</QuotedPerson>
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
	return <TestimonialHead businessName={businessName} />;
};
