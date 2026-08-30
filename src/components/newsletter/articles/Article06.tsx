import { ezpawnAd } from "$images/index";
import React from "react";

export const Article06: React.FC = () => {
  return (
		<section id="6">
			<h2>A word from our sponsors</h2>

			<img
				src={ezpawnAd}
				alt={
					'Have you recently stolen something? Do you need a venue for your next shooting? Do you want to see some broken DVD players that smell like smoke, and haggle on price despite the "As is" sticker? If you answered yes to any of these questions, come right on down to EZPAWN. We have several convenient locations across Indianapolis for your broke ass to come visit. Bring your step-kids!'
				}
			/>
		</section>
	);
};
