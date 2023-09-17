import React from "react";
import styled from "styled-components";

import { PetPageTemplate } from "$components/page-templates";
import { PetsHead } from "$components/pets";
import { blackRockBlue } from "$styles/colors";
import { allie } from "$data";

const MainLayout = styled.div`
	--min-photo-size: 16rem;

	display: grid;
	gap: var(--gap);
	grid-template-columns: repeat(auto-fit, minmax(var(--min-photo-size), 1fr));

	margin-block: 2em;

	& a {
		color: ${blackRockBlue};
	}
`;

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

const Paragraph = styled.p`
	margin-block: 2em;
`;

const AlliePage: React.FC = () => {
	const intro = (
		<div>
			<p>Allie is a honky jat.</p>
			<p>She is known for her sweetness, trickery, and mischief.</p>
		</div>
	);

	// TODO figure out how to make a short intro not look empty on desktop
	// TODO make section component

	return (
		<PetPageTemplate pet={allie} intro={intro}>
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
					<i className="fas fa-check-square"></i>
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
