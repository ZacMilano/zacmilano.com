import React, { PropsWithChildren } from "react";

export interface TestimonialHeadProps {
	includeFontAwesomeScript?: boolean;
	businessName: string;
}

export const TestimonialHead: React.FC<
	PropsWithChildren<TestimonialHeadProps>
> = ({ children, ...props }) => {
	return (
		<>
			<title>{props.businessName} | Testimonials</title>

			{props.includeFontAwesomeScript && (
				<script
					src="https://kit.fontawesome.com/6ab573e32e.js"
					crossOrigin="anonymous"
				/>
			)}
		</>
	);
};
