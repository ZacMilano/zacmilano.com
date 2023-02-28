import React from "react";

import "./src/styles/global.css";
import { TestimonialRegistryProvider } from "./src/components";

export const wrapRootElement = ({ element }) => {
	console.log({ element });
	return <TestimonialRegistryProvider>{element}</TestimonialRegistryProvider>;
};
