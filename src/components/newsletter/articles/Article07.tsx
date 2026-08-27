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

export const Article07: React.FC = () => {
  return (
    <section>
      <h2>Neighbors Wage Passive-Aggressive War via Lawn Ornaments</h2>

      <ImagePlaceholder />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        tincidunt mauris eu risus. Vestibulum auctor dapibus neque. Nunc
        dignissim risus id metus. Cras ornare tristique elit. Vivamus vestibulum
        ntulla nec ante. Praesent placerat risus quis eros. Fusce pellentesque
        suscipit nibh.
      </p>

      <p>
        Integer vitae libero ac risus egestas placerat. Vestibulum commodo felis
        quis tortor. Ut aliquam sollicitudin leo. Cras iaculis ultricies nulla.
        Donec quis dui at dolor tempor interdum. Vivamus molestie gravida turpis.
        Tensions escalated when Mr. Henderson reportedly ordered twelve{" "}
        <Annotated
          id="subway-footlongs"
          content={<>Footlongs from Subway</>}
        >
          footlongs
        </Annotated>{" "}
        and arranged them in a circle around his neighbor&apos;s prize-winning
        garden gnome.
      </p>

      <ImagePlaceholder $float="right" />

      <p>
        Sed lacus. Donec lectus. Nullam pretium nibh ut turpis. Nam bibendum.
        In nulla. Donec vel arcu. Ut enim ad minim veniam, quis nostrud
        exercitation. Morbi luctus, wisi viverra faucibus pretium, nibh est
        placerat odio, nec commodo wisi enim eget quam. Quisque libero justo,
        consectetuer a, feugiat vitae, porttitor eu, libero.
      </p>

      <p>
        Suspendisse potenti. Sed dignissim lacus within nunc. The{" "}
        <Annotated
          id="gnome-treaty"
          content={
            <>
              The Suburban Gnome Non-Proliferation Treaty of 2025, which limits
              each household to no more than four decorative gnomes per quarter
              acre
            </>
          }
        >
          gnome treaty
        </Annotated>{" "}
        had been violated seventeen times by both parties before authorities were
        finally called. Curabitur tortor. Pellentesque nibh. Aenean quam. In
        scelerisque sem at dolor. Maecenas mattis.
      </p>

      <p>
        Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
        Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce
        ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
        ullamcorper vel, tincidunt sed, euismod in, nibh.
      </p>

      <p>
        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.
        Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a
        cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
        Suspendisse potenti.
      </p>
    </section>
  );
};
