import React, { useState } from "react";
import styled from "styled-components";

const CodePre = styled.pre`
	position: relative;

	&:is(:hover, :focus-within) > button {
		opacity: 0.7;
	}
`;

const CopyButton = styled.button`
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 2em;
	aspect-ratio: 1;
	border: none;
	background-color: white;

	top: 0;
	left: 0;
	opacity: 0;
	transition: opacity 250ms ease-out;
`;

interface CodeBlockProps {
	code: string;
	language: string;
	isCopyable?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
	code,
	language,
	isCopyable,
}) => {
	const [isCopying, setIsCopying] = useState(false);
	const [hasCopied, setHasCopied] = useState(false);
	const copyContentToClipboard = () => {
		if (isCopying) return;

		setIsCopying(true);
		navigator.clipboard.writeText(code).then(() => {
			setIsCopying(false);
			setHasCopied(true);
			setTimeout(() => setHasCopied(false), 2000);
		});
	};

	const copyButtonIconClass = () => {
		if (isCopying) {
			return "fa-spinner";
		}
		if (hasCopied) {
			return "fa-check";
		}
		return "fa-copy";
	};

	return (
		<CodePre className={`language-${language}`}>
			<code>{code}</code>

			{isCopyable && (
				<CopyButton onClick={copyContentToClipboard}>
					<i className={`fa-solid ${copyButtonIconClass()}`} />
				</CopyButton>
			)}
		</CodePre>
	);
};
