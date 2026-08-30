import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  margin: 1em 0;
  clear: both;

  figure {
    flex: 1 1 0;
    min-width: 0;
    margin: 0;
  }

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
    text-align: center;
  }
`;

export interface RowImage {
  src: string;
  alt: string;
  caption?: React.ReactNode;
}

export interface ImageRowProps {
  images: RowImage[];
}

export const ImageRow: React.FC<ImageRowProps> = ({ images }) => (
  <Row>
    {images.map((img, i) => (
      <figure key={i}>
        <img src={img.src} alt={img.alt} />
        {img.caption && <figcaption>{img.caption}</figcaption>}
      </figure>
    ))}
  </Row>
);
