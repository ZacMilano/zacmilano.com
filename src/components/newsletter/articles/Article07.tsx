import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import {
  lucy,
  lucy2,
  allie2,
  aggie,
  archie,
  arthur,
  betty,
  birdie,
  bodie,
  buzz,
  gwen,
  holland,
  honey,
  juliette,
  mango,
  mia,
  olivia,
  pip,
  sasha,
  willoughby,
} from "$images";

// useLayoutEffect on the client, useEffect during SSR (avoids the warning).
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * The canonical list of policies. Reference a policy from a pet's
 * `policyStances` by its key, e.g. `policy: "catnip"`. The `description` is
 * shown above that policy's spectrum. Order here is the order spectra render.
 *
 * The spectrum is always blue (liberal) on the left, red (conservative) on the
 * right. For most policies, being "in favor" is the conservative position, so
 * favor sits on the right. Set `inverted: true` when being "in favor" is the
 * liberal position — the "fully in favor" end then moves to the left (blue),
 * and a pet's stance is plotted on the opposite side.
 */
const POLICIES = {
  catnip: {
    name: "Catnip",
    description:
      "Should recreational catnip be freely available, and is partaking a personal failing or just a Tuesday?",
    inverted: true,
  },
  nature: {
    name: "Nature",
    description:
      "How much of life should be spent outdoors — balcony, tent, tomato plant, the great beyond?",
    inverted: true,
  },
  secondAmendment: {
    name: "2nd Amendment",
    description:
      "The right to keep and bear NERF: stand-your-ground instincts and comfort staring down the barrel.",
    inverted: false,
  },
  change: {
    name: "Change",
    description:
      "New furniture, new roommates, a rearranged litter box — embrace it or resist with everything you've got?",
    inverted: true,
  },
  immigration: {
    name: "Immigration",
    description:
      "How welcome are visitors, houseguests, and newly-arrived animals in the home?",
    inverted: true,
  },
  governmentHandouts: {
    name: "Government handouts",
    description:
      "Treats, wet food on demand, and other unearned redistributions from the humans.",
    inverted: true,
  },
  catsRights: {
    name: "Cats' rights",
    description: "Do cats deserve rights?",
    inverted: true,
  },
  dogsRights: {
    name: "Dogs' rights",
    description: "Do dogs deserve rights?",
    inverted: true,
  },
} as const;

type PolicyKey = keyof typeof POLICIES;

type PolicyStance = {
  policy: PolicyKey;
  // Between -1 to 1; -1 = fully against, 1 = fully in favor
  stance: number;
  blurb?: string;
}

type Pet = {
  fullName: string;
  primaryNickname: string;
  nicknames: string[];
  photoSrc: string;
  // Between -1 to 1. Larger value = more conservative
  xAxisPlacement: number;
  // Between -1 to 1. Larger value = more authoritarian
  yAxisPlacement: number;
  // Free-form notes on the pet's political leanings / personality
  otherNotes?: string;
  policyStances: PolicyStance[];
};

