import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export const InternalLink = styled((props) => <Link {...props} />)`
	font-size: 2em;
	display: block;
`;
