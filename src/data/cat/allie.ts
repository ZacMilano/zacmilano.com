import { allie as mainPhotoSrc } from "$images";

import { PetPageData } from "../types";

export const allie: PetPageData = {
	name: "Allie",
	species: "Cat",
	family: [
		{
			name: "Logan",
			relation: "father",
			link: "https://www.imdb.com/name/nm10128417/",
		},
		{
			name: "Bodie",
			relation: "brother, mentee",
		},
	],
	alignment: "Chaotic Neutral",
	birthday: "2018?",
	gotchaDay: "unknown",
	fullName: "Allison Wonderland Jandro Lloyd",
	mainPhotoSrc,
	occupations: ["gambler", "criminal", "conspirator", "mercenary"],
	personalityTraits: [
		"sweet",
		"elusive",
		"manipulative",
		"controlling",
		"ignorant",
		"just a cat",
	],
} as const;
