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

export const Article01: React.FC = () => {
  return (
    <section>
      <h2>Cover</h2>
      
      <ImagePlaceholder />

      <p>TODO: make cover</p>
      
      <p>TODO link table of contents to each article's start</p>
      
      <p>TODO: a bunch of annotations</p>
    </section>
  );
};