const pets: Pet[] = [
  {
    fullName: "Lucille Milano",
    primaryNickname: "Lucy",
    nicknames: [
      "Doobert",
      "Luchi",
      "Luchi Duchi",
      "Luchi Libre",
      "Launchis",
      "Launchis Skedaunchis",
      "Turkey",
      "Porky Turkey (ie fat turkey)",
      "Porky Torky",
    ],
    photoSrc: lucy2,
    xAxisPlacement: -0.6,
    yAxisPlacement: 0.85,
    policyStances: [
      {
        policy: "catnip",
        stance: 0.45,
        blurb: "Although Lucy is vehemently against legalization for personal use, she does enjoy a good smackerooni of the nip from time to time, and is a self-described Medicinal Catnip patient. Enters a state of psychosis upon interacting with catnip for more than 5 seconds."
      },
      {
        policy: "nature",
        stance: 0.7,
        blurb: "She likes to go out onto the balcony, and doesn't mind the tent. She does like to try and run real fast to escape my watchful eye when we're out there, but for the most part she's well-behaved on the balcony"
      },
      {
        policy: "secondAmendment",
        stance: 0.5,
        blurb: "Likes when guns are pointed at Mango. Loves to chase NERF darts; hates fighting back when provoked; sometimes she is the aggressor anyway just out of fear that Mango will start some shit."
      },
      {
        policy: "change",
        stance: -0.4,
        blurb: "She loved the change when we moved out from living with Allie, but grew to resent the concept of change when Mango and co moved in. That week when she was a solo kitty is referred to colloquially as \"Lucy's Golden Week\"."
      },
      {
        policy: "immigration",
        stance: 0.35,
        blurb: "Lucy is recently coming out of her shell and enjoying the company of guests more often. This was not the case like 2 years ago."
      },
      {
        policy: "governmentHandouts",
        stance: 1.0,
        blurb: "Lucy lives for treats. In fact, she demands them. Now."
      },
      {
        policy: "catsRights",
        stance: -0.9,
        blurb: "Lucy is something of a class traitor, in that she believes in rights for herself, and wishes all other cats a quick and painless expulsion from her vicinity & country."
      },
      {
        policy: "dogsRights",
        stance: -0.9,
        blurb: "Lucy would not let a dog see her in the light of day."
      },
    ],
  },
	{
		fullName: "Mango Ignacio Milano",
		primaryNickname: "Mango",
		nicknames: [
			"Manguito",
      "Mango Tango",
      "Manguito Tanguito",
			"Mangote",
			"Manguito Cremoso",
			"Mr. Cremosito",
			"Nacho",
			"Fucker",
		],
		photoSrc: mango,
		xAxisPlacement: 0.9,
		yAxisPlacement: -0.9,
		policyStances: [
			{
				policy: "catnip",
				stance: 0.9,
				blurb:
					"Mango loves catnip for recreational use. He uses it to stave off his addiction to prescription painkillers like fentanyl and ketamine, which he tried during his surgery after eating a ribbon. He however does not like to share his stash."
			},
      {
        policy: "secondAmendment",
        stance: 0.9,
        blurb: "Loves chasing NERF darts, has experience with facing down the barrel of a gun and doesn't mind the experience. Also loves attacking anything with or without a pulse. He will fuck you up if he gets the chance."
      },
      {
        policy: "nature",
        stance: 0.3,
        blurb: "He likes to go outside onto the balcony, but does not like to be contained by the tent. Wants to walk downstairs to explore other people's houses"
      },
      {
        policy: "change",
        stance: -0.1,
        blurb: "Not a huge fan of change, but rolls with the punches"
      },
      {
        policy: "immigration",
        stance: 0.45,
        blurb: "Mango has always liked being around people. He knows he's a handsome little dude, and loves attention with a side of pets on his face & ears."
      },
      {
        policy: "governmentHandouts",
        stance: 0.9,
        blurb: "Mango will try to climb your leg to get those dang treats."
      },
      {
        policy: "catsRights",
        stance: -0.8,
        blurb: "Mango actively suppresses the rights of his fellow cat, for personal gain."
      },
      {
        policy: "dogsRights",
        stance: 0.1,
        blurb: "Mango believes he was raised by wolves"
      },
		],
	},
  {
    fullName: "Olivia Milano",
    primaryNickname: "Roachie",
    nicknames: [
      "The Roach",
      "Roach Bug",
      "The Mink",
      "The Mouse",
      "The Minky Mouse",
      "The Bug",
      "The Buggly Wuggly",
    ],
    photoSrc: olivia,
    xAxisPlacement: -0.95,
    yAxisPlacement: 0.15,
    policyStances: [
      {
        policy: "catnip",
        stance: -0.9,
        blurb: "Olivia does not care for catnip personally. She looks down upon any cat that debases themselves low enough to use such a drug. However, she shows some leniency when Lucy uses it."
      },
      {
        policy: "secondAmendment",
        stance: -0.2,
        blurb: "Absolutely despises NERF guns. Acts like they could really kill her and everyone else in the room. Even just grabbing one, the plastic sound is too much for her sometimes. However, she will CERTAINLY stand her ground 9 times out of 10, when attacked. She trained in the Manguito School of Martial Arts, so it's only natural."
      },
      {
        policy: "nature",
        stance: 1.0,
        blurb: "This is what the Roach lives for: outside. Going out onto the balcony, chasing bugs, watching birds, munching on the tomato plant, taking a nap, getting her fur brushed... there's nothing she likes better than being outside."
      },
      {
        policy: "immigration",
        stance: -0.5,
        blurb: "Not a fan of visitors"
      },
      {
        policy: "governmentHandouts",
        stance: -0.7,
        blurb: "Has hated treats for years, ever since we had to give her medication as a kitten (and followed up the pill with treats), but she has started to eat treats again as of this month (August 2026). Tides are turning for treats with the Roach."
      },
      {
        policy: "catsRights",
        stance: 0.3,
        blurb: "Supports cats' rights, but won't rub it in your face"
      },
      {
        policy: "dogsRights",
        stance: -0.1,
        blurb: "Has experience with one dog. Was not a fan, but didn't hate him"
      },
    ],
  },
  {
    fullName: "Archibald Mortimer Milano",
    primaryNickname: "Archie / Baldy",
    nicknames: [
      "Baldy",
      "ArchieBaldy",
      "Baldy Morty",
      "ArchieBaldy Morty",
      "a Roach",
      "Olivia's stunt double",
    ],
    photoSrc: archie,
    xAxisPlacement: 0.1,
    yAxisPlacement: 0.3,
    policyStances: [
      {
        policy: "catnip",
        stance: 0.65,
        blurb: "Archie likes catnip. 'Who could resist?', he says."
      },
      {
        policy: "secondAmendment",
        stance: 0.6,
        blurb: "Likes to chase NERF darts with Mango, and loves to wrestle. Shows more mercy than Mango while fighting"
      },
      {
        policy: "nature",
        stance: 0.8,
        blurb: "Loves going outside, is fine with the tent. Loves to chew on the cucumber plant, and loves to bolt between my legs to run outside when I'm going out by myself."
      },
      {
        policy: "immigration",
        stance: 0.5,
        blurb: "Is becoming a fan of visitors"
      },
      {
        policy: "governmentHandouts",
        stance: 0.3,
        blurb: "He loves treats, and is very polite to wait his turn in the bread lines. Will happily try to grab a crumb dropped from Mango's mouth."
      },
      {
        policy: "catsRights",
        stance: -0.2,
        blurb: "Really, really trying to support Mango's efforts to rescind his fellow cats' rights. Is not aware that this includes himself"
      },
      {
        policy: "dogsRights",
        stance: 0.0,
        blurb: "Barely knows that dogs exist"
      },
    ],
  },
  {
    fullName: "Guinivere Kleyn",
    primaryNickname: "Gwen",
    nicknames: [
      "Little Kitty",
      "Goblin",
      "Gwennie",
      "Gwenniepoo",
      "Gwenniegoo",
      "Gwen Gwen",
      "Labubu",
      "Stink monster",
    ],
    photoSrc: gwen,
    xAxisPlacement: -0.3,
    yAxisPlacement: -1,
    policyStances: [
      {
        policy: "catnip",
        stance: 0.75,
        blurb: "Very pro-catnip",
      },
      {
        policy: "immigration",
        stance: 0.7,
        blurb: "Supportive of having guests over"
      },
      {
        policy: "governmentHandouts",
        stance: 0.7,
        blurb: "Believes in government handouts"
      },
      {
        policy: "catsRights",
        stance: 0.3,
        blurb: "Believes that cats should have more rights than people, at least when it comes to doors being open"
      },
    ],
  },
  {
    fullName: "Juliet Kleyn",
    primaryNickname: "JuBoo",
    nicknames: [
      "Big kitty",
      "Kitty",
      "Princess (Hannah only)",
      "Fatty McGee (Zach only)",
      "Double wide (Zach only)",
      "Sweetie pea",
    ],
    photoSrc: juliette,
    xAxisPlacement: 0.2,
    yAxisPlacement: 0.9,
    policyStances: [
      {
        policy: "immigration",
        stance: -0.8,
        blurb: "Is scared of immigrants. Is also scared of guests at home"
      },
      {
        policy: "change",
        stance: -0.9,
        blurb: "Hates change of any kind. Is secretly medicated"
      },
      {
        policy: "secondAmendment",
        stance: 0.75,
        blurb: "Believes in stand-your-ground rights by whooping Gwen's ass in fights and by peeing outside the litter box as protest"
      },
      {
        policy: "catsRights",
        stance: 0.2,
        blurb: "Believes that Gwen should not have rights"
      },
    ],
  },
  {
    fullName: "Arthur James Patterson",
    primaryNickname: "Artie",
    nicknames: [
      "Artie James",
      "Artie Fartie",
      "Farts",
      "Fartie James",
      "Arts Farts",
      "Artie McJames",
    ],
    photoSrc: arthur,
    xAxisPlacement: 0.8,
    yAxisPlacement: 0.95,
    otherNotes:
      "Rules by fear and intimidation, small but fierce, ALPHA DOG, anti-cats rights advocate.",
    policyStances: [
      {
        policy: "immigration",
        stance: -0.7,
        blurb: "Is high-key racist, but will warm up to you and tell you you're \"one of the good ones\"."
      },
      {
        policy: "change",
        stance: -0.8,
        blurb: "Not a fan of change that looks like people walking into his house"
      },
      {
        policy: "secondAmendment",
        stance: 0.75,
        blurb: "Believes in stand-your-ground rights, and talking/barking it out"
      },
      {
        policy: "catsRights",
        stance: -0.75,
        blurb: "Rules by fear and intimidation. He is small but a fierce ALPHA DOG, often advocating to repeal & replace cats' rights laws"
      },
      {
        policy: "dogsRights",
        stance: 1.0,
      },
    ],
  },
  {
    fullName: "Willoughby Grey Patterson",
    primaryNickname: "Willie",
    nicknames: [
      "Willie-bee",
      "Willens",
      "Willen-bo Billens",
      "Silly Willie",
      "Silloughby Willoughby",
    ],
    photoSrc: willoughby,
    xAxisPlacement: -0.95,
    yAxisPlacement: -0.5,
    otherNotes:
      "Goes with the flow, loves to play with toys by himself; when Artie and Pip fight he just stares at them and barks — a true libertarian.",
    policyStances: [
      {
        policy: "secondAmendment",
        stance: -0.75,
        blurb: "Knows deep down that anything can be ironed out with words/barks instead of violence. Prefers to stare and bark when others fight"
      },
      {
        policy: "catsRights",
        stance: 0,
        blurb: "Neutral on cats. Interested in the concept of kittens"
      },
      {
        policy: "dogsRights",
        stance: 0.5,
      },
    ],
  },
  {
    fullName: "Pip Matilda Patterson",
    primaryNickname: "Pippy",
    nicknames: ["Pippy wippy", "Whip", "Schmip", "Pippers"],
    photoSrc: pip,
    xAxisPlacement: -0.5,
    yAxisPlacement: 0.5,
    otherNotes:
      "Barks until she gets what she wants, steals bones from the others by barking and barking and barking, anti-cat rights leader.",
    policyStances: [
      {
        policy: "secondAmendment",
        stance: -0.5,
        blurb: "Grateful to be able to steal bones and leftover food from other dogs without repercussions by simply wearing them down with barks"
      },
      {
        policy: "catsRights",
        stance: -1.0,
        blurb: "Staunch anti-cats rights' activist"
      },
      {
        policy: "dogsRights",
        stance: 0.8,
      },
    ],
  },
  {
    fullName: "Honey Grace Patterson",
    primaryNickname: "Honey Buns",
    nicknames: ["Honey Bunny", "Honey Bo Bunny"],
    photoSrc: honey,
    xAxisPlacement: 0,
    yAxisPlacement: 0,
    otherNotes:
      "Goes with the flow so much that she is unable to make a decision, does whatever everyone else is doing, extremely submissive.",
    policyStances: [
      {
        policy: "secondAmendment",
        stance: -0.6,
        blurb: "Barely stands her ground to the point where Pip eats from her mouth. \"Eat from me.\""
      },
      {
        policy: "dogsRights",
        stance: -0.3,
        blurb: "Does NOT stick up for herself",
      },
    ],
  },
  {
    fullName: "Aggie Anne Sutton",
    primaryNickname: "Aggie",
    nicknames: ["Aggie Waggie", "Aggers", "Agnus"],
    photoSrc: aggie,
    xAxisPlacement: -0.75,
    yAxisPlacement: -0.5,
    otherNotes:
      "Mostly sleeps all day and has cancer, occasionally attempts to chase cats, rarely votes.",
    policyStances: [
      {
        policy: "catsRights",
        stance: -0.1,
        blurb: "Occasionally attempts to chase cats"
      },
      {
        policy: "dogsRights",
        stance: 0.3,
      },
    ],
  },
  {
    fullName: "Holland Days Patterson",
    primaryNickname: "Hollie",
    nicknames: ["Hollie Days"],
    photoSrc: holland,
    xAxisPlacement: -0.75,
    yAxisPlacement: 0.85,
    otherNotes:
      "Rules by hissing and swatting, wants to be loved by all and wants all to do as he thinks is best.",
    policyStances: [
      {
        policy: "catsRights",
        stance: 0.65,
        blurb: "Rules by hissing and swatting. As big man of the cat house, the other cats look to him for leadership"
      },
      {
        policy: "dogsRights",
        stance: 0.65,
        blurb: "Holland believes in equality",
      },
    ],
  },
  {
    fullName: "Betty Taylor Patterson",
    primaryNickname: "Betty",
    nicknames: ["Betty Wetty", "Betty Wets", "Bets"],
    photoSrc: betty,
    xAxisPlacement: -0.45,
    yAxisPlacement: -0.95,
    otherNotes:
      "Keeps to herself, doesn't want to get involved with anyone else, anti-dog rights advocate.",
    policyStances: [
      {
        policy: "catsRights",
        stance: 0.35,
        blurb: "\"Leave me alone, it's my right\""
      },
      {
        policy: "dogsRights",
        stance: -0.9,
        blurb: "Betty is a staunch anti-dog-rights advocate",
      },
    ],
  },
  {
    fullName: "Birdie Mae Patterson",
    primaryNickname: "Birdie",
    nicknames: ["Birds", "Birdie Wordie"],
    photoSrc: birdie,
    xAxisPlacement: 0.95,
    yAxisPlacement: -0.95,
    otherNotes:
      "Hates everyone and everything, leader of Dog Lives Don't Matter, leader of Human Lives Don't Matter.",
    policyStances: [
      {
        policy: "catsRights",
        stance: 0.35,
        blurb: "\"Leave me alone, it's my right. Also you don't deserve rights.\" Leader of Human Lives Don't Matter"
      },
      {
        policy: "dogsRights",
        stance: -1.0,
        blurb: "Birdie wishes to see the end of dogs in our time. Leader of Dog Lives Don't Matter",
      },
    ],
  },
  {
    fullName: "Buzz Bumble Patterson",
    primaryNickname: "Buzzy",
    nicknames: [
      "Buzzy Wuzzy",
      "Buzzy Fuzzy",
      "Buzz McFuzz",
      "Buzzy Wuzzy was a bear",
      "Buzzers",
      "Buzzard",
    ],
    photoSrc: buzz,
    xAxisPlacement: -0.95,
    yAxisPlacement: 0.95,
    otherNotes:
      "Bipolar, terrible mood swings, wants everyone to love him but also hates pets and hates you but loves you and respects you and your culture unless you are different than him.",
    policyStances: [
      {
        policy: "catsRights",
        stance: 1.0,
        blurb: "Has committed acts of terrorism (pissin') to defend his post as a member of the cats' rights movement"
      },
    ],
  },
  {
    fullName: "Sasha Syed",
    primaryNickname: "Sashinoo",
    nicknames: [
      "Sushi",
      "Sacha",
      "Pautheena",
      "Churrel (means banshee in Urdu)",
      "Sashinoomeetz",
      "Goobington",
      "Sachini meeni",
      "Sashimi",
      "Pauds",
    ],
    photoSrc: sasha,
    xAxisPlacement: 0.95,
    yAxisPlacement: 1,
    otherNotes:
      "Hyper conservative. Fascist, quick to violence. Sasha believes in a singular tyrannical executive (it's her).",
    policyStances: [],
  },
  {
    fullName: "Mia Syed",
    primaryNickname: "Mia-Mao",
    nicknames: [
      "Cheesemeister",
      "Bhaiya (big brother in Urdu)",
      "Cheejees",
      "Shugomodus",
      "Modus",
      "Chunkymodus",
    ],
    photoSrc: mia,
    xAxisPlacement: -0.35,
    yAxisPlacement: 0.4,
    otherNotes:
      "Leans center-left but gives little thought to politics, so she is heavily influenced by the state of affairs she lives in. Has become susceptible to fascist-style thinking because \"that's just the way it is\" and it will protect her way of life — the way your grandma might like a strongman because the news tells her to.",
    policyStances: [],
  },
  {
    fullName: "Alison Wonderland Jandro Lloyd",
    primaryNickname: "Allie",
    nicknames: ["Mogus"],
    photoSrc: allie2,
    xAxisPlacement: -0.3,
    yAxisPlacement: -0.95,
    otherNotes:
      "A full libertarian: believes in fewer rules, hates woke despite aligning with liberal beliefs. Crimes Allie for a reason.",
    policyStances: [],
  },
  {
    fullName: "Bodie \"Scooter\" Lloyd",
    primaryNickname: "Scooter",
    nicknames: ["Bodes"],
    photoSrc: bodie,
    xAxisPlacement: -0.4,
    yAxisPlacement: 0.15,
    otherNotes:
      "Believes in a lot of causes and rights. Not too deep politically and pretty simple in his beliefs. Loves being a rule follower but doesn't want anyone to feel oppressed. Holds strong Christian values despite not being especially religious or right-leaning with it.",
    policyStances: [],
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const slugify = (name: string): string =>
  name
    .toLowerCase()
    .replace(/["'.]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

type Lean = "liberal" | "conservative" | "centrist";

const leanOf = (pet: Pet): Lean => {
  if (pet.xAxisPlacement < -0.05) return "liberal";
  if (pet.xAxisPlacement > 0.05) return "conservative";
  return "centrist";
};

// Detailing colors: blue for liberals, red for conservatives.
const LIBERAL_BLUE = "hsl(214, 80%, 52%)";
const CONSERVATIVE_RED = "hsl(2, 72%, 52%)";
const CENTRIST_GRAY = "hsl(0, 0%, 45%)";

const colorOf = (pet: Pet): string => {
  const lean = leanOf(pet);
  if (lean === "liberal") return LIBERAL_BLUE;
  if (lean === "conservative") return CONSERVATIVE_RED;
  return CENTRIST_GRAY;
};

const degreeWord = (magnitude: number): string => {
  const m = Math.abs(magnitude);
  if (m < 0.1) return "dead-center";
  if (m < 0.4) return "moderately";
  if (m < 0.75) return "very";
  return "extremely";
};

const describeX = (n: number): string => {
  if (Math.abs(n) < 0.1) return "Centrist (economically/culturally neutral)";
  const side = n < 0 ? "liberal" : "conservative";
  return `${degreeWord(n)} ${side}`.replace(/^./, (c) => c.toUpperCase());
};

const describeY = (n: number): string => {
  if (Math.abs(n) < 0.1) return "Neutral on authority";
  const side = n < 0 ? "libertarian" : "authoritarian";
  return `${degreeWord(n)} ${side}`.replace(/^./, (c) => c.toUpperCase());
};

const photoOf = (pet: Pet): string => pet.photoSrc || lucy;

// -0.45 -> "45%", 0.95 -> "95%"
const pct = (n: number): string => `${Math.round(Math.abs(n) * 100)}%`;

/**
 * Nudge overlapping points apart with a few rounds of pairwise repulsion.
 * Works in whatever unit `points` are expressed in (we use 0–100 %).
 */
type Pt = { x: number; y: number };
const spread = (
  input: Pt[],
  minDist: number,
  bounds: { minX: number; maxX: number; minY: number; maxY: number },
  lockY = false,
  // How hard each point is pulled back toward its true position every
  // iteration (0 = free to drift, ~0.2 = stays close). Keeps a crowded
  // cluster centred on its real value instead of cascading sideways.
  anchorPull = 0,
  iterations = 120
): Pt[] => {
  const origin = input.map((p) => ({ ...p }));
  const pts = input.map((p) => ({ ...p }));
  for (let it = 0; it < iterations; it++) {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i];
        const b = pts[j];
        let dx = b.x - a.x;
        let dy = lockY ? 0 : b.y - a.y;
        let dist = Math.hypot(dx, dy);
        if (dist === 0) {
          dx = Math.random() - 0.5;
          dy = lockY ? 0 : Math.random() - 0.5;
          dist = Math.hypot(dx, dy) || 1;
        }
        if (dist < minDist) {
          const push = (minDist - dist) / 2;
          const ux = dx / dist;
          const uy = dy / dist;
          a.x -= ux * push;
          a.y -= uy * push;
          b.x += ux * push;
          b.y += uy * push;
        }
      }
    }
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (anchorPull > 0) {
        p.x += (origin[i].x - p.x) * anchorPull;
        if (!lockY) p.y += (origin[i].y - p.y) * anchorPull;
      }
      p.x = Math.min(bounds.maxX, Math.max(bounds.minX, p.x));
      if (!lockY) p.y = Math.min(bounds.maxY, Math.max(bounds.minY, p.y));
    }
  }
  return pts;
};

