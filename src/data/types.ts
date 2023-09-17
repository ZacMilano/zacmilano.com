export type Alignment =
	| "Lawful Good"
	| "Neutral Good"
	| "Chaotic Good"
	| "Lawful Neutral"
	| "True Neutral"
	| "Chaotic Neutral"
	| "Lawful Evil"
	| "Neutral Evil"
	| "Chaotic Evil";

export interface PetPageData {
	name: string;
	species: string;
	fullName?: string;
	birthday?: string;
	gotchaDay?: string;
	personalityTraits?: string[];
	quirks?: string[];
	mainPhotoSrc?: string;
	alignment?: Alignment;
	family: {
		name: string;
		relation: string;
		link?: string;
	}[];
	occupations?: string[];
	// Could be https links, but for now will be direct src
	photos?: string[];
}
