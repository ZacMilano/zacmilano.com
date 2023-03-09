import React from "react";
import styled from "styled-components";

import { GalleryPageTemplate } from "$components";
import { ConcentricButton } from "$components/component-practice/concentric-button";

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
				<ConcentricButton.V1 onClick={() => alert("Oh no! I've been clicked!")}>
					Click me &mdash; if you dare!
				</ConcentricButton.V1>
			</CenteredContent>

			<section>
				<p>
					On 3/7/2023, I made the first concentric button. It pulsates! I dare
					you to not click it.
				</p>

				<p>
					I'll iterate on this design going forward, and you'll be able to see
					the different versions over time on this page.
				</p>
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
