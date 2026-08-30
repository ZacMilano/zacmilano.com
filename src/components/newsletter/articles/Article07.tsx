import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Annotated } from "../annotations";
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
  dawg,
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
  manguito,
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
      "Where do you stand on catnip? Decriminalize it, or ban it?",
    inverted: true,
  },
  nature: {
    name: "Nature",
    description:
      "What do you think of the outdoors?",
    inverted: true,
  },
  secondAmendment: {
    name: "2nd Amendment",
    description:
      "Do you support decisions to keep and bear arms?",
    inverted: false,
  },
  change: {
    name: "Change",
    description:
      "What do you think of change? Around the house, new additions to the family, whatever.",
    inverted: true,
  },
  immigration: {
    name: "Immigration",
    description:
      "How welcome are visitors, for you?",
    inverted: true,
  },
  governmentHandouts: {
    name: "Government handouts",
    description:
      "Should treats, wet food on demand, and other handouts from the government (humans) be distributed? In what way?",
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

// Any text field that may be a plain string OR JSX carrying inline
// <Annotated> markers.
type Text = React.ReactNode;

type PolicyStance = {
  policy: PolicyKey;
  // Between -1 to 1; -1 = fully against, 1 = fully in favor
  stance: number;
  blurb?: Text;
}

type Pet = {
  // Stable plain-text id — used for React keys and the #bio-… anchor.
  slug: string;
  fullName: Text;
  primaryNickname: Text;
  nicknames: Text[];
  photoSrc: string;
  // Between -1 to 1. Larger value = more conservative
  xAxisPlacement: number;
  // Between -1 to 1. Larger value = more authoritarian
  yAxisPlacement: number;
  // Free-form notes on the pet's political leanings / personality
  otherNotes?: Text;
  policyStances: PolicyStance[];
  // Only appears on the compass — no bio, no policy spectra.
  compassOnly?: boolean;
};

// Plain-text projection of a Text field (for alt / aria-label), with a
// fallback for when the field is annotated JSX rather than a bare string.
const plain = (v: Text, fallback: string): string =>
  typeof v === "string" ? v : fallback;

// Responsive 16:9 YouTube embed for use inside annotation tooltips. Sizes to
// ~480px on desktop (the tooltip grows to fit), but stays a fraction of the
// viewport on small screens so the tooltip never blows past the edge.
const YouTubeEmbed: React.FC<{ src: string; title?: string }> = ({
  src,
  title = "YouTube video",
}) => (
  <span
    style={{
      display: "block",
      position: "relative",
      width: "min(480px, 68vw)",
      aspectRatio: "16 / 9",
    }}
  >
    <iframe
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
      }}
      src={src}
      title={title}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerPolicy='strict-origin-when-cross-origin'
      allowFullScreen
    />
  </span>
);

