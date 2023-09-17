import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Zac Milano's personal site`,
		siteUrl: `https://zacmilano.com`,
	},
	trailingSlash: "never",
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-mdx",
		"gatsby-plugin-sharp",
		"gatsby-plugin-styled-components",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-alias-imports",
			options: {
				alias: {
					$components: "src/components",
					$utils: "src/utils",
					$hooks: "src/hooks",
					$constants: "src/constants",
					$pages: "src/pages",
					$images: "src/images",
					$data: "src/data",
					$styles: "src/styles",
					$types: "src/types",
				},
				extensions: ["ts", "tsx", "js", "jsx"],
			},
		},
		{
			resolve: `gatsby-plugin-s3`,
			options: {
				bucketName: "zacmilano.com",
				acl: null,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
	],
};

export default config;
