import { HeadFC, PageProps } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

import { NavigationHeader } from "$components";
import { pagePaddingInline } from "$styles";
import { AnnotationProvider } from "$components/newsletter/annotations";
import {
	Article01,
	Article02,
	Article03,
	Article04,
	Article05,
	Article06,
	Article07,
	Article08,
	Article09,
	Article10,
	Article11,
	Article12,
	Article13,
} from "$components/newsletter/articles";

const PASSWORD = "froggy99";

const GateWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 60vh;
	gap: 1em;
`;

const GateForm = styled.form`
	display: flex;
	gap: 0.5em;
`;

const PasswordInput = styled.input`
	padding: 0.5em 0.75em;
	font-size: 1rem;
	border: 1px solid hsl(0, 0%, 75%);
	border-radius: 4px;
`;

const SubmitButton = styled.button`
	padding: 0.5em 1.25em;
	font-size: 1rem;
	border: none;
	border-radius: 4px;
	background: hsl(239, 43%, 41%);
	color: white;
	cursor: pointer;

	&:hover {
		background: hsl(239, 43%, 50%);
	}
`;

const Main = styled.main`
	padding-inline: ${pagePaddingInline};
	max-width: 52rem;
	margin: 0 auto;
  padding-block-end: 10rem;

	& > section {
		margin-block: 3em;
		overflow: hidden;
	}

	& > section + section {
		border-top: 1px solid hsl(0, 0%, 85%);
		padding-block-start: 3em;
	}
`;

const NewsletterPage: React.FC<PageProps> = () => {
	const [unlocked, setUnlocked] = useState(false);
	const [input, setInput] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input === PASSWORD) {
			setUnlocked(true);
		}
	};

	if (!unlocked) {
		return (
			<>
				<NavigationHeader />
				<GateWrapper>
					<p>Enter password to view the newsletter.</p>
					<GateForm onSubmit={handleSubmit}>
						<PasswordInput
							type="password"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							autoFocus
						/>
						<SubmitButton type="submit">Submit</SubmitButton>
					</GateForm>
				</GateWrapper>
			</>
		);
	}

	return (
		<>
			{/* <NavigationHeader /> */}
			<AnnotationProvider>
				<Main>
					{/* <Title>BOIS MONTHLY</Title>
					<Subtitle>August 2026 | The Zec Edition</Subtitle>
          
          <Subtitle>TODO: Make a cover</Subtitle> */}

					<Article01 />
					<Article02 />
					<Article03 />
					<Article04 />
					<Article05 />
					<Article06 />
					<Article07 />
					<Article08 />
					<Article09 />
					<Article10 />
					<Article11 />
					<Article12 />
					<Article13 />
				</Main>
			</AnnotationProvider>
		</>
	);
};

export default NewsletterPage;

export const Head: HeadFC = () => <title>Newsletter — August 2026</title>;
