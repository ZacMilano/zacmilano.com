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

export const Article08: React.FC = () => {
  return (
    <section>
      <h2>Municipal Pool Lifeguard Hasn&apos;t Moved in Three Days</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl
        nisl sit amet nisl. Nullam quis ante. Etiam sit amet orci eget eros
        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
        sodales sagittis magna.
      </p>

      <ImagePlaceholder $float="right" />

      <p>
        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis
        gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum
        purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam
        accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae.
      </p>

      <p>
        In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis
        arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed
        aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer
        eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper
        ipsum rutrum nunc.
      </p>

      <ImagePlaceholder />

      <p>
        Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui.
        Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies
        sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis
        hendrerit risus. Phasellus nec sem in justo pellentesque facilisis.
      </p>

      <p>
        Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor,
        tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien,
        tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.
        Praesent congue erat at massa. Sed cursus turpis vitae tortor.
      </p>
    </section>
  );
};
