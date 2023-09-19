import { lucy as mainPhotoSrc } from "$images";

import { PetPageData } from "../types";

export const lucy: PetPageData = {
	name: "Lucy",
	species: "Cat",
	family: [
		{
			name: "Zac",
			relation: "father",
			link: "/",
		},
		{
			name: "Sofi",
			relation: "mother",
		},
		{
			name: "Mango",
			relation: "brother",
		},
		{
			name: "Livvy",
			relation: "sister",
		},
	],
	alignment: "Lawful Neutral",
	birthday: "November 2020?",
	gotchaDay: "May 12th 2022",
	fullName: "Lucille Austero Milano",
	mainPhotoSrc,
	occupations: ["biscuit-maker", "hide and seek world champion"],
	personalityTraits: [
		"skittish",
		"scared",
		"fearful",
		"coward",
		"introverted",
		"antisocial",
		"sweet",
		"elusive",
		"just a cat",
	],
} as const;
