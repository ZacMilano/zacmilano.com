import React from "react";
import { Annotated } from "../annotations";
import { pala } from "$images/index";

export const Article08: React.FC = () => {
  return (
		<section id="8">
			<h2>The case for digital media*</h2>

			<p>
				This comes with a huge asterisk: I am pleading the case for
				digital-first media wherein you, the consumer of said media, has full
				autonomy over the management and playback of said media. ie, if you make
				your own hardware. This is such a slim niche, and I am making no
				statement on physical media -- porting physical media over to a
				self-managed device is kind of the best of both worlds.
			</p>

			<p>
				I guess it'sm ore about hardware ownership than about the media consumed
				via the hardware being digital, but I digress.
			</p>

			<p>
				I found a{" "}
				<Annotated
					id="kit"
					content={
						<>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/49U3f7eV1AI?si=Q_gfQGaR489nPwpx"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</>
					}
				>
					kit on YouTube
				</Annotated>{" "}
				for this mini e-reader, like a tiny Kindle with one button. I paid $5
				for the designs, bought the hardware, and printed the case. I ended up
				modifying the code that was provided to be a bit more{" "}
				<Annotated
					id="user-friendly"
					content={
						<>
							Made the controls a bit more intuitive, added more settings I can
							tweak, made it easier to upload books, made it easier to through
							books to find my spot
						</>
					}
				>
					user-friendly
				</Annotated>
				, and read like half a book on it. It was fine, and super tedious to set
				up, but the process of creating it was so much fun. It fits into my
				pocket and has a little key ring on it; I could see myself using this if
				Kindle's servers shut down today, no problem.
			</p>
      
      <img
        src={pala}
        alt="The Pala e-reader, with my tweaks"
        style={{ transform: "rotate(-90deg)" }}
      />

			<p>
				I don't have a ton more to say about it, but that's the gist: I have a
				physical alternative to Kindle, and the restrictions of not owning the
				underlying files for my Kindle books are somewhat mitigated by me owning
				my own hardware, and having found a way to upload books found elsewhere
				onto this thing I made. Cheers.
			</p>
		</section>
	);
};
