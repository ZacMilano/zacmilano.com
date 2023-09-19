import React from "react";
import styled from "styled-components";

import { CollapsibleSection, PetsHead, PetPageTemplate } from "$components";
import { blackRockBlue } from "$styles/colors";
import { lucy } from "$data";
import { Link } from "gatsby";

// TODO standardize spacing. But how?
const Paragraph = styled.p`
	margin-block: 1em;
`;

const LucyPage: React.FC = () => {
	const intro = (
		<div>
			<Paragraph>Lucy is a scaredy cat, a monster.</Paragraph>

			<Paragraph>
				She is known for begging for food (specifically cookies), and beating up
				her siblings Mango &amp; Livvy while growling like a cheetah.
			</Paragraph>
		</div>
	);

	// TODO figure out how to make a short intro not look empty on desktop
	// TODO make section component

	return (
		<PetPageTemplate pet={lucy} intro={intro}>
			<CollapsibleSection title="Catnip">
				<p>
					Since beginning to associate with <Link to="../Allie">Allie</Link>{" "}
					(2022 - present), Lucy has struggled with chronic catnip addiction.
					She vehemently refuses treatment, citing that{" "}
					<q>Allie will beat [her] up</q>. Lucy's parents,{" "}
					<Link to="/">Zac</Link> and Sofi, have remained silent on their
					daughter's suffering.
				</p>
			</CollapsibleSection>

			<Paragraph>
				Do you have an idea? Put it in the{" "}
				<a href="https://youtu.be/OyDyOweu-PA">suggestion box</a>!
			</Paragraph>
		</PetPageTemplate>
	);
};

export default LucyPage;

export const Head: React.FC = () => {
	return <PetsHead petName={"Lucy"} includeFontAwesomeScript />;
};
