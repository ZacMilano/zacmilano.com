import React from "react";

import "./src/styles/global.css";
import { TestimonialRegistryProvider } from "./src/components";

export const wrapRootElement = ({ element }) => {
	return <TestimonialRegistryProvider>{element}</TestimonialRegistryProvider>;
};
