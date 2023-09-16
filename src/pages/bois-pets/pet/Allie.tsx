import React from "react";
import styled from "styled-components";

import { PetPageTemplate } from "$components/page-templates";
import { PetsHead } from "$components/pets";
import { allie } from "$images";
import { blackRockBlue } from "$styles/colors";

const ProfilePhoto = styled.img`
	width: clamp(var(--min-photo-size), 80vh, 100%);
`;

const MainLayout = styled.div`
	--gap: clamp(1em, 4vw, 4em);
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
	margin-block: var(--gap);

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
	// TODO complaint:
	return (
		<PetPageTemplate petName="Allie">
			<MainLayout>
				<ProfilePhoto src={allie} alt="Allie" />

				<div>
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
						More to come! Getting this up off the ground for now. Believe it or
						not, setting up the pages for this Bois' Pets project took a couple
						hours, despite how simple they are.
					</Paragraph>

					<Paragraph>
						Of course, I'm planning to add more info for Allie, and add more
						pets over time.
					</Paragraph>

					<Paragraph>
						Do you have an idea? Put it in the{" "}
						<a href="https://youtu.be/OyDyOweu-PA">suggestion box</a>!
					</Paragraph>
				</div>
			</MainLayout>
		</PetPageTemplate>
	);
};

export default AlliePage;

export const Head: React.FC = () => {
	return <PetsHead petName={"Allie"} includeFontAwesomeScript />;
};
