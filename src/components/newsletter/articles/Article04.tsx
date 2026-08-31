import React from "react";
import { Annotated } from "../annotations";
import { actuator6374, actuatorFromBehind, actuatorFromFront, bldc5010, building5010, doocE, tarbot, tarbotCad } from "$images/index";
import { ImageRow } from "../ImageRow";

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

			<img
				src={bldc5010}
				alt="The 5010 BLDC motor in a bin with some of the electronics used to drive it"
			/>

			<p>
				The design I went with added a strong gear reduction onto the end of
				this tiny motor. The strength came in part from the shape of the gear
				reduction, and in part from the fact that the gears were printed to be
				very large. Much larger than the motor. Comically large, in retrospect.
			</p>

			<img src={building5010} alt="Building the 5010 actuator" />

			<p>
				I printed out the parts,{" "}
				<Annotated
					id="wires"
					content={
						<>
							The part of planning wiring, routing cables, and prepping
							connectors is something I had forgotten takes AGES, since I had
							worked on DOOC-E. Let's just gloss over that
						</>
					}
				>
					plugged all the wires in
				</Annotated>
				, wrote some firmware for the controller units, and watched my actuator
				do exactly nothing.
			</p>

			<ImageRow
				images={[
					{
						src: actuatorFromFront,
            alt: "5010 actuator from the front, with electronics, on a 2x4"
					},
					{
						src: actuatorFromBehind,
            alt: "5010 actuator from behind, screwed onto the 2x4 mount"
					},
				]}
			/>

			<p>
				After some tweaking, I got it moving! I printed out a mount to put the
				thing onto a 2x4, along with all the electronics to get it powered and
				spinning back and forth in a controlled manner. My controls worked, so I
				knew that my electronics system was validated.
			</p>

			<p>Then, the motor starting shooting smoke out the back.</p>

			<p>Great.</p>

			<p>
				However, the test was good enough for me to move on, as I had at least 3
				weeks left for{" "}
				<Annotated id="fafo" content={<>Fuckin' around, findin' out</>}>
					FAFO
				</Annotated>
				.
			</p>

			<h3>
				Next goal: build a stronger actuator. Cycloidal drive but more compact
				with bigger motor
			</h3>

			<p>
				The big motors finally arrived. I got some{" "}
				<Annotated
					id="bldc-6374"
					content={
						<>
							Stator is 63mm x 74mm. Much larger than 5010, and thus more wire
							and larger magnets, and thus a much stronger motor
						</>
					}
				>
					6374 BLDC
				</Annotated>{" "}
				motors, which are commonly used in electric skateboards. I eventually
				plan to use{" "}
				<Annotated
					id="three-of-these"
					content={
						<>
							I bought six. This was by far the single most expensive part
							purchase of my route through this hobby so far. I plan to reuse
							these motors as I move through new projects.
						</>
					}
				>
					three of these in each robotic arm of the laundry bot
				</Annotated>
				, alongside three 5010's, so I figured I should try and get an actuator
				working with one of these big bad boys.
			</p>

			<p>
				I finished designing it in 2 days, and had it printed by the end of the
				next day. For context, I started designing the first actuator in mid
				June and finished assembling it around August 6th. Fortunately I had the
				foresight to program some custom CAD features, so that I can make these
				actuators more easily going forward. Neat.
			</p>

			<p>
				The big chunky part on the right is the motor. The right-most white part
				serves as the output of the actuator: it moves 30x slower than the motor
				input, but has 30x as much strength as well.
			</p>

			<img
				src={actuator6374}
				alt="CAD section view of the actuator with the 6374 motor"
			/>

			<p>
				It was at this point that I got excited, printed another, and said hell
				to the original scope.
			</p>

			<h3>Final goal: build a whole fuckin' robot then why don't ya</h3>

			<p>
				My thought was to create a robotic arm which could rotate a camera in
				both pan and tilt axes, precisely and strongly. For this application, I
				needed only two actuators (one per axis of rotation of the end
				effector). DOOC-E used 4 actuators for its motion, but those were
				off-the-shelf servo motors with very little torque and poor reliability,
				not to mention low strength and poor power transmission efficiency (ie
				lots of friction due to using brushed motors).
			</p>

			<img src={tarbotCad} alt="CAD drawing of TARbot" />

			<p>
				This took way longer than I wanted it to, but I had a lot of challenges
				to consider: make sure I have screws that fit the lengths I need them
				to, make sure I can assemble the parts together without having to
				completely reassemble other parts in order to reach the screw holes,
				account for wiring holes, add bearings for rotational stability, 3D
				printer tolerances, and more. About half of the time here was spent in
				CAD, and the other on assembly. The printing part itself was relatively
				quick, all things considered, despite taking around 24 hours for all
				prints related to this robot.
			</p>

			<p>
				I had a lot of trouble getting my code to work with the bigger motors.
				It seemed that the driver boards were incompatible with my
				microcontroller boards, but that turned out to not be the case; instead,
				I was just using a code library that wasn't supported by both systems.
			</p>

			<p>
				This code issue resulted in the loss of two driver boards. $25 each, $50
				total, went up in smoke in a matter of seconds after first plugging them
				in. Tests with my multimeter confirmed that the drivers were toast.
			</p>

			<p>
				So, I found another library, and wrote my own field-oriented control
				code for these motors. After lots of trial and a bit more error, as well
				as a good night's sleep, I got it working!
			</p>

			<p>
				Technically, I got the joints of the robot working, and controlled over
				the air. The camera is still not working{" "}
				<Annotated
					id="disclaimer"
					content={<>Works fine when plugged directly into my laptop</>}
				>
					when on main power
				</Annotated>
				, but I was much more interested in how my actuators would fare in a
				full assembly.
			</p>

			<img src={tarbot} alt="TARBOT on my desk" />

			<p>
				The result: they... they fared. Once I got the arm's actuators spinning,
				it was hard for me to get it to stop. It definitely seems like the
				plastic will shred and chip before the motor slips, which bodes well for
				my current design - but not for the material I'm printing with.
			</p>

			<p>
				What's more, this material I'm using, PLA, struggles with heat. This was
				made abundantly obvious to me after I had the robot plugged in for more
				than 10 minutes: my code had a constant current running through the
				motors while they were stalled, to the point that they were too hot to
				touch. As such, the plastic in the whole robot seemed to warp a little
				bit, and the whole bot is lopsided around the first joint (the pan
				axis). After cooling down, the pan axis actuator struggles to spin
				without some crunchy sounds on the inside. Gonna investigate and refine
				my actuator design accordingly, as well as the code for the motors.
				Don't want a surprise house fire, of course.
			</p>

			<h3>Other thoughts</h3>

			<p>
				I got all the electronic parts from the internet, mostly AliExpress.
				They're not cheap. I did record some video footage of me assembling &
				testing out this stuff, and there are so many YouTube channels out there
				which get sponsored by e.g. manufacturing companies who just pay for a
				project, even with relatively few views on their videos. I'm considering
				editing + posting a video to try and get future projects sponsored. But
				I don't think I necessarily want to go hard on YouTube other than making
				silly shit like this. Idk.
			</p>

			<p>
				I found a guy on YouTube who designed some 3D printable ball bearings,
				for supporting rotary motion. I yoinked his design so hard, because I
				didn't want to pay out the wazoo for good bearings. However, high
				quality bearings may be a fine investment, the more I get into precision
				robotics.
			</p>

			<p>
				I needed to work on this project in baby steps. I would've certainly
				procrastinated way more if I didn't work on it bit by bit every day.
				I'll likely gut out the electronics for future bots, as this was more of
				a POC, and I originally bought enough parts to work together to build 2
				industrial robotic arms, for the eventual laundry project. This project,
				I consider to be a stepping stone. Getting my feet wet with a camera
				module, building actuators with over-the-air control systems, building a
				more robust and safety-oriented power system.
			</p>

			<p>
				Next time I want to build actuators with less backlash in the output
				shaft, and work on getting a working camera at the end of an arm. I'm
				thinking I might work on some smaller-scale actuators with the tiny
				motors I originally bought, might make a smaller robot just for funsies.
			</p>
		</section>
	);
};
