import React from "react";

import { CommonBlurbColumnProps } from "$types/testimonials";

export const CommonBlurbColumn: React.FC<CommonBlurbColumnProps> = ({
	...props
}) => {
	return (
		<div>
			<p>
				Today's business is {props.business.name}, specializing in{" "}
				{props.business.specialty}.
			</p>
		</div>
	);
};
