import React, { PropsWithChildren } from "react";
import { MainWithCenteredContent } from "./main-with-centered-content";

export const TestimonialPage: React.FC<PropsWithChildren> = ({ children }) => {
	return <MainWithCenteredContent>{children}</MainWithCenteredContent>;
};
