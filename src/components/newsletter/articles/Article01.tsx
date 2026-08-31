import React from "react";
import styled from "styled-components";
import { withFam } from "../../../images";

const Cover = styled.section`
	position: relative;
	width: 100vw;
	margin-inline: calc(50% - 50vw);
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2em;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		background-image: url(${withFam});
		background-size: cover;
		background-position: center;
		z-index: 0;
	}

	> * {
		position: relative;
		z-index: 1;
	}

  color: white;
  text-shadow: 1px 1px 3px black;
`;

const Title = styled.h1`
	margin-block: 0.5em !important;
	text-align: center;
	white-space: nowrap;
	font-size: clamp(2.25rem, 11vw, 9rem);
`;

const Subtitle = styled.p`
	text-align: center;
	margin-block-end: 2em;
	font-size: clamp(1.25rem, 5vw, 5rem);
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(0.5em, 1vw, 2em);
`;

export const Article01: React.FC = () => {
  return (
		<Cover id="1">
			<Title>BOIS MONTHLY</Title>

			<Subtitle>
				<span>August 2026</span><span>❖</span><span>The Zac Edition</span>
			</Subtitle>
		</Cover>
	);
};
