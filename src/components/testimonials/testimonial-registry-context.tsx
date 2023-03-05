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

type TestimonialDate = string;
type Registry = TestimonialDate[];

interface TestimonialRegistrationContext {
	registry: Registry;
	firstDate: TestimonialDate;
	lastDate: TestimonialDate;
	register: (date: TestimonialDate) => void;
	getPreviousTestimonial: (
		currentDate: TestimonialDate
	) => TestimonialDate | undefined;
	getNextTestimonial: (
		currentDate: TestimonialDate
	) => TestimonialDate | undefined;
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

export function useTestimonialRegistryContext() {
	return useContext(testimonialRegistrationContext);
}

export function useTestimonialRegistry() {
	return useTestimonialRegistryContext().registry;
}

export function TestimonialRegistryProvider({ children }: PropsWithChildren) {
	const [registry, setRegistry] = useState<Registry>([]);
	const [firstDate, setFirstDate] = useState("");
	const [lastDate, setLastDate] = useState("");

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
	`).allSitePage.edges.map((edge: any) => {
		const path = edge.node.path.split("/");
		return path[path.length - 1];
	});

	useEffect(() => {
		setRegistry(pagesData.sort());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const register = useCallback((date: string) => {
		let lowIndex = 0;
		let highIndex = registry.length;

		while (lowIndex < highIndex) {
			const midpoint = Math.floor((lowIndex + highIndex) / 2);
			if (registry[midpoint] < date) {
				lowIndex = midpoint + 1;
			} else {
				highIndex = midpoint;
			}
		}

		setRegistry((prevState) => {
			const frontHalf = prevState.slice(0, lowIndex);
			const backHalf = prevState.slice(lowIndex);
			return [...frontHalf, date, ...backHalf];
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getCurrentTestimonialIndex = useCallback(
		(currentDate: string): number => {
			return registry.findIndex(
				(testimonialDate) => testimonialDate === currentDate
			);
		},
		[registry]
	);

	const getPreviousTestimonial = useCallback(
		(currentDate: string) => {
			const currentIndex = getCurrentTestimonialIndex(currentDate);

			if ([-1, 0].includes(currentIndex)) return undefined;
			return registry[currentIndex - 1];
		},
		[getCurrentTestimonialIndex, registry]
	);

	const getNextTestimonial = useCallback(
		(currentDate: string) => {
			const currentIndex = getCurrentTestimonialIndex(currentDate);

			if ([-1, registry.length - 1].includes(currentIndex)) return undefined;
			return registry[currentIndex + 1];
		},
		[getCurrentTestimonialIndex, registry]
	);

	useEffect(() => {
		setFirstDate(registry[0]);
		setLastDate(registry[registry.length - 1]);
	}, [registry]);

	const context = useMemo(
		() => ({
			registry,
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
		]
	);

	return (
		<testimonialRegistrationContext.Provider value={context}>
			{children}
		</testimonialRegistrationContext.Provider>
	);
}
