import React from "react";
import styled from "styled-components";

import { BlogPageTemplate } from "$components";
import { Link } from "gatsby";

const Subheader = styled.h2`
  margin-top: 2em;
`;

const LimitWidth = styled.section`
  width: min(50em, 100%);

  & * {
    margin-bottom: 1em;
  }
`;

const MakeTheSameThingEveryDayBlogPost: React.FC = () => {
  return (
    <BlogPageTemplate
      dateCreated="2024-01-15"
      title="Queso Freso: Cheesed to Meet You"
    >
      <LimitWidth>
        <Subheader>The sitch</Subheader>

        <p>
          My wife (Sofi) and I are starting a business together, now that her
          immigration process is allowing her to do work in the US. The green
          card process is no joke, let me tell you.
        </p>

        <p>
          We're calling it Queso Fresco. We both love this type of cheese, and
          the domain was available (
          <a href="https://quesofres.co">quesofres.co</a>). As of writing this
          page, no quesofres.co website exists, but it will at some point
          (and/or just redirect to another project.)
        </p>
      </LimitWidth>

      <LimitWidth>
        <Subheader>Side note</Subheader>
        <p>
          Speaking of other projects, I've built a bare-bones code syntax
          highlighting app for JavaScript that I'll probably put up at{" "}
          <a href="https://code-formatter.zacmilano.com">
            code-formatter.zacmilano.com
          </a>
          , or something like that. Not yet live as of this post.
        </p>
      </LimitWidth>

      <LimitWidth>
        <Subheader>What will it be?</Subheader>

        <p>
          Sofi will have a pet-sitting/walking service. I'll handle the
          behind-the-scenes administrative work, and tech required to market &
          run the boring parts.
        </p>
      </LimitWidth>
    </BlogPageTemplate>
  );
};

export default MakeTheSameThingEveryDayBlogPost;

export const Head: React.FC = () => {
  return <title>Make the Same Thing Every Day | Zac Milano</title>;
};
