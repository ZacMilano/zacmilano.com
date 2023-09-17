import React from "react";
import styled from "styled-components";

import { PetPageData } from "$data";
import { blackRockBlueWithLightness } from "$styles/colors";

interface InfoBoxProps {
	pet: PetPageData;
}

const Card = styled.aside`
	display: grid;
	gap: 1em;
	justify-items: center;

	padding: 2em;
	background-color: ${blackRockBlueWithLightness(95)};
	border: 2px solid ${blackRockBlueWithLightness(90)};
`;

const MainPhoto = styled.img`
	max-width: min(100%, 25rem);
`;

const InfoLines = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 0.5em;
`;

interface InfoLineProps {
	label: string;
	value?: string;
}

const InfoLine: React.FC<InfoLineProps> = ({ label, value }) => {
	return value ? (
		<>
			<p>
				<strong>{label}</strong>
			</p>
			<p>{value}</p>
		</>
	) : (
		<></>
	);
};

interface FamilyLineProps {
	family: PetPageData["family"];
}

const FamilyLine: React.FC<FamilyLineProps> = ({ family }) => {
	const FamilyMember: React.FC<FamilyLineProps["family"][number]> = ({
		name,
		relation,
		link,
	}) => {
		if (link)
			return (
				<>
					<p>
						<a href={link} target="_blank" rel="noopener noreferrer">
							{name}
						</a>{" "}
						({relation})
					</p>
				</>
			);

		return (
			<p>
				{name} ({relation})
			</p>
		);
	};

	return (
		<>
			<p>
				<strong>Family</strong>
			</p>
			<div>{family.map(FamilyMember)}</div>
		</>
	);
};

export const InfoBox: React.FC<InfoBoxProps> = ({ pet }: InfoBoxProps) => {
	return (
		<Card>
			<h2>{pet.name}</h2>

			<MainPhoto src={pet.mainPhotoSrc} alt={pet.name} />

			<InfoLines>
				<InfoLine label="Full name" value={pet.fullName} />
				<InfoLine label="Species" value={pet.species} />
				<InfoLine label="Alignment" value={pet.alignment} />
				<InfoLine label="Born" value={pet.birthday} />
				<InfoLine label="Adopted" value={pet.gotchaDay} />
				<FamilyLine family={pet.family} />
			</InfoLines>
		</Card>
	);
};
