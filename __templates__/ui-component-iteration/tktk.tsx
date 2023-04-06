import React, { useMemo } from "react";
import styled from "styled-components";

import { TkTk, TkTkProps } from "$components/component-practice";
import { UiIterationPage } from "$components/page-templates";

function TkTkPage(): React.ReactElement {
	const props: TkTkProps = useMemo(() => ({}), []);

	return (
		<UiIterationPage<TkTkProps>
			date={"tk-date-tk"}
			title="Tk title Tk"
			iteratedComponent={TkTk}
			iteratedComponentProps={TkTkProps}
		>
			<p>

			</p>
		</UiIterationPage>
	);
}

export default TkTkPage;

export const Head: React.FC = () => {
	return (
		<>
			<title>Tk title Tk | Zac Milano</title>
		</>
	);
};
