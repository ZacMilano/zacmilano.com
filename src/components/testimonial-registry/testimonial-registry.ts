import {
	TestimonialConfig,
	TestimonialRegistration,
} from "./testimonial-registry-context";

export class TestimonialRegistry {
	public constructor() {}

	public registry: Record<string, TestimonialRegistration> = {};

	private sortedDates: string[] = this.sortDates();
	public sortedRegistry: TestimonialConfig[] = this.sortRegistry();
	private registrySize: number = this.sortedDates.length;

	private sortDates(): string[] {
		return Object.keys(this.registry).sort();
	}

	private sortRegistry(): TestimonialConfig[] {
		return this.sortedDates.map((date) => ({
			date,
			registration: this.registry[date],
		}));
	}

	private getCurrentTestimonialIndex(currentDate: string): number {
		return this.sortedRegistry.findIndex(
			(testimonial) => testimonial.date === currentDate
		);
	}

	public getPreviousTestimonial(
		currentDate: string
	): TestimonialConfig | undefined {
		const currentIndex = this.getCurrentTestimonialIndex(currentDate);
		console.log(currentIndex);

		if ([-1, 0].includes(currentIndex)) return undefined;
		return this.sortedRegistry[currentIndex - 1];
	}

	public getNextTestimonial(
		currentDate: string
	): TestimonialConfig | undefined {
		const currentIndex = this.getCurrentTestimonialIndex(currentDate);
		console.log(currentIndex);

		if ([-1, this.registrySize - 1].includes(currentIndex)) return undefined;
		return this.sortedRegistry[currentIndex + 1];
	}

	public getFirstDate(): string {
		return this.sortedDates[0];
	}

	public getLastDate(): string {
		return this.sortedDates[this.sortedDates.length - 1];
	}

	public register(
		key: string,
		testimonialRegistration: TestimonialRegistration
	) {
		this.registry[key] = testimonialRegistration;
		this.sortedDates = this.sortDates();
		this.sortedRegistry = this.sortRegistry();
	}
}
