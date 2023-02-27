// import { graphql, useStaticQuery } from "gatsby";

export interface TestimonialRegistration {
	businessName: string;
}

export interface TestimonialConfig {
	date: string;
	registration: TestimonialRegistration;
}

export class TestimonialRegistry {
	/**
	 *
	query {
		allSitePage(filter: { path: { regex: "^\/gallery\/daily-testimonials\//i" } }) {
			edges {
				node {
					path
				}
			}
		}
	}
	 */

	public static registry: Record<string, TestimonialRegistration> = {
		"2023-02-08": { businessName: "FaaSt Foods" },
		"2023-02-09": { businessName: "Froggy's Daycare" },
		"2023-02-10": { businessName: "Lorem's Ipsum" },
		"2023-02-11": { businessName: "Lorem's Ipsum" },
		"2023-02-12": { businessName: "Superb Bowls" },
		"2023-02-13": { businessName: "Chunky Dunkies" },
		"2023-02-14": { businessName: "Lorem's Ipsum" },
		"2023-02-15": { businessName: "Lorem's Ipsum" },
		"2023-02-16": { businessName: "Lorem's Ipsum" },
		"2023-02-17": { businessName: "Lorem's Ipsum" },
		"2023-02-18": { businessName: "Lorem's Ipsum" },
		"2023-02-19": { businessName: "Lorem's Ipsum" },
		"2023-02-20": { businessName: "Lorem's Ipsum" },
		"2023-02-21": { businessName: "Lorem's Ipsum" },
		"2023-02-22": { businessName: "EagleEye, LLC" },
		"2023-02-23": { businessName: "Lorem's Ipsum" },
		"2023-02-24": { businessName: "Lorem's Ipsum" },
		"2023-02-25": { businessName: "Lorem's Ipsum" },
		"2023-02-26": { businessName: "EagleEye, LLC" },
	};

	private static sortedDates: string[] = this.sortDates();
	public static sortedRegistry: TestimonialConfig[] = this.sortRegistry();
	private static registrySize: number = this.sortedDates.length;

	private static sortDates(): string[] {
		return Object.keys(this.registry).sort();
	}

	private static sortRegistry(): TestimonialConfig[] {
		return this.sortedDates.map((date) => ({
			date,
			registration: this.registry[date],
		}));
	}

	private static getCurrentTestimonialIndex(currentDate: string): number {
		return this.sortedRegistry.findIndex(
			(testimonial) => testimonial.date === currentDate
		);
	}

	public static getPreviousTestimonial(
		currentDate: string
	): TestimonialConfig | undefined {
		const currentIndex = this.getCurrentTestimonialIndex(currentDate);
		console.log(currentIndex);

		if ([-1, 0].includes(currentIndex)) return undefined;
		return this.sortedRegistry[currentIndex - 1];
	}

	public static getNextTestimonial(
		currentDate: string
	): TestimonialConfig | undefined {
		const currentIndex = this.getCurrentTestimonialIndex(currentDate);
		console.log(currentIndex);

		if ([-1, this.registrySize - 1].includes(currentIndex)) return undefined;
		return this.sortedRegistry[currentIndex + 1];
	}

	public static getFirstDate(): string {
		return this.sortedDates[0];
	}

	public static getLastDate(): string {
		return this.sortedDates[this.sortedDates.length - 1];
	}

	// Not used
	private static register(
		key: string,
		testimonialRegistration: TestimonialRegistration
	) {
		this.registry[key] = testimonialRegistration;
		this.sortedDates = this.sortDates();
	}
}
