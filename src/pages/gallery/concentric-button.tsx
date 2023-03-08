import React from "react";
import styled from "styled-components";

import { ConcentricButton, GalleryPageTemplate } from "$components";

const CenteredContent = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	padding-block: 1em;
	margin-block: 10em;
`;

const ConcentricButtonpage: React.FC = () => {
	return (
		<GalleryPageTemplate date="2023-03-07" title="Concentric Button">
			<CenteredContent>
				<ConcentricButton onClick={() => alert("Oh no! I've been clicked!")}>
					Click me &mdash; if you dare!
				</ConcentricButton>
			</CenteredContent>

			<section>
				Today, I made the concentric button. It pulsates! I dare you to not
				click it.
			</section>
		</GalleryPageTemplate>
	);
};

export default ConcentricButtonpage;

export const Head: React.FC = () => {
	return (
		<>
			<title>Concentric Button | Zac Milano</title>
		</>
	);
};
