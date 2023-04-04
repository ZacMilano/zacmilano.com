import { useState } from "react";

export function useCounter(initialValue: number) {
	const [count, setCount] = useState(initialValue);

	function decrement() {
		setCount((currentCount) => currentCount - 1);
	}

	function increment() {
		setCount((currentCount) => currentCount + 1);
	}

	return { count, decrement, increment };
}
