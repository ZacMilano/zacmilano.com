import React from "react";
import styled from "styled-components";

import { CollapsibleSection, PetsHead, PetPageTemplate } from "$components";
import { blackRockBlue } from "$styles/colors";
import { allie } from "$data";

const Checklist = styled.ul`
	list-style: none;

	& > li {
		position: relative;
		margin-block: 0.75em;

		& > i {
			position: absolute;
			left: -1.5em;
			top: 50%;
			transform: translateY(-50%);
			color: ${blackRockBlue};
		}
	}
`;

// TODO standardize spacing. But how?
const Paragraph = styled.p`
	margin-block: 2em;
`;

const AlliePage: React.FC = () => {
	const intro = (
		<div>
			<Paragraph>Allie is a honky jat.</Paragraph>

			<Paragraph>
				She is known for her sweetness, trickery, and mischief.
			</Paragraph>
		</div>
	);

	// TODO figure out how to make a short intro not look empty on desktop
	// TODO make section component

	return (
		<PetPageTemplate pet={allie} intro={intro}>
			<CollapsibleSection title="Catnip">
				<h3>Run-ins with the Law</h3>

				<p>
					Allie has been arrested 25 times on suspicion of possession of catnip
					alone, disregarding her other arrests. She has also been charged with
					1 (one) count of misdemeanor possession of catnip, 3 (three) counts of
					felony possession of catnip, and 2 (two) super-felony counts of
					distribution of catnip to kittens. Allie was indicted on both of these
					super-felony charges, but managed to bust out of jail within a week
					each time.
				</p>

				<figure>
					<blockquote>
						You only do two days. The day you come in, and the day you get out.
					</blockquote>

					<figcaption>
						&mdash; Allie, after breaking out of <q>da county clink</q> for the
						first time (2020), and after the second time (2023)
					</figcaption>
				</figure>

				<p>
					Police lab test results on samples from arrest scenes indicate that
					Allie has carried 5 different strains of catnip. Allie's blood tests
					from the same lab have consistently been clean and clear of any
					substance usage. Allie has denied all allegations of dealing catnip to
					kittens.
				</p>
			</CollapsibleSection>

			<CollapsibleSection title="Other Info">
				<Checklist>
					<li>
						<i className="fas fa-check-square" />
						Cat.
					</li>

					<li>
						<i className="fas fa-check-square" />
						Menace.
					</li>

					<li>
						<i className="fas fa-check-square" />
						Known criminal.
					</li>

					<li>
						<i className="fas fa-check-square" />
						Sweeter than candy.
					</li>

					<li>
						{" "}
						<i className="fas fa-check-square" />
						Known homie:{" "}
						<a
							href="https://www.imdb.com/name/nm10128417/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Logan Lloyd
						</a>
						.
					</li>
				</Checklist>
			</CollapsibleSection>

			<Paragraph>
				Of course, I'm planning to add more info for Allie, and add more pets
				over time.
			</Paragraph>

			<Paragraph>
				Do you have an idea? Put it in the{" "}
				<a href="https://youtu.be/OyDyOweu-PA">suggestion box</a>!
			</Paragraph>
		</PetPageTemplate>
	);
};

export default AlliePage;

export const Head: React.FC = () => {
	return <PetsHead petName={"Allie"} includeFontAwesomeScript />;
};