/* ------------------------------------------------------------------ */
/* Styled bits                                                         */
/* ------------------------------------------------------------------ */

const AVATAR = 46; // px
const SMALL_AVATAR = 26; // px — "no stated position" pets

// Padding band reserved inside the frame for axis labels + avatar overhang,
// so nothing ever spills past the frame edge (the page clips `section`).
const COMPASS_INSET = "clamp(28px, 8%, 36px)";

const CompassFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 1 / 1;
  margin: 2.5em auto 3em;
  border: 1px solid hsl(0, 0%, 80%);
  background:
    linear-gradient(hsl(214, 80%, 96%), hsl(214, 80%, 96%)) top left / 50% 50% no-repeat,
    linear-gradient(hsl(2, 72%, 96%), hsl(2, 72%, 96%)) top right / 50% 50% no-repeat,
    linear-gradient(hsl(2, 72%, 97%), hsl(2, 72%, 97%)) bottom right / 50% 50% no-repeat,
    linear-gradient(hsl(214, 80%, 97%), hsl(214, 80%, 97%)) bottom left / 50% 50% no-repeat;
  overflow: hidden;
`;

// The area avatars are actually plotted in — inset from the frame edge.
const CompassPlot = styled.div`
  position: absolute;
  inset: ${COMPASS_INSET};
