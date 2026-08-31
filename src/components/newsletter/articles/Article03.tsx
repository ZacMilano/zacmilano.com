import React from "react";
import styled from "styled-components";
import { Annotated } from "../annotations";
import { borat, ipadButton, numpad, numpadInProgress, totoro } from "$images/index";
import { ImageRow } from "../ImageRow";

const ImagePlaceholder = styled.div<{ $float?: "left" | "right" }>`
  width: 250px;
  height: 250px;
  background: hsl(0, 0%, 85%);
  border-radius: 4px;
  float: ${(p) => p.$float || "left"};
  margin: ${(p) =>
    p.$float === "right" ? "0.5em 0 1em 1.5em" : "0.5em 1.5em 1em 0"};
  shape-outside: margin-box;
`;

export const Article03: React.FC = () => {
  return (
		<section id="3">
			<h2>General life update</h2>
			<h3>Household updates</h3>

			<p>
				<Annotated
					id="recently"
					content={<>Since very late February / Early March</>}
				>
					Recently
				</Annotated>
				,{" "}
				<Annotated
					id="my-wife"
					content={
						<>
							<p>My wife</p>
							<img src={borat} alt="Borat" />
						</>
					}
				>
					Sofi
				</Annotated>
				's friend Arbi was staying with us for some time. You may have met her
				at our wedding/rehearsal dinner: she is Sofi's childhood friend from
				Colombia. It was quite a shake-up, having to share the house with
				someone who is not Sofi. She has since left the nest and moved in with
				her partner Lydia, in Milwaukee. Since then, I've returned to walking
				around the house butt naked. It's freeing. Try it sometime.
			</p>

			<h3>Therapy and such</h3>

			<p>
				I've been putting in some work on my mental health these past couple
				years in the form of therapy. I've been seeing a therapist that I talk
				to roughly once a week for the past couple years, and I recently worked
				through some tough memories from when I was a kid that had really
				affected the way I see the world using a technique called{" "}
				<Annotated
					id="emdr"
					content={
						<>
							Eye Movement Desensitization and Reprocessing. Was kind of shown
							in the Penguin TV show, on HBO Max.
						</>
					}
				>
					EMDR
				</Annotated>
				. Sofi had tried it and originally had recommended it to me, so I
				figured I'd give it a shot.
			</p>

			<p>
				I'm not sure which of yinz I've talked to about it, but I feel like I
				had a rough upbringing. My dad & stepdad were at-times physically
				abusive, and frequently psychologically abusive. It was very confusing,
				growing up. I learned to fear, to not trust, to figure shit out for the
				sake of pleasing them. Lately, I'm working on un-learning some of that.
			</p>

			<p>
				It's hard to talk about some of this stuff, but I find that the more I
				do, the less it hurts. I'd rather not put it all in writing though;
				happy to chat about details on a call or in person even though it's
				heavy! But buckle up for now.
			</p>

			<p>
				Eric treated me & my sister in a way which indicated that he kind of
				blamed us for some of the abuse that my dad inflicted upon my mom. I get
				that we look similar, but that's no excuse to disregard children's needs
				or emotions, nor is it a valid reason to forcefully interrogate a child
				about whether or not they let their dad play with the GameBoy their
				stepdad got them. That memory with the GameBoy, wherein Eric grabbed a
				5-year-old Zac by the nose with pliers until I admitted to letting my
				dad play the GameBoy with me, is one that I blocked out for many years.
				Until recently.
			</p>

			<p>
				I didn't intend to block it out, it just kind of happened. A lot of the
				time that I spent with Eric thereafter was marked by the fear that
				something like that would happen again. There were not a ton more
				physical altercations after that first one, but he really never seemed
				to care about me as a person.
			</p>

			<p>
				Eric would often put me and my sister to work on work around the house
				or his parents' house for way longer than child labor laws would allow.
				A lot of the time, he would not let us eat throughout a 8-12 hour shift
				doing whatever he wanted us to do that day. Mostly on school breaks,
				mostly when our mom was at work. I learned to not care about my hunger
				until I could finally eat later, and to push myself past my breaking
				point.
			</p>

			<p>
				Recently, though, I'm learning that life doesn't have to be like that.
				Those old times still show up in my behavior today... I can feel that
				there's a part of me within which wants to power through the thought of
				"I need to use the bathroom" or "I am hungry" for the sake of Getting
				The Task Done, ten times out of ten. But the part of me which does not
				hate myself, which knows that a cycle of rest makes the next cycle of
				work stronger... that part is growing, and I'm holding onto it.
			</p>

			<p>
				I think I grew up low-key depressed a lot of the time. Kind of got used
				to the feeling of wanting to die, as death often seemed the only way out
				of some of Eric's fun times. I can feel that I've been in a bit of a
				slump this past spring/summer, but I feel able to hold my own and stay
				out of the pits of despair much better than when I was a boy. The tools
				I am honing by reflecting on my emotions, by learning to remember the
				good times of my childhood, by letting thoughts leave as easily as they
				arrive, by learning grounding techniques to deal with momentary anxiety,
				by reprocessing my tough times and recognizing that it was just as tough
				as it seemed at the time despite the nagging gaslighting coming from
				Eric... I feel like I'm learning a superpower, if that makes sense.
			</p>

			<p>
				It almost feels like I barely had a sense of self for the first like 18
				years of my life, and I'm finally realizing that I can exist as my own
				person, with my own thoughts and opinions. I'm getting to a point where
				I'm ready to cut back on therapy, which I never thought I'd say once I
				started. But it's really neat.
			</p>

			<p>
				Yinz were my lifeline, growing up. If I didn't have you all to lean on
				in school & outside school, who knows how things would be. I appreciate
				you.
			</p>

			<h3>That dang phone</h3>

			<p>
				I have been in an ongoing war with my own screen time metrics for the
				past few years. I was able to get down from 4-5 hours a day week to 1-3
				hours a day - until recently.
			</p>

			<p>
				I am back up to 4-5 hours a day, a lot of which goes into YouTube. Most
				of the time, I'm watching something in the background while doing
				something else. It's nice, but I think I do this more often than I
				actually WANT to... it's hard to explain, but I think I'm addicted to my
				phone.
			</p>

			<p>
				I'm trying to find more hobbies, now that I can feel myself resisting
				pulling out YouTube more lately. I do like clankin'/designing things,
				but sometimes I want to do something mindless. I have a few{" "}
				<Annotated id="mobile-games" content={<>See Recommendations article</>}>
					mobile games
				</Annotated>{" "}
				I've been playing lately, as well as some audiobooks of books that I
				have read before & really enjoyed, which fills the void sometimes. But
				wowee if YouTube doesn't always have something new to watch.
			</p>

			<p>
				Side note. If there are some books that you've read and enjoyed, you may
				enjoy listening to the audiobook as background noise while exercising or
				working on something that doesn't require reading text, like, chores
				around the house.
			</p>

			<h3>Coffee</h3>

			<p>
				This past year-ish, I have had a rocky relationship with coffee: I have
				been super jittery with almost any amount of caffeine, super sensitive.
				Back in college, I used to drink 3-4 cups of coffee a day, and it worked
				for me, but I also was a lot more active back then, and I worked off
				some of the jitters by biking to class/work/the grocery store and
				lifting weights.
			</p>

			<p>
				For a while, I was only drinking coffee from Rarebird: they decaffeinate
				their coffee, and then add in paraxanthine, the primary metabolite of
				caffeine. Paraxanthine delivers a much "smoother curve of energy" as my
				grandpa put it, compared to caffeine. It has a much shorter half-life,
				so I was able to have 1-2 cups of it per day without having trouble
				falling asleep.
			</p>

			<p>
				But I've recently started lifting weights some again, and biking every
				now and again. I've also got my anxiety a bit better under control after
				doing some EMDR work and finding a medication that works for me. And all
				of a sudden, I'm back on two cups of coffee a day, happily. It really
				seems to help me get more shit done, and I don't have to drink that
				nasty ass decaf-plus-paraxanthine coffee anymore. Back to my craft
				beans.
			</p>

			<p>
				Speaking of craft beans, there's an awesome cafe near by where I live
				called Osmium, and they serve Dark Matter coffee. Any of yinz who want
				to try some more experimental coffees, let me know and I'll get you a
				bag.
			</p>

			<h3>The Wife Update</h3>

			<p>
				Sofi had an internship at the University of Chicago this summer! She was
				working in a lab whose current focus is a transplant operation (islet
				cell transplant) which seems promising for curing patients of Type 1
				diabetes. It's so cool. She says it's similar to something she saw on
				Grey's Anatomy, which makes it even cooler for her. She will likely be
				able to work in this lab after she graduates from her undergrad at
				DePaul this upcoming May, and she's going to a couple conferences later
				this year to present her work!
			</p>

			<h3>Some stuff I've made recently</h3>

			<p>
				I made a button that Allie can theoretically step on to turn on a new
				toy of hers. I forgot to take a pic of it on the toy, but it works! Even
				though her ungrateful ass has not pressed it once. Here's a cross
				section. The very bottom part is the toy, and the other three parts
				snap/slide/screw into place.
			</p>

			<img
				src={ipadButton}
				alt="Cross section of the button I added onto Allie's toy"
			/>

			<p>
				I made a yarn spinner that looks like Totoro, for Arbi as a birthday
				gift. She likes Totoro, and wanted something to hold & rotate her yarn
				balls while she's crocheting. I also forgot to take a picture of this
				before giving it away. Whoops.
			</p>

			<img src={totoro} alt="Totoro yarn spinner" />

			<p>
				Also made a numpad for Shrimp as a birthday gift. This was my first time
				hand-wiring all the connections and diodes in a computer keyboard, and
				also my first time designing a keyboard case. Came out pretty slick if I
				do say so myself! I printed the case fully solid, so that it makes a
				nice deep sound when you press the keys.
			</p>

			<ImageRow
				images={[
					{ src: numpadInProgress, alt: "Numpad in progress" },
					{ src: numpad, alt: "Completed numpad" },
				]}
			/>
		</section>
	);
};
