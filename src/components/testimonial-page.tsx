import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const FullHeightMain = styled.main`
	height: 100%;
	padding: 4em;
`;

const Header = styled.h1`
	margin-bottom: 2em;
`;

export interface TestimonialPageProps {
	date: string;
}

export const TestimonialPage: React.FC<
	PropsWithChildren<TestimonialPageProps>
> = ({ date, children }) => {
	return (
		<FullHeightMain>
			<Header>Daily testimonial component for {date}</Header>

			{children}
		</FullHeightMain>
	);
};
