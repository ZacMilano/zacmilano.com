import React, { useMemo } from "react";
import styled from "styled-components";

import { FanOfCards, FanOfCardsProps } from "$components/component-practice";
import { UiIterationPage } from "$components/page-templates";
import { useCounter } from "$hooks";
import { allie, lucy } from "$images/index";
import { blackRockBlue } from "$styles/colors";
import { buildArray } from "$utils";

const ChildrenChanger = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1em;

	& > .buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2em;

		& > button {
			aspect-ratio: 1 / 1;
			padding: 0.5em;
			height: 100%;

			border: none;
			border-radius: 9999px;

			background-color: ${blackRockBlue};
			color: white;
			font-weight: bold;
		}
	}
`;

function FanOfCardsPage(): React.ReactElement {
	const {
		count: childCount,
		increment: addChild,
		decrement: removeChild,
	} = useCounter(3);

	const CARD_IMAGES = useMemo(
		() => [
			{ src: allie, alt: "Amogus Allie" },
			{ src: lucy, alt: "Lucy Deucy" },
		],
		[]
	);

	const fanProps: FanOfCardsProps = useMemo(
		() => ({
			cardImages: buildArray(childCount, (index) => CARD_IMAGES[index % 2]),
		}),
		[CARD_IMAGES, childCount]
	);

	const childCountChanger = (
		<ChildrenChanger>
			<header>
				<h2>Number of cards</h2>
			</header>

			<div className="buttons">
				<button type="button" onClick={removeChild}>
					-
				</button>
				<p>{childCount}</p>
				<button type="button" onClick={addChild}>
					+
				</button>
			</div>
		</ChildrenChanger>
	);

	return (
		<UiIterationPage<FanOfCardsProps>
			date={"2023-03-14, last updated 2023-04-03"}
			title="Fan of Cards"
			iteratedComponent={FanOfCards}
			iteratedComponentProps={fanProps}
			funStuff={childCountChanger}
		>
			<p>
				On 3/14/2023, I made the first fan of cards component. I learned from my
				employer that my work will be 100% contained within an environment that
				is inaccessible via the methods I use to work on this project, so I'm
				good to go with continuing work here!
			</p>

			<p>
				Day one, just added the cards in the right shape and a fine arrangement.
			</p>

			<p>Day two, added a hover effect: expand the stack!</p>

			<p>
				Day three, improved the hover effect. It now has something to see on a
				per-card basis. Also, the images are no longer stretched.
			</p>

			<p>
				Day four, the fan can take a variable number of card children. Current
				maximum is 12.
			</p>

			<p>
				Day five, much later, has been spent working on more broad-strokes
				structure for this UI iteration stuff. Making the templates simpler to
				use, more extensible, stuff like that.
			</p>

			<p>
				Day six, more refactoring &amp; polish. Added a custom hook and a util
				function to build a list of an arbitrary length with a mapping callback.
			</p>
		</UiIterationPage>
	);
}

export default FanOfCardsPage;

export const Head: React.FC = () => {
	return (
		<>
			<title>Fan of Cards | Zac Milano</title>
		</>
	);
};
