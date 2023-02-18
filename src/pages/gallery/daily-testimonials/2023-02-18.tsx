import React, { useCallback, useState } from "react";
import styled from "styled-components";

import {
	TwoColumnTestimonial,
	TestimonialPageTemplate,
} from "../../../components";
import allie from "../../../images/allie-sniffing.jpeg";

const BlurbColumn = styled.div`
	display: grid;
	gap: 1em;
`;

const Reviewer = styled.div`
	display: flex;
	justify-content; flex-start;
	align-items: center;
	gap: 1em;
`;

const Avatar = styled.img`
	width: 4em;
	aspect-ratio: 1;
`;

const ReviewerInfo = styled.div`
	display: grid;
`;

const Card = styled.article`
	position: relative;

	display: grid;
	gap: 2em;

	width: 35em;
	padding: 2.5em;

	background-color: white;
	/* backdrop-filter: blur(1em); */
	box-shadow: 0 1em 2em hsl(0 0% 0% / 20%);
`;

interface TestimonialProps {
	reviewerName: string;
	reviewerTitle: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ ...props }) => {
	return (
		<Card>
			<Reviewer>
				<Avatar src={allie} alt={props.reviewerName} />

				<ReviewerInfo>
					<b>{props.reviewerName}</b>
					<i>{props.reviewerTitle}</i>
				</ReviewerInfo>
			</Reviewer>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
				reiciendis totam quisquam obcaecati eligendi nesciunt expedita
				repudiandae cumque fugit, magni, voluptatem esse similique qui quae
				minus? Ex nam dolor id quo! Non, sit veritatis atque impedit omnis quis,
				nam placeat minus dicta voluptatem provident quia neque dignissimos
				tempore alias sed?
			</p>
		</Card>
	);
};

const CardStack = styled.article`
	position: relative;
	isolation: isolate;

	& > * {
		--scaling-factor: 0.93;
		--vertical-offset: 2em;
		--animation-duration: 250ms;
		--animation-timing: ease-out;

		position: absolute;
		transform: scale(var(--scale)) translateY(var(--translation));

		transition: transform var(--animation-duration) var(--animation-timing);

		&:nth-child(1) {
			--scale: 1;
			--translation: 0em;
			z-index: 5;
		}

		&:nth-child(2) {
			--scale: var(--scaling-factor);
			--translation: var(--vertical-offset);
			z-index: 4;
		}

		&:nth-child(n + 3) {
			--scale: calc(var(--scaling-factor) * var(--scaling-factor));
			--translation: calc(var(--vertical-offset) * 2);
			z-index: 3;
		}

		&:nth-child(n + 4) {
			opacity: 0;
		}
	}
`;

const ReviewSwitcher = styled.div`
	display: grid;
	gap: 1em;
`;

const RotateReviewsButton = styled.button`
	width: max-content;
	height: min-content;
	padding: 1em;
`;

const TestimonialStack: React.FC = () => {
	function nthElementAfterRotation<T>(
		arr: T[],
		nth: number,
		rotationAmount: number
	) {
		const adjustedIndex = (nth + rotationAmount) % arr.length;
		return arr[adjustedIndex];
	}

	function nElements(n: number) {
		return Array.from(Array(n));
	}

	const reviewers: TestimonialProps[] = [
		{ reviewerName: "Allie", reviewerTitle: "A threat to mice" },
		{ reviewerName: "Allie Cat", reviewerTitle: "Local rat chaser" },
		{ reviewerName: "Allison Wonderland", reviewerTitle: "Local cat" },
		{ reviewerName: "Allie Jandro", reviewerTitle: "Imposter" },
		{ reviewerName: "Little A", reviewerTitle: "Chaser of spring toys" },
	];
	const reviewCount = reviewers.length;

	const [frontIndex, _setFrontIndex] = useState(0);
	const showNextReview = useCallback(() => {
		_setFrontIndex(
			(previousFrontIndex) => (previousFrontIndex + 1) % reviewCount
		);
	}, []);

	return (
		<ReviewSwitcher>
			<RotateReviewsButton
				onClick={() => {
					showNextReview();
				}}
			>
				Read next review
			</RotateReviewsButton>

			<CardStack>
				{nElements(reviewCount).map((value, index) => (
					<Testimonial
						{...nthElementAfterRotation(reviewers, index, frontIndex)}
					/>
				))}
			</CardStack>
		</ReviewSwitcher>
	);
};

// TODO: Define consistent structure to automatically include each day in the
// index page for this meta-project, and to not repeat myself
const businessName = "Lorem's Ipsum";
const date = "2023-02-18";

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate date={date} businessName={businessName}>
			<TwoColumnTestimonial>
				<TestimonialStack />

				<BlurbColumn>
					<p>
						Today's business is Lorem's Ipsum again, specializing in non-english
						copy text.
					</p>

					<p>
						I made a review switcher today. It's not 100% what I want; I
						realized too late that normal CSS animations may not be feasible to
						occur due to changing the DOM (changing the nth-child order of each
						element). I'll try to do something similar another day, or revisit
						today. I want animations!
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
