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

export const Article09: React.FC = () => {
  return (
    <section>
      <h2>Town Unveils World&apos;s Largest Roundabout, Nobody Knows How to Exit</h2>

      <ImagePlaceholder />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet
        sed, volutpat a, consequat quis, leo. Maecenas vulputate, pede ac
        consequat lobortis, magna est tempus ante, vel molestie nisi nibh vitae
        ante.
      </p>

      <p>
        Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae,
        justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus.
        Integer pellentesque quam vel velit. Duis pulvinar. Nam quis nulla.
        Integer malesuada. In in enim a arcu imperdiet malesuada. Sed ipsum. Sed
        mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
      </p>

      <ImagePlaceholder $float="right" />

      <p>
        Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at
        pede. Etiam vel neque nec dui dignissim bibendum. Vivamus id enim.
        Phasellus neque orci, porta a, aliquet quis, semper a, massa. Phasellus
        purus. Pellentesque tristique imperdiet tortor. Nam euismod tellus id
        erat.
      </p>

      <p>
        Nullam eu ante vel est convallis dignissim. Fusce suscipit, wisi nec
        facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis
        odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed pede. Sed
        bibendum. Aliquam posuere. Nunc aliquet, augue nec adipiscing interdum,
        lacus tellus malesuada massa, quis varius mi purus non odio.
      </p>

      <p>
        Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue
        ornare nulla, non luctus diam neque sit amet urna. Curabitur vulputate
        vestibulum lorem. Fusce sagittis, libero non molestie mollis, magna orci
        ullamcorper dolor, at vulputate neque nulla lacinia eros. Sed id ligula
        quis est convallis tempor.
      </p>
    </section>
  );
};