`;

const Crosshair = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: hsl(0, 0%, 65%);
  }
  &::before {
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
  }
  &::after {
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
  }
`;

const AxisLabel = styled.span<{ $pos: "top" | "bottom" | "left" | "right" }>`
  position: absolute;
  font-size: 0.62rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: hsl(0, 0%, 40%);
  background: hsl(0, 0%, 100%, 0.72);
  padding: 1px 5px;
  border-radius: 3px;
  pointer-events: none;
  z-index: 2;
  ${(p) =>
    p.$pos === "top"
      ? "top: 5px; left: 50%; transform: translateX(-50%);"
      : p.$pos === "bottom"
      ? "bottom: 5px; left: 50%; transform: translateX(-50%);"
      : p.$pos === "left"
      ? "left: 5px; top: 50%; transform: translateY(-50%) rotate(180deg); writing-mode: vertical-rl;"
      : "right: 5px; top: 50%; transform: translateY(-50%); writing-mode: vertical-rl;"}
`;

const Dot = styled.a<{ $size: number }>`
  position: absolute;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  margin: ${(p) => -p.$size / 2}px 0 0 ${(p) => -p.$size / 2}px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid currentColor;
  box-shadow: 0 1px 4px hsl(0, 0%, 0%, 0.25);
  cursor: pointer;
  display: block;
  transition: transform 120ms ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover,
  &:focus-visible {
    transform: scale(1.18);
    z-index: 30;
  }

  &.no-position {
    border-style: dashed;
    opacity: 0.85;
  }

  @media (max-width: 560px) {
    &.compass-dot {
      width: 38px;
      height: 38px;
      margin: -19px 0 0 -19px;
    }
  }
`;

