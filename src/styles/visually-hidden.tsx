/**
 * https://www.a11yproject.com/posts/how-to-hide-content/
 */
export const VISUALLY_HIDDEN = `
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;
