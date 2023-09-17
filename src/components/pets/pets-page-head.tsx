import React, { PropsWithChildren } from "react";

export interface PetsHeadProps {
	includeFontAwesomeScript?: boolean;
	petName: string;
}

// TODO abstract this & testimonial head into configurable page header, with
// sensible defaults. Also, TODO abstract main page layout into something sensible
export const PetsHead: React.FC<PropsWithChildren<PetsHeadProps>> = ({
	children,
	...props
}) => {
	return (
		<>
			<title>{props.petName} | Pets</title>

			{props.includeFontAwesomeScript && (
				<script
					src="https://kit.fontawesome.com/6ab573e32e.js"
					crossOrigin="anonymous"
				/>
			)}
		</>
	);
};