// Lift a hovered avatar above its neighbours.
const reveal = `
  &:hover,
  &:focus-within {
    z-index: 40;
  }
`;

const DotWrap = styled.div`
  position: absolute;
  z-index: 5;
  ${reveal}
`;

const SpectrumRow = styled.div<{ $accent: string }>`
  margin: 2.5em 0 3em;

  h4 {
    margin: 0 0 0.25em;
  }
  .lede {
    margin: 0 0 1.5em;
    color: hsl(0, 0%, 40%);
    font-size: 0.9rem;
  }
`;

const NoPositionShelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
  align-items: center;
  padding: 10px 2px 0;
  margin-top: 8px;
  border-top: 1px dashed hsl(0, 0%, 75%);

  .shelf-label {
    width: 100%;
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: hsl(0, 0%, 55%);
    margin-bottom: 2px;
  }
`;

const NoPositionWrap = styled.div`
  position: relative;
  width: ${SMALL_AVATAR}px;
  height: ${SMALL_AVATAR}px;
  ${reveal}
`;

const SpectrumLine = styled.div<{ $accent: string }>`
  position: relative;
  height: 4px;
  /* horizontal inset keeps end avatars off the (clipped) section edge;
     vertical room for the ~23px of avatar above / below the line */
  margin: ${AVATAR / 2 + 16}px ${AVATAR / 2 + 6}px ${AVATAR / 2 + 30}px;
  background: linear-gradient(
    to right,
    ${LIBERAL_BLUE},
    hsl(0, 0%, 85%) 50%,
    ${CONSERVATIVE_RED}
  );
  border-radius: 2px;

  .tick {
    position: absolute;
    top: -6px;
    width: 1px;
    height: 16px;
    background: hsl(0, 0%, 65%);
  }
  .tick.zero {
    background: hsl(0, 0%, 45%);
  }
  .end-label {
    position: absolute;
    top: ${AVATAR / 2 + 12}px;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: hsl(0, 0%, 45%);
    white-space: nowrap;
  }
  .end-label .short {
    display: none;
  }

  @media (max-width: 560px) {
    .end-label .long {
      display: none;
    }
    .end-label .short {
      display: inline;
    }
  }
