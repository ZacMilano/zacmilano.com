export interface Reviewer {
	name: string;
	title: string;
	avatar: string;
}

export interface Review {
	body: string;
	date: string;
	starRating?: 1 | 2 | 3 | 4 | 5;
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

export interface BlurbColumnProps {
	business: Business;
}
