import React from "react";

type PolicyStance = {
  policy: string;
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
    photoSrc: "",
    xAxisPlacement: -0.6,
    yAxisPlacement: 0.85,
    policyStances: [
      {
        policy: "Catnip",
        stance: 0.45,
        blurb: "Although Lucy is vehemently against legalization for personal use, she does enjoy a good smackerooni of the nip from time to time, and is a self-described Medicinal Catnip patient. Enters a state of psychosis upon interacting with catnip for more than 5 seconds."
      },
      {
        policy: "Nature",
        stance: 0.7,
        blurb: "She likes to go out onto the balcony, and doesn't mind the tent. She does like to try and run real fast to escape my watchful eye when we're out there, but for the most part she's well-behaved on the balcony"
      },
      {
        policy: "2nd Amendment",
        stance: 0.5,
        blurb: "Likes when guns are pointed at Mango. Loves to chase NERF darts; hates fighting back when provoked; sometimes she is the aggressor anyway just out of fear that Mango will start some shit."
      },
      {
        policy: "Change",
        stance: -0.4,
        blurb: "She loved the change when we moved out from living with Allie, but grew to resent the concept of change when Mango and co moved in. That week when she was a solo kitty is referred to colloquially as \"Lucy's Golden Week\"."
      },
      {
        policy: "Immigration",
        stance: 0.35,
        blurb: "Lucy is recently coming out of her shell and enjoying the company of guests more often. This was not the case like 2 years ago."
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
		photoSrc: "",
		xAxisPlacement: 0.9,
		yAxisPlacement: -0.9,
		policyStances: [
			{
				policy: "Catnip",
				stance: 0.9,
				blurb:
					"Mango loves catnip for recreational use. He uses it to stave off his addiction to prescription painkillers like fentanyl and ketamine, which he tried during his surgery after eating a ribbon. He however does not like to share his stash."
			},
      {
        policy: "2nd Amendment",
        stance: 0.9,
        blurb: "Loves chasing NERF darts, has experience with facing down the barrel of a gun and doesn't mind the experience. Also loves attacking anything with or without a pulse. He will fuck you up if he gets the chance."
      },
      {
        policy: "Nature",
        stance: 0.3,
        blurb: "He likes to go outside onto the balcony, but does not like to be contained by the tent. Wants to walk downstairs to explore other people's houses"
      },
      {
        policy: "Change",
        stance: -0.1,
        blurb: "Not a huge fan of change, but rolls with the punches"
      },
      {
        policy: "Immigration",
        stance: 0.45,
        blurb: "Mango has always liked being around people. He knows he's a handsome little dude, and loves attention with a side of pets on his face & ears."
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
    photoSrc: "",
    xAxisPlacement: -0.95,
    yAxisPlacement: 0.15,
    policyStances: [
      {
        policy: "Catnip",
        stance: -0.9,
        blurb: "Olivia does not care for catnip personally. She looks down upon any cat that debases themselves low enough to use such a drug. However, she shows some leniency when Lucy uses it."
      },
      {
        policy: "2nd Amendment",
        stance: -0.2,
        blurb: "Absolutely despises NERF guns. Acts like they could really kill her and everyone else in the room. Even just grabbing one, the plastic sound is too much for her sometimes. However, she will CERTAINLY stand her ground 9 times out of 10, when attacked. She trained in the Manguito School of Martial Arts, so it's only natural."
      },
      {
        policy: "Nature",
        stance: 1.0,
        blurb: "This is what the Roach lives for: outside. Going out onto the balcony, chasing bugs, watching birds, munching on the tomato plant, taking a nap, getting her fur brushed... there's nothing she likes better than being outside."
      },
      {
        policy: "Immigration",
        stance: -0.5,
        blurb: "Not a fan of visitors"
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
    photoSrc: "",
    xAxisPlacement: 0.1,
    yAxisPlacement: 0.3,
    policyStances: [
      {
        policy: "Catnip",
        stance: 0.65,
        blurb: "Archie likes catnip. 'Who could resist?', he says."
      },
      {
        policy: "2nd Amendment",
        stance: 0.6,
        blurb: "Likes to chase NERF darts with Mango, and loves to wrestle. Shows more mercy than Mango while fighting"
      },
      {
        policy: "Nature",
        stance: 0.8,
        blurb: "Loves going outside, is fine with the tent. Loves to chew on the cucumber plant, and loves to bolt between my legs to run outside when I'm going out by myself."
      },
      {
        policy: "Immigration",
        stance: 0.5,
        blurb: "Is becoming a fan of visitors"
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
    photoSrc: "",
    xAxisPlacement: -0.3,
    yAxisPlacement: -1,
    policyStances: [
      {
        policy: "Catnip",
        stance: 0.75,
        blurb: "Very pro-catnip",
      },
      {
        policy: "Immigration",
        stance: 0.7,
        blurb: "Supportive of having guests over"
      },
      {
        policy: "Government handouts",
        stance: 0.7,
        blurb: "Believes in government handouts"
      }
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
    photoSrc: "",
    xAxisPlacement: 0.2,
    yAxisPlacement: 0.9,
    policyStances: [
      {
        policy: "Immigration",
        stance: -0.8,
        blurb: "Is scared of immigrants. Is also scared of guests at home"
      },
      {
        policy: "Change",
        stance: -0.9,
        blurb: "Hates change of any kind. Is secretly medicated"
      },
      {
        policy: "2nd Amendment",
        stance: 0.75,
        blurb: "Believes in stand-your-ground rights by whooping Gwen's ass in fights and by peeing outside the litter box as protest"
      }
    ],
  },
];

export const Article07: React.FC = () => {
  return (
    <section id='7'>
      <h2>Political felinology</h2>
      <p>TODO: write Political felinology</p>
      
      <h3>Outline</h3>
      <ul>
        <li>
          Compass. Hover any cat to show a small bio + link to their full bio below
        </li>
        <li>
          Full bios
        </li>
        <li>
          Policy meters: place each cat/pet on a spectrum of agreement with a statement/policy
        </li>
      </ul>
    </section>
  );
};
