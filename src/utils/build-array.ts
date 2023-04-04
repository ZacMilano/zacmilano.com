export function buildArray<T>(
	length: number,
	builderCallback: (index: number) => T
) {
	return Array.from(Array(length)).map((_value, index) =>
		builderCallback(index)
	);
}
