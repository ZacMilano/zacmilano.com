import React from "react";

import {
	ConcentricButton,
	ConcentricButtonProps,
} from "$components/component-practice";
import { UiIterationPage } from "$components/page-templates";

function ConcentricButtonPage(): React.ReactElement {
	const buttonProps = {
		onClick: () => alert("Oh no! I've been clicked!"),
		children: <p>Click me &mdash; if you dare!</p>,
	};

	return (
		<UiIterationPage<ConcentricButtonProps>
			date={"2023-03-07, last updated 2023-03-11"}
			title="Concentric Button"
			iteratedComponent={ConcentricButton}
			iteratedComponentProps={buttonProps}
		>
			<p>
				On 3/7/2023, I made the first concentric button. It pulsates! I dare you
				to not click it.
			</p>

			<p>
				I'll iterate on this design going forward, and you'll be able to see the
				different versions over time on this page. FYI, for some reason, V1
				doesn't animate the pseudo-elements when switching into it after the
				page loads.
			</p>

			<p>
				2023-03-11: I'll have to take a pause on building anything out for this
				website because I'll have some software from my job on the computer I'm
				using to develop it, and I don't want there to be any overlap of time.
			</p>
		</UiIterationPage>
	);
}

export default ConcentricButtonPage;

export const Head: React.FC = () => {
	return (
		<>
			<title>Concentric Button | Zac Milano</title>
		</>
	);
};
