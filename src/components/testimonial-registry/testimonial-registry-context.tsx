import React, {
	PropsWithChildren,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { graphql, useStaticQuery } from "gatsby";

export interface TestimonialRegistration {
	businessName: string;
}

export interface TestimonialConfig {
	date: string;
	registration: TestimonialRegistration;
}

type Registry = Record<string, TestimonialRegistration>;

type SortedRegistry = TestimonialConfig[];

interface TestimonialRegistrationContext {
	registry: SortedRegistry;
	firstDate: string;
	lastDate: string;
	register: (date: string, registration: TestimonialRegistration) => void;
	getPreviousTestimonial: (
		currentDate: string
	) => TestimonialConfig | undefined;
	getNextTestimonial: (currentDate: string) => TestimonialConfig | undefined;
}

const emptyFunction = () => {
	return undefined;
};
const defaultState: TestimonialRegistrationContext = {
	registry: [],
	firstDate: "",
	lastDate: "",
	register: emptyFunction,
	getPreviousTestimonial: emptyFunction,
	getNextTestimonial: emptyFunction,
};

const testimonialRegistrationContext =
	createContext<TestimonialRegistrationContext>(defaultState);

function useTestimonialRegistryContext() {
	console.log("before");
	return useContext(testimonialRegistrationContext);
}

export function useTestimonialRegistry() {
	return useTestimonialRegistryContext().registry;
}

// TODO: convert the Registry to this provider style
export function TestimonialRegistryProvider({ children }: PropsWithChildren) {
	const [allPages, setAllPages] = useState([]);
	const [registry, setRegistry] = useState<SortedRegistry>([]);
	const [unsortedRegistry, setUnsortedRegistry] = useState<Registry>({});
	const [sortedDates, setSortedDates] = useState<string[]>([]);
	const [registrySize, setRegistrySize] = useState(0);
	const [firstDate, setFirstDate] = useState("");
	const [lastDate, setLastDate] = useState("");

	useEffect(() => {
		const dates = Object.keys(unsortedRegistry).sort();
		setSortedDates(dates);
		setRegistrySize(dates.length);
	}, [sortedDates, unsortedRegistry]);

	const register = useCallback(
		(date: string, registry: TestimonialRegistration) => {
			setUnsortedRegistry({ ...unsortedRegistry, [date]: registry });
		},
		[unsortedRegistry]
	);

	const getCurrentTestimonialIndex = useCallback(
		(currentDate: string): number => {
			return registry.findIndex(
				(testimonial) => testimonial.date === currentDate
			);
		},
		[registry]
	);

	const getPreviousTestimonial = useCallback(
		(currentDate: string) => {
			const currentIndex = getCurrentTestimonialIndex(currentDate);
			console.log(currentIndex);

			if ([-1, 0].includes(currentIndex)) return undefined;
			return registry[currentIndex - 1];
		},
		[getCurrentTestimonialIndex, registry]
	);

	const getNextTestimonial = useCallback(
		(currentDate: string) => {
			const currentIndex = getCurrentTestimonialIndex(currentDate);
			console.log(currentIndex);

			if ([-1, registrySize - 1].includes(currentIndex)) return undefined;
			return registry[currentIndex + 1];
		},
		[getCurrentTestimonialIndex, registry, registrySize]
	);

	const pagesData = useStaticQuery(graphql`
		query AllTestimonialPages {
			allSitePage(
				filter: { path: { regex: "^/gallery/daily-testimonials//i" } }
			) {
				edges {
					node {
						path
					}
				}
			}
		}
	`);

	useEffect(() => {
		setRegistry(
			sortedDates.map((date) => ({
				date,
				registration: unsortedRegistry[date],
			}))
		);
		setFirstDate(sortedDates[0]);
		setLastDate(sortedDates[sortedDates.length - 1]);
	}, [sortedDates, unsortedRegistry]);

	const context = useMemo(
		() => ({
			registry,
			registrySize,
			firstDate,
			lastDate,
			register,
			getPreviousTestimonial,
			getNextTestimonial,
		}),
		[
			firstDate,
			getNextTestimonial,
			getPreviousTestimonial,
			lastDate,
			register,
			registry,
			registrySize,
		]
	);

	return (
		<testimonialRegistrationContext.Provider value={context}>
			{children}
		</testimonialRegistrationContext.Provider>
	);
}
