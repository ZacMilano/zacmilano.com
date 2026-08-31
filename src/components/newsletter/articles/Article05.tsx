import React from "react";
import { Annotated } from "../annotations";

export const Article05: React.FC = () => {
  return (
		<section id="5">
			<h2>Lemme mansplain some shi (and other ramblings)</h2>

			<p>
				I absolutely love explaining things to people. I love diving into the
				nitty gritty, answering questions, analyzing and recounting all the
				mundane and technical details. I don't always aim to be{" "}
				<Annotated
					id="condescending"
					content={
						<>
							This means talking down to people, like I'm doing with this
							annotation.
						</>
					}
				>
					condescending
				</Annotated>
				, but sometimes it just happens. Deal with it.
			</p>

			<p>Let me explain some shit to you my guy.</p>

			<h3>Ramblings on AC vs DC current</h3>

			<p>
				I am going to broadly oversimplify this, but AC, i.e. alternating
				current in electrical circuitry, is pretty nifty. It is characterized by
				cyclical current values, whereas DC/direct current is characterized by a
				constant current over time.
			</p>

			<p>
				Current is induced by a voltage differential, so perhaps "alternating
				voltage" is more accurate a term. Alternating current is traditionally
				represented mathematically as a sine curve when introducing the topic,
				but this need not necessarily be the case - alternating voltage can be
				almost any waveform, so long as it is cyclical. In fact, this freedom of
				form is what makes AC so interesting.
			</p>

			<p>
				Sure, AC current is technically safer to touch, and that's interesting,
				but apparently also things like radio waves use alternating current: the
				shape of the current waveform uniquely captures a signal. This signal
				could be anything from a network request over wifi, to a "hit the
				brakes" signal within your car's computers.
			</p>

			<p>
				I've been working my whole career so far in software development,
				primarily web development. This means I've got some experience working
				with communication systems, particularly, the internet.
			</p>

			<p>
				In prepping to build TARbot, I wanted to learn about how I might send a
				signal from my computer to the robot such that it moves in the way I
				expect it to. I am learning that this just means finding a
				communications protocol that fits my application, and connecting my
				communicators together. Easy enough.
			</p>

			<p>
				In this case, my communicators are not people with computers nor
				servers, but instead, individual circuit boards.
			</p>

			<p>
				I'm using{" "}
				<Annotated
					id="can"
					content={
						<>
							Stands for Controller Area Network. This is the communication
							system used inside cars, to allow its internal computers to send
							signals to each other and cooperate
						</>
					}
				>
					CAN
				</Annotated>{" "}
				communication to transmit signals from my master microcontroller to my
				other microcontrollers, by connecting a CAN transceiver to power +
				input/output lines on the microcontrollers as well as creating a{" "}
				<Annotated
					id="bus"
					content={<>Long chain of wiring with resistors at the end</>}
				>
					bus
				</Annotated>{" "}
				connection between every microcontroller's CAN transceiver.
			</p>

			<p>
				I was hoping to measure some communication with my multimeter, but
				multimeters aren't really built for AC analysis. I might end up getting
				an oscilloscope for that at some point, but those SOB's are expensive,
				so we'll see.
			</p>

			<p>
				I have done lots of analysis on communications done over the internet,
				which amounts to analyzing the text which is received after making a
				request; here, I'm trying to analyze something several layers deeper in
				the technology stack, so it's quite different, but my skills transfer,
				which is nice.
			</p>

			<h3>Motors</h3>

			<p>
				Brushless motors are a modern marvel. Other motor options which are
				exist are{" "}
				<Annotated
					id="stepper"
					content={
						<>
							Made with brushed DC motors and a gearbox. Became a lot cheaper in
							the past 10 years due to the 3D printing community's demand
						</>
					}
				>
					stepper motors
				</Annotated>{" "}
				as well as{" "}
				<Annotated
					id="servo"
					content={
						<>
							The cheap ones also use brushed motors and a gearbox, alongside a
							sensor for position feedback. These are what I used in DOOC-E
						</>
					}
				>
					servo motors
				</Annotated>
				, but both of those two options use{" "}
				<Annotated id="brushed" content={<>Read: lots of internal friction</>}>
					brushed
				</Annotated>{" "}
				motors. Brushless motors have no contact on parts which cause motion: it
				is induced by causing a changing current in its{" "}
				<Annotated id="wrapped" content={<>Acting as an electromagnet</>}>
					wires which are wrapped around its stator
				</Annotated>
				, which reacts to the magnetic field from the ring of
				alternating-polarity permanent magnets on the rotor.
			</p>

			<p>
				It is also super valuable to be able to backdrive brushless motors,
				particularly in building robots: this means building an actuator around
				it, and driving the input shaft really fast by spinning the output shaft
				a little bit. This is often impossible with steppers and servos, but
				BLDC's can normally handle this with ease. No friction.
			</p>

			<h3>[Co-]Prime numbers in my hardware</h3>

			<p>
				In adding in the bearings for TARbot, I figured that I should try and
				change up the number of ball bearings which go into each assembly.
				Specifically, I had ~5-6 bearing assemblies per actuator, and I made
				sure that none of them had the same number of balls. I also made sure to
				get the numbers of balls for similar-size bearings to be as close to
				co-prime as I could get them to be. This is because I figured that if
				the stress on a rotational axis is focused onto the balls in a specific
				location in a specific bearing, then it is probably best to have balls
				in other bearings distributed in slightly different spots around a full
				rotation than where they are in the first bearing. By keeping the
				quantities between bearings of similar sizes co-prime(-ish), I think I
				was able to stabilize the output bearing really well on my stronger
				actuators. Er, at least, along the axis of rotation. In rotating the
				output, along the direction of rotation (spins around the axis)
				rotation, there is still some slop, but along the axial direction, it is
				solid with zero wiggle. What's odd, though, is that all my bearings
				which support this direction have the opposite issue: they have wiggle
				along their axial direction. Lots of it.
			</p>

			<p>
				So as far as I can tell, staggering the quantities (e.g. 6, 7, and 8
				balls in a set of 3 smaller bearings) seems to have helped a ton, in
				terms of stability. I count that as a win.
			</p>
		</section>
	);
};
