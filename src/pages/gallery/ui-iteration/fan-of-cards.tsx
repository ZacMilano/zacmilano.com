import React, { useState } from "react";
import styled from "styled-components";

import { FanOfCards, GalleryPageTemplate } from "$components";
import { blackRockBlue, blackRockBlueWithLightness } from "$styles/colors";
import { FanOfCardsProps } from "$components/component-practice/fan-of-cards/fan-of-cards-props";
import { allie, lucy, struthlessIbisDrawing } from "$images/index";

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

	const VersionedFanOfCards =
		FanOfCards[selectedVersion as keyof typeof FanOfCards];

	const fanProps: FanOfCardsProps = {
		cardImages: [
			{ src: allie, alt: "Amogus Allie" },
			{ src: lucy, alt: "Lucy Deucy" },
			{ src: struthlessIbisDrawing, alt: "Struthless's Ibis drawing" },
		],
	};

	return (
		<GalleryPageTemplate
			date="2023-03-14, last updated 2023-03-14"
			title="Fan of Cards"
		>
			<CenteredContent>
				<VersionedFanOfCards {...fanProps} />
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
