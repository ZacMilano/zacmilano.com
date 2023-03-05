import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { TestimonialHead, TestimonialPageTemplate } from "$components";
import allie from "$images/allie-sniffing.jpeg";

const BlurbColumn = styled.div`
	display: grid;
	gap: 1em;
	margin-bottom: 3em;
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

	max-width: 35em;
	padding: 2.5em;

	/* Toggle between backdrop-filter and background-color to see mechanics */
	/* backdrop-filter: blur(1em); */
	background-color: white;
	box-shadow: 0 1em 2em hsl(0 0% 0% / 20%);
`;

interface TestimonialProps {
	reviewerName: string;
	reviewerTitle: string;
	className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ ...props }) => {
	return (
		<Card className={props.className}>
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

const CardStack = styled.div`
	position: relative;
	isolation: isolate;

	& > * {
		--scaling-factor: 0.93;
		--vertical-offset: 2em;
		--animation-duration: 200ms;
		--animation-timing: ease-out;

		position: absolute;

		transform: scale(var(--scale)) translateY(var(--translation));

		/* Delay transformations until the opacity transitions have finished */
		transition: transform var(--animation-duration) var(--animation-timing)
				var(--animation-duration),
			opacity var(--animation-duration) var(--animation-timing);

		&.first-card {
			--scale: 1;
			--translation: 0em;
			z-index: 5;
		}

		&.second-card {
			--scale: var(--scaling-factor);
			--translation: var(--vertical-offset);
			z-index: 4;
		}

		&.third-card {
			--scale: calc(var(--scaling-factor) * var(--scaling-factor));
			z-index: 3;
		}

		&.third-card,
		&.hidden-card {
			--translation: calc(var(--vertical-offset) * 2);
		}

		&.hidden-card {
			/* Hide card so that the text/image are unselectable, but stay in the DOM
			for later animations. */
			--scale: 0;
			opacity: 0;
			user-select: none;

			/* Stay above everything else to prevent a jumpy animation. 0 opacity
			guarantees that it's not visibly on top. */
			z-index: 100;
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
	place-self: center;
`;

const TestimonialStack: React.FC = () => {
	// Static data
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
	}, [reviewCount]);

	return (
		<ReviewSwitcher>
			<RotateReviewsButton
				onClick={() => {
					// TODO: Limit effect to only occur after animations finish
					showNextReview();
				}}
			>
				Read next review
			</RotateReviewsButton>

			<CardStack>
				{reviewers.map((props, index) => {
					const orderInStack = (index - frontIndex + reviewCount) % reviewCount;
					const shownCards = ["first-card", "second-card", "third-card"];

					let className = "hidden-card";
					if (orderInStack < shownCards.length) {
						className = shownCards[orderInStack];
					}
					return <Testimonial {...props} key={index} className={className} />;
				})}
			</CardStack>
		</ReviewSwitcher>
	);
};

const businessName = "Lorem's Ipsum";
const date = "2023-02-18";

const TodaysTestimonialPage: React.FC = () => {
	return (
		<TestimonialPageTemplate businessName={businessName}>
			<BlurbColumn>
				<p>
					Today's business is Lorem's Ipsum again, specializing in non-english
					copy text.
				</p>

				<p>I made a review switcher today! </p>
			</BlurbColumn>

			<TestimonialStack />
		</TestimonialPageTemplate>
	);
};

export default TodaysTestimonialPage;

export const Head: React.FC = () => {
	return <TestimonialHead businessName={businessName} />;
};
