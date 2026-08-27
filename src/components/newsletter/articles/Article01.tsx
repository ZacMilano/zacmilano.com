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
      <h2>The Great Squirrel Migration of 2026</h2>

      <ImagePlaceholder />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus,
        nulla gravida orci a odio tincidunt. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
        amet risus. Etiam porta sem malesuada magna mollis euismod. The squirrels
        were seen carrying{" "}
        <Annotated
          id="subway-footlongs"
          content={<>Footlongs from Subway</>}
        >
          footlongs
        </Annotated>{" "}
        across the interstate in an orderly single-file line.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Maecenas sed diam eget risus varius blandit sit amet non magna. Integer
        posuere erat a ante venenatis dapibus posuere velit aliquet.
      </p>

      <ImagePlaceholder $float="right" />

      <p>
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean
        lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit
        amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.
        Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam.
        Pellentesque ornare sem lacinia quam venenatis vestibulum. Scientists
        believe the{" "}
        <Annotated
          id="acorn-surplus"
          content={
            <>
              The 2025 acorn harvest was 340% above the historical average,
              leading to unprecedented squirrel population growth
            </>
          }
        >
          acorn surplus
        </Annotated>{" "}
        of the previous autumn may have triggered the unprecedented event.
      </p>

      <p>
        Cras justo odio, dapibus ut facilisis in, egestas eget quam. Nullam id
        dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus,
        tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
        massa justo sit amet risus.
      </p>

      <p>
        Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a
        pharetra augue. Maecenas faucibus mollis interdum. Donec id elit non mi
        porta gravida at eget metus. Aenean lacinia bibendum nulla sed
        consectetur. Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et.
      </p>
    </section>
  );
};
