import React, { useState } from "react";
import styled from "styled-components";

import { GalleryPageTemplate } from "$components";
import { ConcentricButton } from "$components/component-practice";
import { blackRockBlue, blackRockBlueWithLightness } from "$styles/colors";

const CenteredContent = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2em;

	padding-block: 1em;
	margin-block: 10em;
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

const ConcentricButtonPage: React.FC = () => {
	const versions = Object.keys(ConcentricButton).sort();

	const [selectedVersion, setSelectedVersion] = useState(
		versions[versions.length - 1]
	);

	const VersionedConcentricButton =
		ConcentricButton[selectedVersion as keyof typeof ConcentricButton];

	return (
		<GalleryPageTemplate
			date="2023-03-07, last updated 2023-03-11"
			title="Concentric Button"
		>
			<CenteredContent>
				<VersionedConcentricButton
					onClick={() => alert("Oh no! I've been clicked!")}
				>
					Click me &mdash; if you dare!
				</VersionedConcentricButton>
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
									setSelectedVersion(version as keyof typeof ConcentricButton)
								}
							/>
							{version}
						</VersionOptionWrapper>
					))}
				</VersionPicker>
			</SectionWithGaps>

			<SectionWithGaps>
				<p>
					On 3/7/2023, I made the first concentric button. It pulsates! I dare
					you to not click it.
				</p>

				<p>
					I'll iterate on this design going forward, and you'll be able to see
					the different versions over time on this page. FYI, for some reason,
					V1 doesn't animate the pseudo-elements when switching into it after
					the page loads.
				</p>

				<p>
					2023-03-11: I'll have to take a pause on building anything out for
					this website because I'll have some software from my job on the
					computer I'm using to develop it, and I don't want there to be any
					overlap of time.
				</p>
			</SectionWithGaps>
		</GalleryPageTemplate>
	);
};

export default ConcentricButtonPage;

export const Head: React.FC = () => {
	return (
		<>
			<title>Concentric Button | Zac Milano</title>
		</>
	);
};
