module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	// extends: ["plugin:react/recommended"],
	ignorePatterns: ["**/__templates/*"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "react-hooks"],
	rules: {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "error",
	},
};
