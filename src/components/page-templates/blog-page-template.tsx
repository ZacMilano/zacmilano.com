import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const FullHeightMain = styled.main`
	min-height: 100%;
	padding-block: 4em;
	padding-inline: 10em;
`;

const Header = styled.h1``;

const Subheader = styled.p`
	margin-bottom: 2em;
	font-weight: normal;
`;

export interface BlogPageTemplateProps {
	dateCreated: string;
	dateModified?: string;
	title: string;
}

// TODO Dynamically define page's title with React Helmet (or similar)
export const BlogPageTemplate: React.FC<
	PropsWithChildren<BlogPageTemplateProps>
> = ({ children, ...props }) => {
	return (
		<FullHeightMain>
			<Header>{props.title}</Header>
			<Subheader>
				<i>Published on {props.dateModified ?? props.dateCreated}</i>
			</Subheader>

			{children}
		</FullHeightMain>
	);
};
