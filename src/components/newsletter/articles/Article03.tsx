import React from "react";
import styled from "styled-components";
import { Annotated } from "../annotations";

const ImagePlaceholder = styled.div<{ $float?: "left" | "right" }>`
  width: 250px;
  height: 250px;
  background: hsl(0, 0%, 85%);
  border-radius: 4px;
  float: ${(p) => p.$float || "left"};
  margin: ${(p) =>
    p.$float === "right" ? "0.5em 0 1em 1.5em" : "0.5em 1.5em 1em 0"};
  shape-outside: margin-box;
`;

export const Article03: React.FC = () => {
  return (
    <section id='3'>
      <h2>General life update</h2>

      <p>TODO: Write life update</p>
      
      <h3>Outline</h3>
      <ul>
        <li>
          Personal work in therapy and such
        </li>
        <ul>
          <li>
            Trauma work/EMDR, somatic therapy/grounding techniques, anxiety med
          </li>
          <li>
            I feel like I'm doing some good work to prep for possibly having
            kids, and also learning to love myself a bit more
          </li>
        </ul>

        <li>
          Arbi staying with us earlier in the year
        </li>
        <li>
          Def phone addicted
        </li>
        <li>
          Loving coffee again
        </li>
        <li>
          Sofi: internship, academic updates
        </li>
        <li>
          Shrimp is getting old and I'm hopeful he goes to college in Chicago
        </li>
        <li>
          Getting back into Rubik's cubes a little bit
        </li>
        <li>
          Pics of some shit I've designed/created using CAD + such
        </li>
        <li>
          Selected artworks/photographs
        </li>
      </ul>
    </section>
  );
};
