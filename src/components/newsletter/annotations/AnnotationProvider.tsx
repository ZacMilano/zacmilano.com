import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

interface AnnotationState {
	pinned: boolean;
	explicit: boolean;
}

interface AnnotationContextValue {
	registry: Map<string, React.ReactNode>;
	register: (id: string, content: React.ReactNode) => void;
	openAnnotations: Map<string, AnnotationState>;
	open: (id: string) => void;
	close: (id: string) => void;
	pin: (id: string) => void;
	closeAll: () => void;
	closeDescendantsOf: (id: string) => void;
	isOpen: (id: string) => boolean;
	isPinned: (id: string) => boolean;
	hoverEnter: (id: string) => void;
	hoverLeave: (id: string) => void;
	setParent: (childId: string, parentId: string) => void;
	highlightedId: string | null;
}

const AnnotationContext = createContext<AnnotationContextValue | null>(null);

export const useAnnotations = () => {
	const ctx = useContext(AnnotationContext);
	if (!ctx)
		throw new Error("useAnnotations must be used within AnnotationProvider");
	return ctx;
};

export const AnnotationProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const registryRef = useRef(new Map<string, React.ReactNode>());
	const [openAnnotations, setOpenAnnotations] = useState(
		new Map<string, AnnotationState>()
	);
	const [highlightedId, setHighlightedId] = useState<string | null>(null);
	const parentMap = useRef(new Map<string, string>());
	// Per-annotation: count of elements currently hovered (trigger + tooltip = up to 2)
	const hoverCounts = useRef(new Map<string, number>());
	// Per-annotation: pending close timer
	const closeTimers = useRef(new Map<string, ReturnType<typeof setTimeout>>());

	const register = useCallback((id: string, content: React.ReactNode) => {
		if (!registryRef.current.has(id)) {
			registryRef.current.set(id, content);
		}
	}, []);

	const open = useCallback((id: string) => {
		setOpenAnnotations((prev) => {
			const next = new Map(prev);
			if (!next.has(id)) {
				next.set(id, { pinned: false, explicit: false });
			}
			return next;
		});
	}, []);

	const close = useCallback((id: string) => {
		setOpenAnnotations((prev) => {
			const state = prev.get(id);
			if (!state || state.pinned) return prev;
			const next = new Map(prev);
			next.delete(id);
			return next;
		});
	}, []);

	const hasDescendantPinned = (
		ancestorId: string,
		annotations: Map<string, AnnotationState>
	): boolean => {
		for (const [childId, parent] of parentMap.current.entries()) {
			if (parent === ancestorId) {
				const state = annotations.get(childId);
				if (state?.pinned) return true;
				if (hasDescendantPinned(childId, annotations)) return true;
			}
		}
		return false;
	};

	const pin = useCallback((id: string) => {
		setOpenAnnotations((prev) => {
			if (prev.has(id) && prev.get(id)!.pinned) {
				// Unpinning this annotation
				const next = new Map(prev);
				next.delete(id);
				// Unpin ancestors that were only implicitly pinned and have no other pinned descendants
				let current = parentMap.current.get(id);
				const visited = new Set<string>();
				while (current && !visited.has(current)) {
					const state = next.get(current);
					if (state && !state.explicit && !hasDescendantPinned(current, next)) {
						// Demote to unpinned hover state so it stays visible while hovered
						next.set(current, { pinned: false, explicit: false });
					}
					visited.add(current);
					current = parentMap.current.get(current);
				}
				return next;
			}
			const next = new Map(prev);
			next.set(id, { pinned: true, explicit: true });
			// Implicitly pin all ancestors so they stay open
			let current = parentMap.current.get(id);
			const visited = new Set<string>();
			while (current && !visited.has(current)) {
				const existing = next.get(current);
				if (!existing || !existing.explicit) {
					next.set(current, { pinned: true, explicit: existing?.explicit ?? false });
				}
				visited.add(current);
				current = parentMap.current.get(current);
			}
			return next;
		});
	}, []);

	const closeAll = useCallback(() => {
		setOpenAnnotations(new Map());
		hoverCounts.current.clear();
		for (const timer of closeTimers.current.values()) {
			clearTimeout(timer);
		}
		closeTimers.current.clear();
	}, []);

	const setParent = useCallback((childId: string, parentId: string) => {
		parentMap.current.set(childId, parentId);
	}, []);

	const getAncestors = useCallback((id: string): string[] => {
		const ancestors: string[] = [];
		let current = parentMap.current.get(id);
		const visited = new Set<string>();
		while (current && !visited.has(current)) {
			ancestors.push(current);
			visited.add(current);
			current = parentMap.current.get(current);
		}
		return ancestors;
	}, []);

	const closeDescendantsOf = useCallback((id: string) => {
		setOpenAnnotations((prev) => {
			const descendants = new Set<string>();
			const findDescendants = (parentId: string) => {
				for (const [child, parent] of parentMap.current.entries()) {
					if (parent === parentId && !descendants.has(child)) {
						descendants.add(child);
						findDescendants(child);
					}
				}
			};
			findDescendants(id);
			if (descendants.size === 0) return prev;
			const next = new Map(prev);
			for (const desc of descendants) {
				next.delete(desc);
			}
			return next;
		});
	}, []);

	const isOpen = useCallback(
		(id: string) => openAnnotations.has(id),
		[openAnnotations]
	);

	const isPinned = useCallback(
		(id: string) => openAnnotations.get(id)?.pinned ?? false,
		[openAnnotations]
	);

	const scheduleClose = useCallback(
		(id: string) => {
			const existing = closeTimers.current.get(id);
			if (existing) clearTimeout(existing);
			const timer = setTimeout(() => {
				closeTimers.current.delete(id);
				const count = hoverCounts.current.get(id) ?? 0;
				if (count <= 0) {
					close(id);
				}
			}, 200);
			closeTimers.current.set(id, timer);
		},
		[close]
	);

	const cancelClose = useCallback((id: string) => {
		const existing = closeTimers.current.get(id);
		if (existing) {
			clearTimeout(existing);
			closeTimers.current.delete(id);
		}
	}, []);

	const hoverEnter = useCallback(
		(id: string) => {
			const count = (hoverCounts.current.get(id) ?? 0) + 1;
			hoverCounts.current.set(id, count);
			cancelClose(id);
			// Also cancel close on ancestors
			for (const ancestor of getAncestors(id)) {
				const ac = (hoverCounts.current.get(ancestor) ?? 0) + 1;
				hoverCounts.current.set(ancestor, ac);
				cancelClose(ancestor);
			}
			open(id);
		},
		[open, cancelClose, getAncestors]
	);

	const hoverLeave = useCallback(
		(id: string) => {
			const count = Math.max(0, (hoverCounts.current.get(id) ?? 0) - 1);
			hoverCounts.current.set(id, count);
			if (count === 0) {
				scheduleClose(id);
			}
			for (const ancestor of getAncestors(id)) {
				const ac = Math.max(
					0,
					(hoverCounts.current.get(ancestor) ?? 0) - 1
				);
				hoverCounts.current.set(ancestor, ac);
				if (ac === 0) {
					scheduleClose(ancestor);
				}
			}
		},
		[scheduleClose, getAncestors]
	);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (target.closest("[data-annotation-trigger]")) return;
			const tooltipEl = target.closest("[data-annotation-tooltip]");
			if (tooltipEl) {
				const clickedId = tooltipEl.getAttribute("data-annotation-id");
				if (clickedId) {
					closeDescendantsOf(clickedId);
				}
				return;
			}
			closeAll();
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [closeDescendantsOf, closeAll]);

	return (
		<AnnotationContext.Provider
			value={{
				registry: registryRef.current,
				register,
				openAnnotations,
				open,
				close,
				pin,
				closeAll,
				isOpen,
				isPinned,
				hoverEnter,
				hoverLeave,
				setParent,
				closeDescendantsOf,
				highlightedId,
			}}
		>
			{children}
		</AnnotationContext.Provider>
	);
};