`;

// Avatar anchor on the spectrum line. Zero-size; the Dot inside centres on it.
const OnLineItem = styled.div`
  position: absolute;
  top: 50%;
  z-index: 3;

  &:hover,
  &:focus-within {
    z-index: 40;
  }
`;

/* ------------------------------------------------------------------ */
/* Floating card — rendered in a portal on <body> so it can spill out */
/* of the (overflow-clipped) article column, clamped to the viewport. */
/* ------------------------------------------------------------------ */

const FLOAT_W = 250;

const FloatingCardBox = styled.div<{ $accent: string }>`
  position: fixed;
  width: min(${FLOAT_W}px, calc(100vw - 16px));
  background: hsl(0, 0%, 100%);
  border: 1px solid hsl(0, 0%, 82%);
  border-top: 3px solid ${(p) => p.$accent};
  border-radius: 6px;
  padding: 0.7em 0.85em 0.8em;
  box-shadow: 0 6px 24px hsl(0, 0%, 0%, 0.22);
  font-size: 0.85rem;
  line-height: 1.4;
  z-index: 1000;

  strong {
    color: ${(p) => p.$accent};
  }
  p {
    margin: 0.35em 0 0;
  }
  a {
    display: inline-block;
    margin-top: 0.5em;
    font-size: 0.8rem;
  }
`;

const FloatingCard: React.FC<{
  anchorEl: HTMLElement | null;
  accent: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
}> = ({ anchorEl, accent, onMouseEnter, onMouseLeave, children }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  useIsoLayoutEffect(() => {
    if (!anchorEl) return;
    const place = () => {
      const a = anchorEl.getBoundingClientRect();
      const box = boxRef.current;
      const w = box?.offsetWidth ?? FLOAT_W;
      const h = box?.offsetHeight ?? 0;
      const gap = 14;
      const cx = a.left + a.width / 2;
      const left = Math.max(
        8,
        Math.min(cx - w / 2, window.innerWidth - w - 8)
      );
      const top =
        a.top - gap - h >= 8 ? a.top - gap - h : a.bottom + gap;
      setPos({ left, top });
    };
    // Re-place on the next frame too, once the box has its real height.
    place();
    const raf = requestAnimationFrame(place);
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
    };
  }, [anchorEl]);

  if (!anchorEl || typeof document === "undefined") return null;

  return createPortal(
    <FloatingCardBox
      ref={boxRef}
      $accent={accent}
      style={{
        left: pos?.left ?? -9999,
        top: pos?.top ?? -9999,
        visibility: pos ? "visible" : "hidden",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </FloatingCardBox>,
    document.body
  );
};

const BioCard = styled.div<{ $accent: string }>`
  display: flex;
  gap: 1.1em;
  border-left: 10px solid ${(p) => p.$accent};
  padding: 0.55em 0 0.7em 1.15em;
  margin: 1.75em 0;
  scroll-margin-top: 1.5em;

  .mug {
    flex: 0 0 auto;
    width: 104px;
    height: 104px;
    object-fit: cover;
    border-radius: 3px;
    border: 1px solid hsl(0, 0%, 80%);
  }
  .body {
    min-width: 0;
  }
  h4 {
    margin: 0 0 0.15em;
  }
  .primary {
    color: ${(p) => p.$accent};
    font-weight: 600;
  }
  dl {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 0.15em 0.9em;
    margin: 0.6em 0 0;
    font-size: 0.9rem;
  }
  dt {
    color: hsl(0, 0%, 45%);
  }
  dd {
    margin: 0;
    overflow-wrap: anywhere;
  }

  @media (max-width: 560px) {
    gap: 0.85em;
    border-left-width: 6px;
    padding-left: 0.8em;

    .mug {
      width: 68px;
      height: 68px;
    }
    dl {
      grid-template-columns: 1fr;
      gap: 0;
    }
    dt {
      margin-top: 0.5em;
      font-size: 0.82rem;
    }
  }

  @media (max-width: 380px) {
    flex-direction: column;
    gap: 0.6em;

    .mug {
      width: 88px;
      height: 88px;
    }
  }
