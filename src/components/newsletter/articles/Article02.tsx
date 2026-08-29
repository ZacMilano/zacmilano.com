import React from "react";
import styled from "styled-components";

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

type ItemType = string;

const items: ItemType[] = [
  "Cover",
  "Table of contents (you are here)",
  "General life update",
  "Doohickey of the month: TARbot",
  "Lemme mansplain some shi",
  "A word from our sponsors",
  "Political felinology",
  "The case for digital media*",
  "Comic",
  "Recommendations",
  "Chipotle bell pepper chicken tacos recipe",
  "Another word, another sponsor",
  "Signing off",
];

export const Article02: React.FC = () => {
  return (
    <section>
      <h2>Table of contents</h2>

      <ol>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </section>
  );
};
