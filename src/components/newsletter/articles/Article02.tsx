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

export const Article02: React.FC = () => {
  return (
    <section>
      <h2>Local Man Discovers Fifth Flavor of Ice Cream</h2>

      <ImagePlaceholder $float="right" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
        sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est.
      </p>

      <p>
        Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
        pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare
        sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
        ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
        turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
        faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
      </p>

      <p>
        Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
        facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a
        lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam
        nulla quam, gravida non, commodo a, sodales sit amet, nisi.
      </p>

      <ImagePlaceholder />

      <p>
        Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
        ultrices ut, elementum vulputate, nunc. Sed adipiscing ornare risus.
        Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit.
        Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut nulla
        eros, operae vitae, cursus et, magna etiam operae.
      </p>

      <p>
        Curabitur auctor semper nulla. Donec varius orci eget risus. Duis nibh
        mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci
        sit amet orci dignissim rutrum. Nam dui ligula, fringilla a, euismod
        sodales, sollicitudin vel, wisi. Morbi auctor lorem non justo. Nam lacus
        libero, pretium at, lobortis vitae, ultricies et, tellus.
      </p>
    </section>
  );
};
