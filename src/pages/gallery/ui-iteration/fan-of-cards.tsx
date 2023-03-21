import React, { useMemo, useState } from "react";
import styled from "styled-components";

import { FanOfCards, GalleryPageTemplate } from "$components";
import { blackRockBlue, blackRockBlueWithLightness } from "$styles/colors";
import { FanOfCardsProps } from "$components/component-practice/fan-of-cards/fan-of-cards-props";
import { allie, lucy } from "$images/index";

const CenteredContent = styled.section`
	display: grid;
	justify-content: center;
	align-content: center;
`;

const SectionWithGaps = styled.section`
	& > * + * {
		margin-block-start: 1em;
	}
	margin-block: 4em;
`;

const VersionPicker = styled.form`
	--gap: 2em;

	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	gap: var(--gap);

	padding: var(--gap);

	background-color: ${blackRockBlueWithLightness(80)};
`;

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

const VersionOptionWrapper = styled.label`
	--color-background: white;
	--color-stroke: ${blackRockBlue};

	&.selected-version {
		--color-background: ${blackRockBlue};
		--color-stroke: white;

		font-weight: bold;
	}

	padding: 1em 2em;

	background-color: var(--color-background);
	color: var(--color-stroke);
	box-shadow: 0 0 1em ${blackRockBlueWithLightness(70)};

	transition: background-color 300ms ease-out, color 300ms ease-out;
`;

const VersionOption = styled.input`
	display: none;
`;

// TODO: Abstract out similarities between this and the ConcentricButton
const ConcentricButtonPage: React.FC = () => {
	const versions = Object.keys(FanOfCards).sort();

	const [selectedVersion, setSelectedVersion] = useState(
		versions[versions.length - 1]
	);
	const [nChildren, setNChildren] = useState(3);

	const VersionedFanOfCards =
		FanOfCards[selectedVersion as keyof typeof FanOfCards];

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

	return (
		<GalleryPageTemplate
			date="2023-03-14, last updated 2023-03-14"
			title="Fan of Cards"
		>
			<CenteredContent>
				<VersionedFanOfCards {...fanProps} />
			</CenteredContent>

			<CenteredContent>
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
			</CenteredContent>

			<SectionWithGaps>
				<VersionPicker action="void(0);">
					{versions.map((version, index) => (
						<VersionOptionWrapper
							key={index}
							className={version === selectedVersion ? "selected-version" : ""}
						>
							<VersionOption
								key={version}
								type="radio"
								name="concentric-button-version"
								value={version}
								checked={version === selectedVersion}
								onChange={() =>
									setSelectedVersion(version as keyof typeof FanOfCards)
								}
							/>
							{version}
						</VersionOptionWrapper>
					))}
				</VersionPicker>
			</SectionWithGaps>

			<SectionWithGaps>
				<p>
					On 3/14/2023, I made the first fan of cards component. I learned from
					my employer that my work will be 100% contained within an environment
					that is inaccessible via the methods I use to work on this project, so
					I'm good to go with continuing work here!
				</p>

				<p>
					Day one, just added the cards in the right shape and a fine
					arrangement.
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

				<p>The plan for day five is to do some cleanup.</p>
			</SectionWithGaps>
		</GalleryPageTemplate>
	);
};

export default ConcentricButtonPage;

export const Head: React.FC = () => {
	return (
		<>
			<title>Fan of Cards | Zac Milano</title>
		</>
	);
};
