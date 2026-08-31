import { pie } from "$images/index";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
	&& {
		overflow: visible;
	}
`;

const ComicImage = styled.img`
	display: block;
	width: 50vw;
	min-width: 100%;
	max-width: 100vw;
	margin-inline: 50%;
	transform: translateX(-50%);
`;

export const Article09: React.FC = () => {
  return (
    <Section id='9'>
      <h2>Comic</h2>

      <ComicImage src={pie} alt="New Yorker type comic about Dutch apple pie" />
    </Section>
  );
};
