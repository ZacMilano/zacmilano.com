import React from "react";
import { StarRating } from "../types/testimonials";

export interface RatingStarsProps {
	starRating: StarRating;
	className?: string;
}

// Out of 5 possible stars, give `props.starRating` many solid stars and
// `5 - props.starRating` many outline-only stars
export const RatingStars: React.FC<RatingStarsProps> = (props) => {
	const { starRating, className } = props;

	return (
		<>
			{Array.from(Array(5)).map((value, index) => {
				const starIcon = "fa-star";
				let style: string;

				if (starRating && index + 1 <= starRating) {
					style = "fa-solid";
				} else {
					style = "fa-regular";
				}

				return (
					<i
						className={`${starIcon} ${style} ${className ?? ""}`}
						key={index}
					/>
				);
			})}
		</>
	);
};
