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

export const Article10: React.FC = () => {
  return (
    <section>
      <h2>Library Cat Elected Employee of the Month for Seventh Consecutive Time</h2>

      <ImagePlaceholder $float="right" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
        amet est et sapien ullamcorper pharetra. Vestibulum erat wisi,
        condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum,
        elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
        lacus enim ac dui.
      </p>

      <p>
        Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus,
        neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna
        eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
        accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla
        quis nibh.
      </p>

      <ImagePlaceholder />

      <p>
        Quisque a lectus. Donec consectetuer ligula vulputate sem tristique
        cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
        Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
        ultrices ut, elementum vulputate, nunc. Sed adipiscing ornare risus.
        Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit.
      </p>

      <p>
        Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut
        nulla eros, operae vitae, cursus et, magna. Curabitur auctor semper
        nulla. Donec varius orci eget risus. Duis nibh mi, congue eu, accumsan
        eleifend, sagittis quis, diam. Duis eget orci sit amet orci dignissim
        rutrum.
      </p>

      <p>
        Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi.
        Morbi auctor lorem non justo. Nam lacus libero, pretium at, lobortis
        vitae, ultricies et, tellus. Donec aliquet, tortor sed accumsan
        bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi
        ac orci et nisl hendrerit mollis.
      </p>
    </section>
  );
};
