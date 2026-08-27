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

export const Article05: React.FC = () => {
  return (
    <section>
      <h2>Scientists Confirm Clouds Are Just Sky Pillows</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere.
      </p>

      <ImagePlaceholder $float="right" />

      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In
        scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
        Proin ut ligula vel nunc egestas porttitor.
      </p>

      <p>
        Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
        Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus
        metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque
        volutpat condimentum velit. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <p>
        Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque
        adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut
        fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat
        imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in
        justo eu magna luctus suscipit.
      </p>

      <ImagePlaceholder />

      <p>
        Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus
        vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget
        diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit
        dolor.
      </p>

      <p>
        Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum
        sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit
        vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
        ultrices ultrices enim. Curabitur sit amet mauris.
      </p>
    </section>
  );
};
