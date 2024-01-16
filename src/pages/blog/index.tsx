import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { NavigationHeader } from "$components";
import { pagePaddingInline } from "$styles";

const Main = styled.main`
  display: grid;
  margin-block-start: 4em;
  padding-inline: ${pagePaddingInline};

  & > * + * {
    margin-block-start: 2em;
  }

  & > header {
    margin-block-end: 2em;
  }
`;

const Subheader = styled.p`
  font-size: 1.25rem;
`;

const BlogHome: React.FC = () => {
  return (
    <>
      <NavigationHeader />

      <Main>
        <header>
          <h1>Blog Posts</h1>

          <Subheader>Read about some stuff I've been up to.</Subheader>
        </header>

        <Link to="./queso-fresco">My wife and I are starting a business</Link>

        <Link to="./make-the-same-thing-every-day">
          Make the Same Thing Every Day
        </Link>
      </Main>
    </>
  );
};

export default BlogHome;

export const Head: React.FC = () => {
  return <title>Blog | Zac Milano</title>;
};
