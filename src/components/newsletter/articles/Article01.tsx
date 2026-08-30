import React from "react";
import styled from "styled-components";
import { Annotated } from "../annotations";

const ImagePlaceholder = styled.div<{ $float?: "left" | "right" }>`
  width: 300px;
  height: 200px;
  background: hsl(0, 0%, 85%);
  border-radius: 4px;
  float: ${(p) => p.$float || "left"};
  margin: ${(p) =>
    p.$float === "right" ? "0.5em 0 1em 1.5em" : "0.5em 1.5em 1em 0"};
  shape-outside: margin-box;
`;

const Title = styled.h1`
	margin-block: 1.5em 0.5em;
	text-align: center;
`;

const Subtitle = styled.p`
	text-align: center;
	color: hsl(0, 0%, 45%);
	margin-block-end: 2em;
`;


export const Article01: React.FC = () => {
  return (
    <section id='1'>
      <Title>BOIS MONTHLY</Title>
      
      <Subtitle>August 2026</Subtitle>
      
      <Subtitle>The Zac Edition</Subtitle>

      <ImagePlaceholder />
      <p>TODO: make cover</p>
    </section>
  );
};