`;

/* ------------------------------------------------------------------ */
/* Sub-components                                                      */
/* ------------------------------------------------------------------ */

const Compass: React.FC = () => {
  const raw: Pt[] = pets.map((p) => ({
    x: ((p.xAxisPlacement + 1) / 2) * 100,
    y: ((1 - p.yAxisPlacement) / 2) * 100,
  }));
  const placed = useMemo(
    () =>
      spread(raw, (AVATAR / 440) * 100 + 2, {
        minX: 2,
        maxX: 98,
        minY: 2,
        maxY: 98,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [hovered, setHovered] = useState<{ el: HTMLElement; pet: Pet } | null>(
    null
  );
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const open = (el: HTMLElement, pet: Pet) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHovered({ el, pet });
  };
  const close = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setHovered(null), 90);
  };

  return (
    <CompassFrame>
      <Crosshair />
      <AxisLabel $pos='top'>Authoritarian</AxisLabel>
      <AxisLabel $pos='bottom'>Libertarian</AxisLabel>
      <AxisLabel $pos='left'>Liberal</AxisLabel>
      <AxisLabel $pos='right'>Conservative</AxisLabel>

      <CompassPlot>
        {pets.map((pet, i) => (
          <DotWrap
            key={pet.fullName}
            style={{ left: `${placed[i].x}%`, top: `${placed[i].y}%` }}
          >
            <Dot
              className='compass-dot'
              $size={AVATAR}
              href={`#bio-${slugify(pet.fullName)}`}
              style={{ color: colorOf(pet) }}
              aria-label={pet.primaryNickname}
              onMouseEnter={(e) => open(e.currentTarget, pet)}
              onMouseLeave={close}
              onFocus={(e) => open(e.currentTarget, pet)}
              onBlur={close}
            >
              <img src={photoOf(pet)} alt={pet.primaryNickname} />
            </Dot>
          </DotWrap>
        ))}
      </CompassPlot>

      <FloatingCard
        anchorEl={hovered?.el ?? null}
        accent={hovered ? colorOf(hovered.pet) : CENTRIST_GRAY}
        onMouseEnter={() => {
          if (closeTimer.current) clearTimeout(closeTimer.current);
        }}
        onMouseLeave={close}
      >
        {hovered && (
          <>
            <strong>{hovered.pet.primaryNickname}</strong>
            <div style={{ fontSize: "0.78rem", color: "hsl(0,0%,45%)" }}>
              {hovered.pet.fullName}
            </div>
            {hovered.pet.otherNotes && <p>{hovered.pet.otherNotes}</p>}
            <a href={`#bio-${slugify(hovered.pet.fullName)}`}>
              Read full bio ↓
            </a>
          </>
        )}
      </FloatingCard>
    </CompassFrame>
  );
};

const Bios: React.FC = () => (
  <div>
    {pets.map((pet) => (
      <BioCard
        key={pet.fullName}
        id={`bio-${slugify(pet.fullName)}`}
        $accent={colorOf(pet)}
      >
        <img className='mug' src={photoOf(pet)} alt={pet.primaryNickname} />
        <div className='body'>
          <h4>{pet.fullName}</h4>
          <div className='primary'>“{pet.primaryNickname}”</div>
          <dl>
            <dt>Also known as</dt>
            <dd>{pet.nicknames.join(", ") || "—"}</dd>
            <dt>Liberal ↔ conservative</dt>
            <dd>
              {describeX(pet.xAxisPlacement)}{" "}
              <span style={{ color: "hsl(0,0%,55%)" }}>
                ({pct(pet.xAxisPlacement)})
              </span>
            </dd>
            <dt>Libertarian ↔ authoritarian</dt>
            <dd>
              {describeY(pet.yAxisPlacement)}{" "}
              <span style={{ color: "hsl(0,0%,55%)" }}>
                ({pct(pet.yAxisPlacement)})
              </span>
            </dd>
            {pet.otherNotes && (
              <>
                <dt>Notes</dt>
                <dd>{pet.otherNotes}</dd>
              </>
            )}
          </dl>
        </div>
      </BioCard>
    ))}
  </div>
);

type Hovered = { el: HTMLElement; pet: Pet; stance?: PolicyStance };

