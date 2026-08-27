import React from "react";
import styled from "styled-components";

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

export const Article06: React.FC = () => {
  return (
    <section>
      <h2>Area Dog Has No Idea What&apos;s Going On But Is Thrilled Regardless</h2>

      <ImagePlaceholder $float="right" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus
        porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Nulla dui.
      </p>

      <p>
        Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec,
        luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra
        magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum
        magna. Sed laoreet aliquam leo.
      </p>

      <p>
        Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.
        Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.
        Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque
        eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel
        metus. Nulla facilisi.
      </p>

      <ImagePlaceholder />

      <p>
        Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo.
        Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt
        ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem,
        interdum vitae, dapibus ac, scelerisque vitae, pede.
      </p>

      <p>
        Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum
        auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum
        velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque sed dolor. Aliquam congue
        fermentum nisl. Mauris accumsan nulla vel diam.
      </p>
    </section>
  );
};
