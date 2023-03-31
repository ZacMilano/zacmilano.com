import React, { useMemo, useState } from "react";
import styled from "styled-components";

import { FanOfCards, FanOfCardsProps } from "$components/component-practice";
import { blackRockBlue } from "$styles/colors";
import { allie, lucy } from "$images/index";
import { UiIterationPage } from "$components/page-templates/ui-iteration-template";

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
	const [nChildren, setNChildren] = useState(3);

	const fanProps: FanOfCardsProps = useMemo(
		() => ({
			cardImages: [
				{ src: allie, alt: "Amogus Allie" },
				{ src: lucy, alt: "Lucy Deucy" },
				{ src: allie, alt: "Amogus Allie" },
				{ src: lucy, alt: "Lucy Deucy" },
				{ src: allie, alt: "Amogus Allie" },
				{ src: lucy, alt: "Lucy Deucy" },
				{ src: allie, alt: "Amogus Allie" },
				{ src: lucy, alt: "Lucy Deucy" },
				{ src: allie, alt: "Amogus Allie" },
				{ src: lucy, alt: "Lucy Deucy" },
				{ src: allie, alt: "Amogus Allie" },
				{ src: lucy, alt: "Lucy Deucy" },
			].slice(0, nChildren),
		}),
		[nChildren]
	);

	const childCountChanger = (
		<ChildrenChanger action="void(0);">
			<header>
				<h2>Number of cards</h2>
			</header>

			<div className="buttons">
				<button
					onClick={(event) => {
						event.preventDefault();
						setNChildren((n) => n - 1);
					}}
				>
					-
				</button>
				<p>{nChildren}</p>
				<button
					onClick={(event) => {
						event.preventDefault();
						setNChildren((n) => n + 1);
					}}
				>
					+
				</button>
			</div>
		</ChildrenChanger>
	);

	return (
		<UiIterationPage<FanOfCardsProps>
			date={"2023-03-14, last updated 2023-03-31"}
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
