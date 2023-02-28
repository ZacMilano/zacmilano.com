import React from "react";
import styled from "styled-components";

import { TestimonialHead, TestimonialPageTemplate } from "../../../components";

const PageLayoutWithGaps = styled.div`
	display: grid;
	gap: 2em;
	place-items: center;
`;

// BEGIN Testimonial Banner
const Banner = styled.section`
	--color-primary-800: hsl(146, 57%, 24%);
	--color-neutral-600: hsla(0, 0%, 100%, 40%);
	--color-neutral-400: hsl(0, 0%, 90%);

	width: 150%;

	display: grid;
	align-items: center;
	gap: 2em;

	margin-block: 10em;
	/* padding-inline: 25%; */
	padding-block: 3em;

	color: var(--color-neutral-400);
	background-color: var(--color-primary-800);

	text-align: center;

	// Magic numbers to place a shadow (inset) only on top & bottom
	box-shadow: 0 10em 1em -9.5em rgba(0, 0, 0, 20%) inset,
		0 -10em 1em -9.5em rgba(0, 0, 0, 20%) inset;

	& > * {
		padding-inline: 25%;
	}
`;

const TestimonialHeader = styled.h2`
	font-size: 1em;
	font-weight: inherit;
	color: var(--color-neutral-600);
`;

const TestimonialRatingSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;

	width: max-content;

	margin-inline: auto;
`;

const QuotedPerson = styled.p`
	grid-column: 1 / -1;
`;

const QuotedPersonDetails = styled.i`
	color: var(--color-neutral-600);
`;

const TestimonialRating = styled.div`
	display: flex;
	gap: 1em;
`;

const RatingStar = styled.i`
	width: 1em;
	aspect-ratio: 1 / 1;
`;

const TestimonialQuote = styled.p`
	color: var(--color-neutral-400);
`;
// END Testimonial Banner

const BlurbSection = styled.section`
	display: grid;
	gap: 2em;
`;

const Testimonial: React.FC = () => {
	return (
		<Banner>
			<TestimonialHeader>
				<i>See what our clients think...</i>
			</TestimonialHeader>

			<TestimonialQuote>
				Froggy and his 98 other friends are the best. They read us stories and
				take us out for recess, so we get two recesses, since it's after school.
				Even though it kind of is school, since I'm there with a bunch of other
				fishes. That part is pretty confusing.
			</TestimonialQuote>

			<TestimonialRatingSection>
				<TestimonialRating>
					<RatingStar className="fa-solid fa-star" />
					<RatingStar className="fa-solid fa-star" />
					<RatingStar className="fa-solid fa-star" />
					<RatingStar className="fa-solid fa-star" />
					<RatingStar className="fa-regular fa-star" />
				</TestimonialRating>

				<QuotedPerson>
					Sally Salmon
					<QuotedPersonDetails>, local egg</QuotedPersonDetails>
				</QuotedPerson>
			</TestimonialRatingSection>
		</Banner>
	);
};

const businessName = "Froggy's Daycare";

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate
			businessName={businessName}
			style={{ overflowX: "hidden" }}
		>
			<PageLayoutWithGaps>
				<BlurbSection>
					<p>
						Today, I'm trying out a block-level testimonial, that spans the
						whole width of the page.
					</p>

					<p>
						Froggy's Daycare is a childcare facility for aquatic creatures, by
						aquatic creatures. Including Froggy, 99 caretakers run the facility.
						Caretakers come from a diverse range of backgrounds encompassing
						everything from ship-devouring in the Mediterranean to frolicking on
						the beaches of Kauai &mdash; with each one having passed a strict
						background check, of course.
					</p>
				</BlurbSection>

				<Testimonial />

				<BlurbSection>
					<p>
						The facility is open for most of every day, generously providing
						plenty of time for pick-up and drop-off.
					</p>

					<p>
						Froggy is known for accommodating to parents whose schedules don't
						align with their normal hours:
					</p>

					<ul>
						<li>Sun: 6:00 a.m. &mdash; 7:00 p.m.</li>
						<li>Mon: 6:00 a.m. &mdash; 7:00 p.m.</li>
						<li>Tue: 6:00 a.m. &mdash; 7:00 p.m.</li>
						<li>Wed: 6:00 a.m. &mdash; 7:00 p.m.</li>
						<li>Thu: 6:00 a.m. &mdash; 7:00 p.m.</li>
						<li>Fri: 6:00 a.m. &mdash; 7:00 p.m.</li>
						<li>Sat: 6:00 a.m. &mdash; 7:00 p.m.</li>
					</ul>
				</BlurbSection>
			</PageLayoutWithGaps>
		</TestimonialPageTemplate>
	);
};

export default TodaysTestimonialPage;

export const Head: React.FC = () => {
	return (
		<TestimonialHead businessName={businessName} includeFontAwesomeScript />
	);
};
