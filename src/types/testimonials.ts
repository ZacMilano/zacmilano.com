export interface Reviewer {
	name: string;
	title: string;
	avatar: string;
}

export type StarRating = 1 | 2 | 3 | 4 | 5;

export interface Review {
	body: string;
	starRating?: StarRating;
}

export interface CommonTestimonialProps {
	reviewer: Reviewer;
	review: Review;
	className?: string;
}

export interface Business {
	name: string;
	specialty: string;
}

export interface CommonBlurbColumnProps {
	business: Business;
}
