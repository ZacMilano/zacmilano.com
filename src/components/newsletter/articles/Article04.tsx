import React from "react";
import { Annotated } from "../annotations";
import { bldc5010, doocE } from "$images/index";

export const Article04: React.FC = () => {
  return (
		<section id="4">
			<h2>Doohickey of the month: TARbot</h2>
			<p>
				Holy guacamole, I have{" "}
				<Annotated
					id="learned-so-much"
					content={
						<>
							Including learning a bit about the sheer amount there is that I
							have not yet learned
						</>
					}
				>
					learned so much
				</Annotated>{" "}
				about robots since making{" "}
				<Annotated
					id="dooc-e"
					content={
						<>
							<p> The robot from my previous Bois Monthly in February 2026</p>
							<img
								src={doocE}
								alt="DOOC-E, the robot, sitting on my crafting table"
							/>
						</>
					}
				>
					DOOC-E
				</Annotated>
				. I've been doing a lot of prototyping, and I will probably keep
				prototyping for a good while as I build the design skills needed to
				complete the{" "}
				<Annotated
					id="laundry-folding-bot"
					content={
						<>
							<p>
								I have set a medium-to-long-term goal for myself to build a
								functioning robotic system which can fold my laundry. My plan is
								to build two 6-DOF robotic arms about 1-1.5m long with cameras
								attached to the ends, attached to a table/flat surface for
								folding. I want to be able to bring over a basket of laundry and
								have the arms fold it all into piles.
							</p>

							<p>
								I have purchased pretty much all the hardware I'd need to build
								a robot that fits my application, but I think I might be
								switching things up again going forward in the
								electronics/circuit boards department, for the next project
								after TARbot.
							</p>

							<p>
								I talk more about my vision for this future project in my
								Mainsplaining article (follows this one).
							</p>
						</>
					}
				>
					laundry folding bot
				</Annotated>
				. I had originally set a goal for myself which I blew past in the first
				few days of the month, so I kept fucking around and finding out.
			</p>

			<p>
				I'd say I'm generally in that phase, fuck around and find out, when it
				comes to electronics and physical design. I fried a few electronic
				components this month, but{" "}
				<Annotated
					id="i-aint-trippin"
					content={
						<>
							Ok maybe I was trippin' a little bit when I saw two $25 boards go
							up in smoke right in a row the other night
						</>
					}
				>
					I ain't trippin'
				</Annotated>
				.
			</p>

			<p>Let me take you through the journey I went on recently.</p>

			<h3>The original goal: build a strong rotary actuator</h3>

			<p>
				An actuator is the combination of a motor, a gearbox, and some
				electrical circuitry to provide position feedback as to where the output
				is located after applying some voltage to the motor. Actuators generally
				come in two forms: linear and rotary. Linear actuators spin their motor
				and cause their output shaft to move in a straight line, whereas rotary
				actuators spin their motor and cause their output shaft to spin at a{" "}
				<Annotated
					id="physics"
					content={
						<>
							Dadgum, I am very grateful for having a solid math & physics
							education. Shouts out to all my teachers
						</>
					}
				>
					slower speed but with a higher torque
				</Annotated>
				. Higher torque in actuators makes for a stronger robot.
			</p>

			<p>
				The kinds of robots I'm most interested in are industrial-style robitic
				arms, which{" "}
				<Annotated
					id="radial-actuators-for-all-joints"
					content={
						<>
							It's fairly common for a robotic arm with 6 degrees of freedom to
							also be mounted on rails for linear motion as well, for a 7th
							degree of freedom
						</>
					}
				>
					primarily use radial actuators for all their joints
				</Annotated>
				. That's where I am focusing: designing and building an actuator that is{" "}
				<Annotated
					id="stronger-than-me"
					content={
						<>
							Er, at least, one which continues to turn even when I try to hold
							it still with my hand
						</>
					}
				>
					stronger than me
				</Annotated>
				.
			</p>

			<p>
				The hardware I purchased from AliExpress back in May/June arrived in
				June/July, including almost everything I would need to build a couple
				small simple robots.
			</p>

			<p>
				It was only after the parts started to arrive that I realized the motors
				I had purchased were teeny tiny.
			</p>

			<p>
				This is fine, I will still use them, but I was hoping to dive headfirst
				into the laundry folding bot. I can use the biggest ones I bought
				towards the wrist since they're light enough with enough strength to be
				worth the weight at the end of the arm. These dinky things wouldn't cut
				it, though, for the joints toward the base which need to be strong
				enough to hold everything else PLUS clothing at a length of ~1 meter.
			</p>

			<p>
				Try holding a hoodie in your hand, with your hand outstretched in front
				of your shoulder, parallel to the ground. Not too hard, but holding it
				completely still there for even just a minute? Your arm probably starts
				to get a little tired, especially at the shoulder.
			</p>

			<p>
				Long story short, I bought bigger shoulders. Er I mean bigger motors.
				while I waited those to arrive from Ebay, I got to work on designing an
				actuator which works with the largest of the small motors I had: the{" "}
				<Annotated
					id="bldc-5010"
					content={
						<>
							5010 ={" "}
							<Annotated
								id="for-more-see-mansplaining"
								content={
									<>
										For more on stators, see the following Mansplaining article
									</>
								}
							>
								stator
							</Annotated>{" "}
							is 50mm in diameter, 10mm thick; BLDC = BrushLess Direct Current
						</>
					}
				>
					5010 BLDC
				</Annotated>
				.
			</p>

      <img src={bldc5010} alt="The 5010 BLDC motor in a bin with some of the electronics used to drive it" />

			<h3>
				Next goal: build a stronger actuator. Cycloidal drive but more compact
				with bigger motor
			</h3>
			<h3>
				Next goal: build a whole fucking robot then why don't ya. Two big motors
			</h3>
			<h3>Some re-printing of parts</h3>
			<p>
				I got all the electronic parts from the internet, mostly AliExpress.
				They're not cheap. I did record some video footage of me assembling &
				testing out this stuff, and there are so many YT channels which get
				sponsored by e.g. manufacturing companies who just pay for a project.
				Considering editing + posting a video to try and get sponsored for
				future projects. But I don't think I necessarily want to go hard on
				YouTube other than making silly shit like this
			</p>
			<p>Making my own bearings</p>
			<p>Camera: no dice</p>
			<p>Eventually got the controls working. IT'S ALIVE!!</p>
			<p>
				I needed to work on this project in steps. I'll likely gut out the
				electronics for future bots, as this was more of a POC, and I originally
				bought enough parts to work together to build 2 industrial robotic arms,
				for the eventual laundry project. This project, I consider to be a
				stepping stone. Getting my feet wet with a camera module, building
				actuators with over-the-air control systems, building a more robust and
				safety-oriented power system.
			</p>
		</section>
	);
};