const PolicySpectrum: React.FC<{ policy: PolicyKey }> = ({ policy }) => {
  const { name, description, inverted } = POLICIES[policy];

  // stance -1..1 -> 0..100 across the line. Normally +1 (in favor) sits on the
  // right; for inverted policies it sits on the left.
  const toX = (stance: number) =>
    inverted ? ((1 - stance) / 2) * 100 : ((stance + 1) / 2) * 100;

  const withStance = pets
    .map((pet) => ({
      pet,
      stance: pet.policyStances.find((s) => s.policy === policy),
    }))
    .filter((e): e is { pet: Pet; stance: PolicyStance } => Boolean(e.stance));

  const without = pets.filter(
    (pet) => !pet.policyStances.some((s) => s.policy === policy)
  );

  // Spread the on-line avatars horizontally so photos don't stack.
  const rawX: Pt[] = withStance.map(({ stance }) => ({
    x: toX(stance.stance),
    y: 0,
  }));
  const placedX = spread(
    rawX,
    (AVATAR / 640) * 100 * 0.8,
    { minX: 3, maxX: 97, minY: 0, maxY: 0 },
    true,
    0.18
  );

  const accent =
    withStance.length > 0 ? colorOf(withStance[0].pet) : CENTRIST_GRAY;

  const [hovered, setHovered] = useState<Hovered | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const open = (el: HTMLElement, pet: Pet, stance?: PolicyStance) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHovered({ el, pet, stance });
  };
  const close = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setHovered(null), 90);
  };

  return (
    <SpectrumRow $accent={accent}>
      <h4>{name}</h4>
      <p className='lede'>{description}</p>

      <SpectrumLine $accent={accent}>
        <div className='tick' style={{ left: "0%" }} />
        <div className='tick zero' style={{ left: "50%" }} />
        <div className='tick' style={{ left: "100%" }} />
        <span className='end-label' style={{ left: 0 }}>
          <span className='long'>
            {inverted ? "Fully in favor" : "Fully against"}
          </span>
          <span className='short'>{inverted ? "For" : "Against"}</span>
        </span>
        <span
          className='end-label'
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          Neutral
        </span>
        <span
          className='end-label'
          style={{ right: 0, textAlign: "right" }}
        >
          <span className='long'>
            {inverted ? "Fully against" : "Fully in favor"}
          </span>
          <span className='short'>{inverted ? "Against" : "For"}</span>
        </span>

        {withStance.map(({ pet, stance }, i) => (
          <OnLineItem key={pet.fullName} style={{ left: `${placedX[i].x}%` }}>
            <Dot
              className='dot'
              $size={AVATAR}
              href={`#bio-${slugify(pet.fullName)}`}
              style={{ color: colorOf(pet) }}
              aria-label={`${pet.primaryNickname}: ${pct(stance.stance)} ${
                stance.stance >= 0 ? "in favor" : "against"
              }`}
              onMouseEnter={(e) => open(e.currentTarget, pet, stance)}
              onMouseLeave={close}
              onFocus={(e) => open(e.currentTarget, pet, stance)}
              onBlur={close}
            >
              <img src={photoOf(pet)} alt={pet.primaryNickname} />
            </Dot>
          </OnLineItem>
        ))}
      </SpectrumLine>

      {without.length > 0 && (
        <NoPositionShelf>
          <span className='shelf-label'>No stated position</span>
          {without.map((pet) => (
            <NoPositionWrap key={pet.fullName}>
              <Dot
                as='a'
                className='no-position'
                $size={SMALL_AVATAR}
                href={`#bio-${slugify(pet.fullName)}`}
                style={{ color: colorOf(pet), position: "static", margin: 0 }}
                aria-label={pet.primaryNickname}
                onMouseEnter={(e) => open(e.currentTarget, pet)}
                onMouseLeave={close}
                onFocus={(e) => open(e.currentTarget, pet)}
                onBlur={close}
              >
                <img src={photoOf(pet)} alt={pet.primaryNickname} />
              </Dot>
            </NoPositionWrap>
          ))}
        </NoPositionShelf>
      )}

      <FloatingCard
        anchorEl={hovered?.el ?? null}
        accent={hovered ? colorOf(hovered.pet) : accent}
        onMouseEnter={() => {
          if (closeTimer.current) clearTimeout(closeTimer.current);
        }}
        onMouseLeave={close}
      >
        {hovered && (
          <>
            <strong>{hovered.pet.primaryNickname}</strong>{" "}
            <span style={{ color: "hsl(0,0%,45%)" }}>
              {hovered.stance
                ? `${pct(hovered.stance.stance)} ${
                    hovered.stance.stance >= 0 ? "in favor of" : "against"
                  } ${name}`
                : `No stated position on ${name}`}
            </span>
            <div style={{ fontSize: "0.78rem", color: "hsl(0,0%,45%)" }}>
              {hovered.pet.fullName}
            </div>
            {(hovered.stance?.blurb ||
              (!hovered.stance && hovered.pet.otherNotes)) && (
              <p>{hovered.stance?.blurb ?? hovered.pet.otherNotes}</p>
            )}
            <a href={`#bio-${slugify(hovered.pet.fullName)}`}>
              Read full bio ↑
            </a>
          </>
        )}
      </FloatingCard>
    </SpectrumRow>
  );
};

export const Article07: React.FC = () => {
  const policies = useMemo(() => {
    const used = new Set<PolicyKey>();
    for (const pet of pets) {
      for (const s of pet.policyStances) used.add(s.policy);
    }
    return (Object.keys(POLICIES) as PolicyKey[]).filter((k) => used.has(k));
  }, []);

  return (
    <section id='7'>
      <h2>Political ethology</h2>
      
      <p>Obviously, our pets are involved in politics, all to varying degrees. Let's take a look at the data.</p>

      <h3>The Bois Polls Pets Political Compass</h3>

      <Compass />

      <h3>About the candidates</h3>
      <Bios />

      <h3>Policy alignment</h3>
      <p>
        Where each pet lands on the issues of the day. Faces below the dotted
        line have no stated position on that policy.
      </p>
      {policies.map((policy) => (
        <PolicySpectrum key={policy} policy={policy} />
      ))}
    </section>
  );
};
