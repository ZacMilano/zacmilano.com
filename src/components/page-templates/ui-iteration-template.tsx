import React, { useMemo, useState } from "react";
import styled from "styled-components";

import { GalleryPageTemplate } from "$components";
import { blackRockBlue, blackRockBlueWithLightness } from "$styles/colors";

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

export type UiIterationPageProps<
	IteratedComponentProps extends Record<string, unknown>
> = React.PropsWithChildren<{
	iteratedComponent: Record<
		string,
		React.ComponentType<IteratedComponentProps>
	>;
	iteratedComponentProps: IteratedComponentProps;
	funStuff?: React.ReactNode;
	date: string;
	title: string;
}>;

export function UiIterationPage<
	IteratedComponentProps extends Record<string, unknown>
>({
	children,
	...props
}: UiIterationPageProps<IteratedComponentProps>): React.ReactElement {
	// Default to showing the latest version
	const versions = Object.keys(props.iteratedComponent).sort();
	const [selectedVersion, setSelectedVersion] = useState(
		versions[versions.length - 1]
	);

	const VersionedComponent = useMemo(
		() =>
			props.iteratedComponent[
				selectedVersion as keyof typeof props.iteratedComponent
			],
		[props, selectedVersion]
	);

	return (
		<GalleryPageTemplate date={props.date} title={props.title}>
			<CenteredContent>
				{/* The component itself, rendering whichever version is selected */}
				<VersionedComponent {...props.iteratedComponentProps} />
			</CenteredContent>

			{props.funStuff && (
				<CenteredContent>
					{/* Alter the component's data, eg button's text, number of children */}
					{props.funStuff}
				</CenteredContent>
			)}

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
								name="ui-component-version"
								value={version}
								checked={version === selectedVersion}
								onChange={() => setSelectedVersion(version as string)}
							/>
							{version}
						</VersionOptionWrapper>
					))}
				</VersionPicker>
			</SectionWithGaps>

			<SectionWithGaps>
				{/* Commentary about the component */}
				{children}
			</SectionWithGaps>
		</GalleryPageTemplate>
	);
}