const pets: Pet[] = [
	{
		slug: "lucille-milano",
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
		otherNotes: (
			<>
				Lucy is the sweetest hermit you'll ever meet. She is from the streets:
				she flinches at the slightest movement in her direction, she steals
				food, she makes eye contact <em>all the time</em>, and she needs her
				personal space from other cats. Not people though; she loves to snuggle.
			</>
		),
		policyStances: [
			{
				policy: "catnip",
				stance: 0.45,
				blurb:
					"Although Lucy is vehemently against legalization for personal use, she does enjoy a good smackerooni of the nip from time to time, and is a self-described Medicinal Catnip patient. Enters a state of psychosis upon interacting with catnip for more than 5 seconds.",
			},
			{
				policy: "nature",
				stance: 0.7,
				blurb:
					"She likes to go out onto the balcony, and doesn't mind the tent. She does like to try and run real fast to escape my watchful eye when we're out there, but for the most part she's well-behaved on the balcony",
			},
			{
				policy: "secondAmendment",
				stance: 0.5,
				blurb:
					"Likes when guns are pointed at Mango. Loves to chase NERF darts; hates fighting back when provoked; sometimes she is the aggressor anyway just out of fear that Mango will start some shit.",
			},
			{
				policy: "change",
				stance: 0.5,
				blurb: (
					<>
						<p>
							She loved the change of losing Allie as a roommate, but grew to
							resent the concept of change when Mango and Olivia moved in. That
							time when she was a solo kitty, is referred to colloquially as
							"Lucy's Golden Week". Archie has been mostly accepted by Lucy,
							much more quickly than for Olivia or Mango. Proud of her!
						</p>
						<p>
							She insists that wet food be delivered on-time, four times a day.
							We do it twice a day. Her definition of "on-time", itself, does
							change, but Lucy would insist that she needs the regularity of{" "}
							<Annotated
								id="mud"
								content={<>Wet cat food, from a can. We give 'em a pâté</>}
							>
								mud
							</Annotated>{" "}
							at the same time every day to treat her{" "}
							<Annotated
								id="nms"
								content={
									<>
										No mud syndrome, i.e. a medical condition which manifests as
										a lack of wet food in{" "}
										<Annotated
											id="her-bowls"
											content={<>She insists that all 4 bowls are hers</>}
										>
											her bowls
										</Annotated>
									</>
								}
							>
								NMS
							</Annotated>
							. There is no cure, only treatment, as she reminds us, at least 4
							times a day.
						</p>
					</>
				),
			},
			{
				policy: "immigration",
				stance: 0.35,
				blurb:
					"Lucy is recently coming out of her shell and enjoying the company of guests more often. This was not the case like 2 years ago.",
			},
			{
				policy: "governmentHandouts",
				stance: 1.0,
				blurb: "Lucy lives for treats. In fact, she demands them. Now.",
			},
			{
				policy: "catsRights",
				stance: -0.9,
				blurb:
					'Lucy is something of a class traitor, in that she believes in rights for herself, and wishes almost all other cats a swift expulsion from her immediate vicinity, neighborhood, and country, saying that "boy cats ought to be shipped off to GitMo." People are cool though.',
			},
			{
				policy: "dogsRights",
				stance: -0.9,
				blurb: "Lucy would not let a dog see her in the light of day.",
			},
		],
	},
	{
		slug: "mango-ignacio-milano",
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
		otherNotes: (
			<>
				Mango lives by one rule, and one rule only: Might makes right. Rule
				number two, there are no rules. Rule number three, Mango is the only cat
				in the house, and if you are talking to another cat in a sweet voice,
				you were actually talking to Mango: he will show up. Don't get it
				twisted. He tolerates his younger brother Archie, and attacks every
				living soul in his household on a daily basis, as well as many
				non-living toys. He loves to run, having some circuits he completes when
				he's antsy. He seems to be self-conscious, lashing out at his siblings
				when we laugh at him because he (for example) fell over. He also is a
				fiend for a soft blanket, sucking on it in so many different spots that
				you can't help but to touch a gross wet spot when you get into bed after
				he's been there.

				<img src={manguito} alt="Manguito getting flashbanged" />

				He is also very affectionate, and has taken Archie under his wing. It's
				really cute to see them snuggled up in a tiny box somewhere together,
				even if it's usually the case that Mango originally fell asleep there by
				himself, Archie came over and fell asleep on him, and then Mango
				eventually wakes up and walks away. Usually, this wakes Archie up, so he
				follows Mango to his next task. Mango uses drugs to cope with his
				stalker.
			</>
		),
		policyStances: [
			{
				policy: "catnip",
				stance: 0.9,
				blurb:
					"Mango loves drugs. He uses catnip daily for recreational use. He uses it also to stave off his addiction to prescription painkillers like fentanyl and ketamine, which he tried during his surgery after eating a ribbon. He however does not like to share his drugs; he has been seen sprinting out of a room with a catnip toy in his mouth on many occasions.",
			},
			{
				policy: "secondAmendment",
				stance: 0.9,
				blurb:
					"Loves chasing NERF darts, has tons of experience with facing down the barrel of a gun. Also loves attacking anything with or without a pulse; he will fuck you up if he gets the chance, just to flex his 2nd Amendment rights.",
			},
			{
				policy: "nature",
				stance: 0.3,
				blurb:
					"He likes to go outside onto the balcony, but does not like to be contained by the tent. Wants to walk downstairs to explore other people's houses. Loves to chase bugs, and also light reflections on the wall/ceiling",
			},
			{
				policy: "change",
				stance: -0.1,
				blurb: "Not a huge fan of change, but rolls with the punches",
			},
			{
				policy: "immigration",
				stance: 0.45,
				blurb:
					"Mango has always liked being around people. He knows he's a handsome little dude, and loves attention with a side of pets on his face & ears.",
			},
			{
				policy: "governmentHandouts",
				stance: 0.9,
				blurb:
					"Mango will try to climb your leg to get those dang treats. Sofi and I have holes in some of our pants because of his talons.",
			},
			{
				policy: "catsRights",
				stance: -0.8,
				blurb:
					"Mango actively suppresses the rights of his fellow cat, for personal gain.",
			},
			{
				policy: "dogsRights",
				stance: 0.1,
				blurb: (
					<>
						Mango believes he was raised by{" "}
						<Annotated
							id="wolves"
							content={<>Artie, Willie, Holland, Buzzie, Birdie, Betty</>}
						>
							wolves
						</Annotated>
						, and has a general respect for the dog community
					</>
				),
			},
		],
	},
	{
		slug: "olivia-milano",
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
		otherNotes: (
			<>
				Loves going outside. Known for her huge bug eyes and for her{" "}
				<Annotated
					id="acrobatics"
					content={
						<>
							She does a couple, uh, tricks? Sometimes, when she wants
							something, she will stand on her back legs and bring her front
							paws together repeatedly in front of her face, as if she is
							begging. She also jumps up to the hand that pets her, and is the
							fastest cat in her household.
						</>
					}
				>
					acrobatic performances in the circus
				</Annotated>
			</>
		),
		policyStances: [
			{
				policy: "catnip",
				stance: -0.9,
				blurb:
					"Olivia does not care for catnip personally. She looks down upon any cat that debases themselves low enough to use such a drug. However, she shows some leniency when Lucy uses it.",
			},
			{
				policy: "secondAmendment",
				stance: -0.9,
				blurb:
					"Insists that all guns should be abolished. Absolutely despises NERF guns. Acts like a NERF gun could really kill her and everyone else in the room. Even just grabbing one, the plastic sound is too much for her sometimes. However, she does stand her ground when attacked. She took a few courses at the Allie School of Cat and has trained for years in the Manguito School of Martial Arts, so it's only natural.",
			},
			{
				policy: "nature",
				stance: 1.0,
				blurb:
					"This is what the Roach lives for: outside. Going out onto the balcony, chasing bugs, watching birds, munching on the tomato plant, taking a nap, getting her fur brushed... there's nothing she likes better than being outside.",
			},
			{
				policy: "immigration",
				stance: -0.5,
				blurb: "Not a fan of visitors",
			},
			{
				policy: "governmentHandouts",
				stance: -0.7,
				blurb:
					"Has hated treats for years, ever since we had to give her medication as a kitten (and followed up the pill with treats), but she has started to eat treats again as of this month (August 2026). Tides are turning for treats with the Roach.",
			},
			{
				policy: "catsRights",
				stance: 0.9,
				blurb:
					"Supports cats' rights, but won't rub it in your face. Except her right to go outside. That, she will scream for",
			},
			{
				policy: "dogsRights",
				stance: -0.1,
				blurb:
					"Has experience with one dog. Was not a fan, but didn't hate him",
			},
			{
				policy: "change",
				stance: 0.2,
				blurb:
					"Just don't carry a big box or bin of laundry around the house. That is unwelcome change. Whatever else is fine.",
			},
		],
	},
	{
		slug: "archibald-mortimer-milano",
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
		otherNotes:
			"Archie is a sweet boy who is obsessed with his older brother, Mango. He follows him everywhere, brushes up against him, cuddles up with him, and eats from the same bowl as him more often than not. He is also experimenting with meowing: he has been silent most of his life, but these past two months he has begun to meow roughly once or twice a day. He also works part-time as a stunt double for his sister, Olivia.",
		policyStances: [
			{
				policy: "catnip",
				stance: 0.65,
				blurb: "Archie likes catnip. 'Who could resist?', he says.",
			},
			{
				policy: "secondAmendment",
				stance: 0.6,
				blurb:
					"Likes to chase NERF darts with Mango, and loves to wrestle. Shows more mercy than Mango while fighting",
			},
			{
				policy: "nature",
				stance: 0.8,
				blurb:
					"Loves going outside, is fine with the tent. Loves to chew on the cucumber plant, and loves to bolt between my legs to run outside when I'm going out by myself.",
			},
			{
				policy: "immigration",
				stance: 0.5,
				blurb: "Is becoming a fan of visitors",
			},
			{
				policy: "governmentHandouts",
				stance: 0.3,
				blurb:
					"He loves treats, and is very polite to wait his turn in the bread lines. Will happily try to grab a crumb dropped from Mango's mouth.",
			},
			{
				policy: "catsRights",
				stance: -0.35,
				blurb:
					"Really, really trying to support Mango's efforts to rescind his fellow cats' rights. Is not aware that this includes his own rights. Is also unaware of what his own rights are, so his ignorance appears to be blissful",
			},
			{
				policy: "dogsRights",
				stance: 0.0,
				blurb:
					"Barely knows that dogs exist other than staring at the neighbors' dogs through the window",
			},
			{
				policy: "change",
				stance: 0.7,
				blurb: (
					<>
						Things have been changing for Baldy since he was born in the{" "}
						<Annotated id="bayou" content={<>This is conjecture</>}>
							bayou
						</Annotated>{" "}
						of{" "}
						<Annotated
							id="alabama"
							content={
								<>
									This is fact, Archie was found in Alabama and then transported
									to a shelter in Chicago, where we met him as a kitten. His
									name was Peter Parker
								</>
							}
						>
							Alabama
						</Annotated>
					</>
				),
			},
		],
	},
	{
		slug: "guinivere-kleyn",
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
		otherNotes:
			"A true rascal who has been exiled on several occasions to a room in her own home based on her kitten-like behavior.",
		policyStances: [
			{
				policy: "catnip",
				stance: 0.75,
				blurb: "Very pro-catnip",
			},
			{
				policy: "immigration",
				stance: 0.7,
				blurb: "Supportive of having guests over",
			},
			{
				policy: "governmentHandouts",
				stance: 0.75,
				blurb:
					"Believes in government handouts, especially treats. Not afraid to grab human food instead if rations run dry",
			},
			{
				policy: "catsRights",
				stance: 0.3,
				blurb:
					"Believes that cats should have more rights than people, at least when it comes to doors being open",
			},
		],
	},
	{
		slug: "juliet-kleyn",
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
		otherNotes:
			"The eldest cat of the Kleyn household. She looks great in a sweater.",
		policyStances: [
			{
				policy: "immigration",
				stance: -0.8,
				blurb: "Is scared of immigrants. Is also scared of guests at home",
			},
			{
				policy: "change",
				stance: -0.9,
				blurb: "Hates change of any kind. Is secretly medicated",
			},
			{
				policy: "secondAmendment",
				stance: 0.75,
				blurb:
					"Believes in stand-your-ground rights by whooping Gwen's ass in fights",
			},
			{
				policy: "catsRights",
				stance: 0.2,
				blurb:
					'Believes that Gwen should not have rights. Pees outside the litter box as "peaceful protest"',
			},
		],
	},
	{
		slug: "arthur-james-patterson",
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
				policy: "catnip",
				stance: -1.0,
				blurb:
					"Believes that all catnip users are catnip abusers, and should be locked up in the crate",
			},
			{
				policy: "immigration",
				stance: -0.7,
				blurb:
					"Is high-key racist, but will warm up to you and tell you you're \"one of the good ones\". Just don't make any sudden movements.",
			},
			{
				policy: "change",
				stance: -0.8,
				blurb:
					"Not a fan of change that looks like people walking into his house",
			},
			{
				policy: "nature",
				stance: 0.2,
				blurb: "Has a yard",
			},
			{
				policy: "secondAmendment",
				stance: 0.75,
				blurb:
					"Believes in stand-your-ground rights, and talking/barking it out",
			},
			{
				policy: "catsRights",
				stance: -0.95,
				blurb:
					"Rules by fear and intimidation. He is small but a fierce ALPHA DOG, often advocating to repeal & replace cats' rights laws.",
			},
			{
				policy: "dogsRights",
				stance: 1.0,
				blurb: "Rules by fear and intimidation in his household. ALPHA DOG.",
			},
		],
	},
	{
		slug: "willoughby-grey-patterson",
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
			"Goes with the flow, loves to play with toys by himself; when Artie and Pip fight he just stares at them and barks: a true libertarian.",
		policyStances: [
			{
				policy: "secondAmendment",
				stance: -0.75,
				blurb:
					"Knows deep down that anything can be ironed out with words/barks instead of violence. Prefers to stare and bark when others fight",
			},
			{
				policy: "catsRights",
				stance: 0,
				blurb: "Neutral on cats. Interested in the concept of kittens",
			},
			{
				policy: "immigration",
				stance: -0.2,
				blurb: "Seems to follow Artie's lead",
			},
			{
				policy: "nature",
				stance: 0.22,
				blurb: "Has a yard",
			},
			{
				policy: "dogsRights",
				stance: 0.5,
				blurb: (
					<>
						The{" "}
						<Annotated
							id="pinky-and-the-brain"
							content={
								<YouTubeEmbed src="https://www.youtube.com/embed/IBCvjDTaLvI?si=Yu3R5NCLM7MYIGYv" />
							}
						>
							Pinky to Artie&rsquo;s Brain
						</Annotated>
					</>
				),
			},
		],
	},
	{
		slug: "pip-matilda-patterson",
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
				blurb:
					"Grateful to be able to steal bones and leftover food from other dogs without repercussions by simply wearing them down with barks",
			},
			{
				policy: "catsRights",
				stance: -1.0,
				blurb: "Staunch anti-cats rights' activist",
			},
			{
				policy: "dogsRights",
				stance: 0.8,
			},
			{
				policy: "nature",
				stance: 0.1,
				blurb: "Has a yard",
			},
			{
				policy: "catnip",
				stance: -0.95,
				blurb: "May yell and bark at cats for tweaking off the nip",
			},
			{
				policy: "change",
				stance: 0.4,
				blurb: "Barks to make the change she wants eventually happen",
			},
		],
	},
	{
		slug: "honey-grace-patterson",
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
				blurb:
					'Barely stands her ground to the point where Pip eats from her mouth. "Eat from me."',
			},
			{
				policy: "dogsRights",
				stance: -0.3,
				blurb: "Does NOT stick up for herself",
			},
			{
				policy: "nature",
				stance: 0.3,
				blurb: "Has a yard",
			},
			{
				policy: "immigration",
				stance: 0.9,
				blurb: "Loves to be pet!",
			},
		],
	},
	{
		slug: "aggie-anne-sutton",
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
				blurb: "Occasionally attempts to chase cats",
			},
			{
				policy: "dogsRights",
				stance: 0.3,
			},
		],
	},
	{
		slug: "holland-days-patterson",
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
				stance: 0.95,
				blurb: "Rules by hissing and swatting",
			},
			{
				policy: "dogsRights",
				stance: 0.65,
				blurb: "Holland believes in equality",
			},
			{
				policy: "catnip",
				stance: 0.75,
			},
			{
				policy: "immigration",
				stance: 0.9,
				blurb: "Holland can hang with anyone",
			},
			{
				policy: "secondAmendment",
				stance: 0.2,
				blurb: "Rules his domain by hissing and swatting",
			},
		],
	},
	{
		slug: "betty-taylor-patterson",
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
				stance: 0.75,
				blurb: '"Leave me alone, it\'s my right"',
			},
			{
				policy: "dogsRights",
				stance: -0.9,
				blurb: "Betty is a staunch anti-dog-rights advocate",
			},
			{
				policy: "immigration",
				stance: -0.8,
				blurb: "Does not make much of an appearance",
			},
		],
	},
	{
		slug: "birdie-mae-patterson",
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
				stance: 0.65,
				blurb:
					"\"Leave me alone, it's my right. Also you don't deserve rights.\" Leader of Human Lives Don't Matter",
			},
			{
				policy: "dogsRights",
				stance: -1.0,
				blurb:
					"Birdie wishes to see the end of dogs in our time. Leader of Dog Lives Don't Matter",
			},
			{
				policy: "immigration",
				stance: -1.0,
				blurb:
					"Wishes all humans walking in her direction a very anvil on the head",
			},
			{
				policy: "governmentHandouts",
				stance: -1.0,
				blurb: "Campaigns for the abolishment of the government (humans)",
			},
		],
	},
	{
		slug: "buzz-bumble-patterson",
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
				blurb:
					"Has committed acts of terrorism (pissin') to defend his post as a member of the cats' rights movement",
			},
			{
				policy: "immigration",
				stance: 0.8,
				blurb: '"Give me that thumb"',
			},
			{
				policy: "secondAmendment",
				stance: 0.1,
				blurb:
					"Buzz kinda would like to have a gun. Under no circumstances should he be allowed to hold one.",
			},
		],
	},
	{
		slug: "sasha-syed",
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
		policyStances: [
			{
				policy: "catsRights",
				stance: 1.0,
				blurb:
					"Once hissed at uncle Zac when he was giving her wet food, the darn fool. Insists on her right to personal space",
			},
			{
				policy: "secondAmendment",
				stance: 0.8,
				blurb: "Violence is her first resort",
			},
			{
				policy: "immigration",
				stance: -0.5,
			},
		],
	},
	{
		slug: "mia-syed",
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
			'Leans center-left but gives little thought to politics, so she is heavily influenced by the state of affairs she lives in. Has become susceptible to fascist-style thinking because "that\'s just the way it is" and it will protect her way of life - the way your grandma might like a strongman because the news tells her to.',
		policyStances: [
			{
				policy: "immigration",
				stance: -0.7,
				blurb: "Often hides under the bed, somehow",
			},
			{
				policy: "governmentHandouts",
				stance: 0.0,
				blurb: "Yogi",
			},
		],
	},
	{
		slug: "alison-wonderland-jandro-lloyd",
		fullName: "Alison Wonderland Jandro Lloyd",
		primaryNickname: "Allie",
		nicknames: [
			"Mogus",
			"Honky Cat",
			"Honky Jat",
			"Honky ass jat",
			"Hajat",
			"Sister Hajat",
			"Mogus Jat",
			"Mogus Bogus",
			"The Boss",
		],
		photoSrc: allie2,
		xAxisPlacement: -0.3,
		yAxisPlacement: -0.95,
		otherNotes:
			"A full libertarian: believes in fewer rules, doesn't know shit about fuck, hates woke despite aligning with liberal beliefs. They call her Crimes Allie for a reason.",
		policyStances: [
			{
				policy: "catnip",
				stance: 0.1,
				blurb: (
					<>
						Allie would prefer that catnip remain federally illegal, so that her
						underground operation to sell catnip to kittens isn't forced to pay
						taxes to no{" "}
						<Annotated
							id="government"
							content={
								<>
									<p>Government? More like bitch</p>{" "}
									<p>
										<a href="https://www.reddit.com/r/comedyheaven/comments/bk61j4/government/">
											https://www.reddit.com/r/comedyheaven/comments/bk61j4/government/
										</a>
									</p>
								</>
							}
						>
							government
						</Annotated>
						.
					</>
				),
			},
			{
				policy: "secondAmendment",
				stance: 0.7,
				blurb: (
					<>
						<p>
							Allie has been apprehended several times with unregistered
							firearms and hollow-point ammunition on her{" "}
							<Annotated
								id="on-her-cat"
								content={<>Like, on her person. But she ain't no person</>}
							>
								cat
							</Annotated>
							.
						</p>
						<p>
							<Annotated
								id="money-trees"
								content={
									<YouTubeEmbed src="https://www.youtube.com/embed/0nF69UTw99E?si=4xrAhhf42OUBQTPL" />
								}
							>
								The one in front of the gun lives forever
							</Annotated>
							.
						</p>
					</>
				),
			},
			{
				policy: "governmentHandouts",
				stance: 0.7,
				blurb:
					"Likes some crunchy treats. Sometimes eats them too quickly so she throws up",
			},
			{
				policy: "immigration",
				stance: 1.0,
				blurb:
					"Allie believes in the permanent dissolution of all borders and doors. She also loves visitors, and can hang with any and all crowds",
			},
			{
				policy: "catsRights",
				stance: 0.4,
				blurb:
					'Allie doesn\'t give much thought to it, but believes that rights are earned by providing for the household, which is her primary role. "So many mouths to feed!"',
			},
			{
				policy: "dogsRights",
				stance: -0.9,
				blurb:
					'Has sent one of her grandma\'s dogs to a "farm". Is known to puff up to 1.2 times her original size in the presence of a dog',
			},
			{
				policy: "change",
				stance: 0.9,
				blurb:
					"Allie either does not seem to notice when some things change or is otherwise unaffected. She rolls with the punches, and she herself delivers a few punches, in quick succession",
			},
			{
				policy: "nature",
				stance: 0.9,
				blurb:
					"Allie loves going outside. She has been known to hang out with the whole gang on many a balcony.",
			},
		],
	},
	{
		slug: "bodie-scooter-lloyd",
		fullName: 'Bodie "Scooter" Lloyd',
		primaryNickname: "Scooter",
		nicknames: ["Bodes"],
		photoSrc: bodie,
		xAxisPlacement: -0.4,
		yAxisPlacement: 0.15,
		otherNotes:
			"Believes in a lot of causes and rights. Not too deep politically and pretty simple in his beliefs. Loves being a rule follower but doesn't want anyone to feel oppressed. Holds strong Christian values despite not being especially religious or right-leaning with it.",
		policyStances: [
			{
				policy: "governmentHandouts",
				stance: -0.9,
				blurb: "Does not care for treats in the slightest",
			},
			{
				policy: "catsRights",
				stance: 0.7,
				blurb:
					"Bodie insists on the right to not be picked up, the right to long nails, the right to poop in the tub when he's angry, and the right to scream",
			},
			{
				policy: "catnip",
				stance: 0.7,
				blurb: (
					<>
						Catnip is one of Bodie's simple pleasures, along with{" "}
						<Annotated id="rocks" content={<>Dry food/kibble</>}>
							rocks
						</Annotated>
						. "You had me at cat", Bodie once said when first offered catnip
					</>
				),
			},
			{
				policy: "immigration",
				stance: -0.1,
				blurb:
					"Bodie prefers to hang out with boys only. Not much of a fan of the ladies, but he will hang from time to time.",
			},
			{
				policy: "change",
				stance: -0.7,
				blurb:
					"Has been pooping in the tub every now and again recently, especially while packing up to move to a new apartment",
			},
			{
				policy: "secondAmendment",
				stance: 0.7,
				blurb: (
					<>
						Bodie does not like getting his nails cut. He would rather keep his
						weapons sharp, for{" "}
						<Annotated id="playin-hard" content={<>Or hardly playin'?</>}>
							playin' hard
						</Annotated>
						.
					</>
				),
			},
			{
				policy: "nature",
				stance: 0.37,
				blurb: (
					<>
						Bodie likes going out onto the balcony in his tent. He has also been
						spotted on occasion riding in and{" "}
						<Annotated id="decorating" content={<>With pure shit</>}>
							decorating
						</Annotated>{" "}
						the{" "}
						<Annotated
							id="big-pimpin-mobile"
							content={
								<>
									<h3>Big Pimpin' (disambiguation)</h3>
									<p>Big Pimpin' may refer to:</p>
									<ul>
										<li>
											a name which I just now came up with for the stroller that
											the{" "}
											<Annotated id="lloyd" content={<>Pronounced "Yoyd"</>}>
												Lloyd
											</Annotated>{" "}
											family had for some time
										</li>
										<li>
											<Annotated
												id="big-pimpin-embed"
												content={
													<YouTubeEmbed src="https://www.youtube.com/embed/Cgoqrgc_0cM?si=vjX9M9w1U4-UgWDq" />
												}
											>
												The song
											</Annotated>{" "}
											by{" "}
											<Annotated
												id="jay-z"
												content={
													<>
														Also apparently it's "JAŸ-Z" now? With the{" "}
														<Annotated id="umlaut" content={<>üm̈läüt</>}>
															umlaut
														</Annotated>
														??
													</>
												}
											>
												Jay-Z
											</Annotated>{" "}
											and UGK
										</li>
									</ul>
								</>
							}
						>
							Big Pimpin mobile
						</Annotated>
						.
					</>
				),
			},
		],
	},
];

// Cameo(s) that show up as a dot on the compass only — no bio, no policies.
const compassOnlyPets: Pet[] = [
	{
		slug: "kennys-foot",
		fullName: "Kenny's foot",
		primaryNickname: "DAWG",
		nicknames: [],
		photoSrc: dawg,
		xAxisPlacement: -0.5,
		yAxisPlacement: -0.7,
		otherNotes: "Hot DAWG",
		policyStances: [],
		compassOnly: true,
	},
];

const compassPets: Pet[] = [...pets, ...compassOnlyPets];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */


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

/**
 * 1-D layout that keeps the on-screen order identical to the numeric order of
 * `values` while moving each point as little as possible. Overlapping points
 * (closer than `minGap`) merge into a block that is spaced `minGap` apart and
 * re-centred on the mean of its members' true values — so an isolated point
 * (e.g. a lone "neutral" stance) never gets shoved off its mark by a distant
 * cluster. Everything stays within [lo, hi]. Returns positions in input order.
 */
const spread1D = (
  values: number[],
  minGap: number,
  lo: number,
  hi: number
): number[] => {
  const n = values.length;
  const out = new Array<number>(n);
  if (n === 0) return out;

  const order = values.map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v);

  // Not enough room for everyone — distribute evenly.
  if ((n - 1) * minGap >= hi - lo) {
    const step = (hi - lo) / Math.max(1, n - 1);
    order.forEach((o, k) => {
      out[o.i] = lo + k * step;
    });
    return out;
  }

  type Block = { targets: number[]; base: number }; // base = position of 1st member
  const place = (b: Block): void => {
    const k = b.targets.length;
    const mean = b.targets.reduce((s, t) => s + t, 0) / k;
    b.base = Math.max(
      lo,
      Math.min(mean - (minGap * (k - 1)) / 2, hi - (k - 1) * minGap)
    );
  };
  const overlap = (a: Block, b: Block): boolean =>
    a.base + a.targets.length * minGap > b.base + 1e-9;

  const blocks: Block[] = [];
  for (const o of order) {
    const b: Block = { targets: [o.v], base: 0 };
    place(b);
    blocks.push(b);
    while (blocks.length > 1 && overlap(blocks[blocks.length - 2], blocks[blocks.length - 1])) {
      const right = blocks.pop() as Block;
      const left = blocks.pop() as Block;
      const merged: Block = {
        targets: [...left.targets, ...right.targets],
        base: 0,
      };
      place(merged);
      blocks.push(merged);
    }
  }

  let k = 0;
  for (const b of blocks) {
    b.targets.forEach((_, j) => {
      out[order[k].i] = b.base + j * minGap;
      k++;
    });
  }
  return out;
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
  const raw: Pt[] = compassPets.map((p) => ({
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
        {compassPets.map((pet, i) => (
          <DotWrap
            key={pet.slug}
            style={{ left: `${placed[i].x}%`, top: `${placed[i].y}%` }}
          >
            <Dot
              className='compass-dot'
              $size={AVATAR}
              href={pet.compassOnly ? undefined : `#bio-${pet.slug}`}
              style={{ color: colorOf(pet) }}
              aria-label={plain(pet.primaryNickname, pet.slug)}
              onMouseEnter={(e) => open(e.currentTarget, pet)}
              onMouseLeave={close}
              onFocus={(e) => open(e.currentTarget, pet)}
              onBlur={close}
            >
              <img src={photoOf(pet)} alt={plain(pet.primaryNickname, pet.slug)} />
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
            {!hovered.pet.compassOnly && (
              <a href={`#bio-${hovered.pet.slug}`}>Read full bio ↓</a>
            )}
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
        key={pet.slug}
        id={`bio-${pet.slug}`}
        $accent={colorOf(pet)}
      >
        <img className='mug' src={photoOf(pet)} alt={plain(pet.primaryNickname, pet.slug)} />
        <div className='body'>
          <h4>{pet.fullName}</h4>
          <div className='primary'>“{pet.primaryNickname}”</div>
          <dl>
            <dt>Also known as</dt>
            <dd>
              {pet.nicknames.length
                ? pet.nicknames.map((n, i) => (
                    <React.Fragment key={i}>
                      {i > 0 ? ", " : ""}
                      {n}
                    </React.Fragment>
                  ))
                : "—"}
            </dd>
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

  // Spread the on-line avatars horizontally so photos don't stack, keeping the
  // left-to-right order identical to the numeric stance order.
  const placedX = useMemo(
    () =>
      spread1D(
        withStance.map(({ stance }) => toX(stance.stance)),
        (AVATAR / 640) * 100 * 0.5,
        3,
        97
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [policy]
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
          <OnLineItem key={pet.slug} style={{ left: `${placedX[i]}%` }}>
            <Dot
              className='dot'
              $size={AVATAR}
              href={`#bio-${pet.slug}`}
              style={{ color: colorOf(pet) }}
              aria-label={`${plain(pet.primaryNickname, pet.slug)}: ${pct(stance.stance)} ${
                stance.stance >= 0 ? "in favor" : "against"
              }`}
              onMouseEnter={(e) => open(e.currentTarget, pet, stance)}
              onMouseLeave={close}
              onFocus={(e) => open(e.currentTarget, pet, stance)}
              onBlur={close}
            >
              <img src={photoOf(pet)} alt={plain(pet.primaryNickname, pet.slug)} />
            </Dot>
          </OnLineItem>
        ))}
      </SpectrumLine>

      {without.length > 0 && (
        <NoPositionShelf>
          <span className='shelf-label'>No stated position</span>
          {without.map((pet) => (
            <NoPositionWrap key={pet.slug}>
              <Dot
                as='a'
                className='no-position'
                $size={SMALL_AVATAR}
                href={`#bio-${pet.slug}`}
                style={{ color: colorOf(pet), position: "static", margin: 0 }}
                aria-label={plain(pet.primaryNickname, pet.slug)}
                onMouseEnter={(e) => open(e.currentTarget, pet)}
                onMouseLeave={close}
                onFocus={(e) => open(e.currentTarget, pet)}
                onBlur={close}
              >
                <img src={photoOf(pet)} alt={plain(pet.primaryNickname, pet.slug)} />
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
            <a href={`#bio-${hovered.pet.slug}`}>
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
		<section id="7">
			<h2>Political ethology</h2>

			<p>
				Obviously, our pets are involved in politics, all to varying degrees.
				Let's take a look at the data.
			</p>

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

			<h3>Closing notes</h3>

			<p>
				Since this is a website, I can update any policy stances if you'd like!
				Had to take some guesses. Just let me know and I'll tweak it.
			</p>
		</section>
	);
};
