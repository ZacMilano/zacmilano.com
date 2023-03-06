import React, { useEffect } from "react";
import Prism from "prismjs";
import styled from "styled-components";

import { GalleryPageTemplate } from "$components";
import "$styles/prism-vsc-dark-plus.css";

const SectionWithSpacing = styled.section`
	margin-block-start: 4em;

	& > * + * {
		margin-block-start: 2em;
	}
`;

const ImportAliases: React.FC = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	const beforeAliases = `// src/components/my/deeply/nested/component.tsx

import { MyButton }	from "../../buttons/my-button.tsx";
import { UserResponse }	from "../../../../types";
import "../../../../styles/styles.css";`;

	const afterAliases = `// src/pages/my/deeply/nested/page.tsx

import { MyButton }	from "$components/my-button.tsx";
import { UserResponse }	from "$types";
import "$public/styles.css";`;

	const tsconfigNoBaseUrl = `{
  "compilerOptions": {
    // ...
    "paths": {
      "$components/*": ["./src/components/*"],
      "$styles/*": ["./src/styles/*"],
      "$types/*": ["./src/types/*"],

      // Also include the aliases below if you want to import directly from the alias, e.g.
      // import { MyButton } from "$components";
      "$components": ["./src/components"],
      "$styles": ["./src/styles"],
      "$types": ["./src/types"]
    }
    // ...
  },
  // ...
}`;

	const tsconfigBaseUrl = `{
  "compilerOptions": {
    // ...
    "baseUrl": "./src",
    "paths": {
      "$components/*": ["components/*"],
      "$styles/*": ["styles/*"],
      "$types/*": ["types/*"],

      // Also include the aliases below if you want to import directly from the alias, e.g.
      // import { MyButton } from "$components";
      "$components": ["components"],
      "$styles": ["styles"],
      "$types": ["types"]
    }
  },
  // ...
}`;

	const tsconfigInclude = `{
  "compilerOptions": {
    // ...
  },
  "include": [
    "./src/**/*",
    "./gatsby-config.ts",
    // ...
  },
  // ...
}`;

	const installPluginNpm = `npm i gatsby-plugin-alias-imports`;
	const installPluginYarn = `yarn add gatsby-plugin-alias-imports`;

	const gatsbyConfig = `  // ...
  plugins: [
    // ...
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          $components: "src/components",
          $styles: "src/styles",
          $types: "src/types",
        },
        extensions: ["ts", "tsx", "js", "jsx"], // Include any other file extensions in your project
      },
    },
  ],
	// ...`;

	return (
		<GalleryPageTemplate date="2023-03-05" title="Import Aliases & Code Blocks">
			<header>
				<p>
					Today, I added import aliases and{" "}
					<a href="https://prismjs.com/" target="_blank">
						PrismJS
					</a>{" "}
					to this project. I added PrismJS specifically for this page.
				</p>
			</header>

			<SectionWithSpacing>
				<header>
					<h2>Why add import aliases?</h2>
				</header>

				<p>
					As you start working on a project, it gets larger and requires some
					organization to stay maintainable. Before taking care of this, often
					times, the imports at the top of most files begin to look a bit like
					this:
				</p>

				<pre className="language-typescript">
					<code>{beforeAliases}</code>
				</pre>

				<p>
					That's pretty ugly, and hard to maintain. If you move this file to a
					different location in the project, you have to update every one of
					these relative import statements.
				</p>

				<p>
					Similarly, renaming or moving a file requires you to update every
					OTHER file that imports something from that original file.
				</p>

				<p>
					Import aliases solve this problem. With them, you can declare
					globally-interpreted sources for modules to be imported:
				</p>

				<pre className="language-typescript">
					<code>{afterAliases}</code>
				</pre>

				<p>
					I'm using the $ symbol to denote local-project modules. An approach
					I've seen in the past is to use the @ symbol, but this prefix is also
					commonly used for third-party packages (installed via NPM), so I want
					to remove this ambiguity.
				</p>
			</SectionWithSpacing>

			<SectionWithSpacing>
				<header>
					<h2>How?</h2>
				</header>

				<p>
					To do this yourself in a Gatsby/TS project, you'll need to install a
					Gatsby plugin and update a couple files.
				</p>

				<h3>In your project's tsconfig.json:</h3>
				<p>
					Add the alias mappings you'd like to use. The * is a glob-like
					character.{" "}
					<a
						href="https://www.typescriptlang.org/tsconfig#paths"
						target="_blank"
						rel="noopener noreferrer"
					>
						Read more in the TypeScript docs
					</a>
					.
				</p>
				<pre className="language-json">
					<code>{tsconfigNoBaseUrl}</code>
				</pre>

				<p>
					Optionally, you can set a base URL with which the paths will be
					prefixed:
				</p>
				<pre className="language-json">
					<code>{tsconfigBaseUrl}</code>
				</pre>

				<p>
					Make sure also that your TypeScript Compiler's config includes the
					source code you're working with:
				</p>
				<pre className="language-json">
					<code>{tsconfigInclude}</code>
				</pre>

				<h3>Install gatsby-plugin-alias-imports</h3>
				<p>Install gatsby-plugin-alias-imports via NPM:</p>
				<pre className="language-bash">
					<code>{installPluginNpm}</code>
				</pre>

				<p>Or via Yarn:</p>
				<pre className="language-bash">
					<code>{installPluginYarn}</code>
				</pre>

				<h3>In your project's gatsby-config.js:</h3>
				<p>
					Add the aliases in the plugin configuration for
					gatsby-plugin-alias-imports.{" "}
					<a
						href="https://www.gatsbyjs.com/plugins/gatsby-plugin-alias-imports/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Read more in the docs for the plugin
					</a>
					.
				</p>
				<pre className="language-javascript">
					<code>{gatsbyConfig}</code>
				</pre>

				<h3>Good to go!</h3>
				<p>That's all there is to it! Go wild.</p>
			</SectionWithSpacing>

			<SectionWithSpacing>
				<header>
					<h2>PrismJS</h2>
				</header>

				<p>
					Prism is a lightweight syntax highlighter with lots of customization
					options. I am using it via NPM, but you can download a minified
					version of it (JS and CSS) from{" "}
					<a
						href="https://prismjs.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						PrismJS.com
					</a>
					. I'm using the{" "}
					<a
						href="https://github.com/PrismJS/prism-themes"
						target="_blank"
						rel="noopener noreferrer"
					>
						VS Code Dark Plus theme.
					</a>
				</p>
			</SectionWithSpacing>
		</GalleryPageTemplate>
	);
};

export default ImportAliases;
