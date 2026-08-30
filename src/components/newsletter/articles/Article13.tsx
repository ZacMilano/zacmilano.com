import React from "react";
import { Annotated } from "../annotations";

export const Article13: React.FC = () => {
  return (
		<section id="13">
			<h2>Signing off</h2>
			<p>
				Sofi and I are taking a week for a road trip starting Monday, August
				31st. We'll go up to Door County in Wisconsin, then make our way up to
				Upper Peninsula Michigan, then down into Lower Peninsula Michigan via
				the Mackinac Bridge.
			</p>

			<p>
				I need some time off from work, badly. I also need some time off from my
				phone. I may not be as readily available this coming week when it comes
				to responding to things, but just know that it ain't personal, kid.
				Might not make it to the next game night but I'd love if we could
				discuss the past few months of newsletters altogether soon!
			</p>

			<p>
				Aight,{" "}
				<Annotated
					id="go-to-bed"
					content={
						<>
							<iframe
								src="https://www.youtube.com/embed/0cuwMaBSEME?si=8kTYVxk2UnvuW8bR&amp;start=14"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</>
					}
				>
					I'm gonna go to bed
				</Annotated>
				, and gonna try and{" "}
				<Annotated
					id="disconnect"
					content={
						<>
							<p>Shouted in the same way that this guy says "Bitconnect"</p>
							<iframe
								src="https://www.youtube.com/embed/yIL9wLxG01M?si=RDtLlBWNwmSgvIP5&amp;start=14"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</>
					}
				>
					disconnect
				</Annotated>{" "}
				until I get back stateside.
			</p>

			<p>Sayonara suckers,</p>

			<p>Zec</p>
		</section>
	);
};
