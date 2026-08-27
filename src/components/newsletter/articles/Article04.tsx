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

export const Article04: React.FC = () => {
  return (
    <section>
      <h2>Grandmother Accidentally Joins Competitive Esports Team</h2>

      <ImagePlaceholder />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus
        urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis
        porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac
        euismod semper, magna diam porttitor mauris, quis sollicitudin sapien
        justo in libero.
      </p>

      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed
        non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit
        amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
        egestas et, augue. Vestibulum tincidunt malesuada tellus.
      </p>

      <p>
        Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis
        est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin
        massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi
        mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit
        amet, augue.
      </p>

      <ImagePlaceholder $float="right" />

      <p>
        Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum
        nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci
        risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium
        blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit,
        fermentum non, convallis id, sagittis at, neque.
      </p>

      <p>
        Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla
        ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus.
        Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
        cursus ante dapibus diam.
      </p>
    </section>
  );
};
