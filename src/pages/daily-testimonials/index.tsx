import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { MainWithCenteredContent } from "../../components";

const InternalLink = styled((props) => <Link {...props} />)`
	font-size: 2em;
	display: block;
`;

const TestimonialsHome: React.FC = () => {
	return (
		<MainWithCenteredContent>
			<InternalLink to="./2022-02-08">Today</InternalLink>
		</MainWithCenteredContent>
	);
};

export default TestimonialsHome;
