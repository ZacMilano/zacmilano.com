import React from "react";
import styled from "styled-components";

type Float = "left" | "right";

const Figure = styled.figure<{ $float: Float; $width: string }>`
  width: ${(p) => p.$width};
  max-width: 100%;
  float: ${(p) => p.$float};
  margin: ${(p) =>
    p.$float === "right" ? "0.5em 0 1em 1.5em" : "0.5em 1.5em 1em 0"};
  shape-outside: margin-box;

  img {
    display: block;
    width: 100%;
    height: auto;
    background: hsl(0, 0%, 85%);
    border-radius: 4px;
  }

  figcaption {
    margin-top: 0.4em;
    font-size: 0.85rem;
    color: hsl(0, 0%, 45%);
  }

  /* on narrow screens, don't float — break out to the full viewport width,
     even when nested inside a <ul> or other padded container */
  @media (max-width: 600px) {
    float: none;
    width: 100vw;
    max-width: 100vw;
    margin-inline: 0;
    margin-block: 1.5em;
    margin-left: 50%;
    transform: translateX(-50%);

    img {
      border-radius: 0;
    }

    figcaption {
      text-align: center;
      padding-inline: 1em;
    }
  }
`;

export interface FloatImageProps {
  src: string;
  alt: string;
  /** which side to float toward; defaults to "left" */
  float?: Float;
  /** CSS width of the image on desktop; defaults to "300px" */
  width?: string;
  /** optional caption rendered under the image */
  caption?: React.ReactNode;
}

export const FloatImage: React.FC<FloatImageProps> = ({
  src,
  alt,
  float = "left",
  width = "300px",
  caption,
}) => (
  <Figure $float={float} $width={width}>
    <img src={src} alt={alt} />
    {caption && <figcaption>{caption}</figcaption>}
  </Figure>
);
