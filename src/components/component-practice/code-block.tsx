import { blackRockBlue } from "$styles/colors";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const CodePre = styled.pre`
	background-color: ${blackRockBlue};
	color: white;
`;

export const CodeBlock: React.FC<PropsWithChildren> = ({ children }) => {
	return <CodePre>{children}</CodePre>;
};
