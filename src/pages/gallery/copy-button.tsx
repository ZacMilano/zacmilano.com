import React, { useEffect } from "react";
import Prism from "prismjs";
import styled from "styled-components";

import { GalleryPageTemplate } from "$components";
import "$styles/prism-vsc-dark-plus.css";
import { CodeBlock } from "$components/component-practice";

const SectionWithSpacing = styled.section`
	margin-block-start: 4em;

	& > * + * {
		margin-block-start: 2em;
	}
`;

const CopyButtonPage: React.FC = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	const someCommands = `git clone https://github.com/example/test
cd test
yarn
yarn start`;

	const someCode = `import type { Problem } from "@the-world";
import { getDefaultContext, getLogger } from "$core";

export function universalSolution(problem: Problem): NodeJS.Timeout {
  return setTimeout(() => {
    const logger = getLogger();
    const context = getDefaultContext();
    logger.info({ context, message: "42" });
  }, 75 * 1000000 * 365.242199 * 24 * 60 * 60 * 1000);
}`;

	return (
		<GalleryPageTemplate date="2023-03-06" title="The Copy Button">
			<header>
				<p>
					Today, I added the ability to copy the text content of a CodeBlock.{" "}
				</p>
			</header>

			<SectionWithSpacing>
				<header>
					<h2>Useful for commands</h2>
				</header>

				<p>
					This is useful for blocks of commands that need to be run as part of a
					tutorial (though sometimes, a one-liner that chains commands with the
					ol' &amp;&amp; is more appropriate).
				</p>
				<CodeBlock language="bash" code={someCommands} isCopyable />
			</SectionWithSpacing>

			<SectionWithSpacing>
				<header>
					<h2>Useful for sharing code otherwise</h2>
				</header>

				<p>
					This is also clearly useful to make code easily accessible if you
					expect a reader to want to use it directly.
				</p>
				<CodeBlock language={"typescript"} code={someCode} isCopyable />
			</SectionWithSpacing>
		</GalleryPageTemplate>
	);
};

export default CopyButtonPage;

export const Head = () => {
	return (
		<>
			<title>Copy Button | Zac Milano</title>

			<script
				src="https://kit.fontawesome.com/6ab573e32e.js"
				crossOrigin="anonymous"
			/>
		</>
	);
};
