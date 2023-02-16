import React from "react";
import styled from "styled-components";

import { BlogPageTemplate } from "../../components";
import struthlessIbisDrawing from "../../images/struthless-ibis-drawing.webp";
import { Link } from "gatsby";

const Subheader = styled.h2`
	margin-top: 2em;
`;

const LimitWidth = styled.div`
	width: min(50em, 100%);

	& * {
		margin-bottom: 1em;
	}
`;

const YouTubeEmbed = styled.iframe`
	display: block;

	width: 80%;
	aspect-ratio: 16 / 9;

	margin-inline: auto;
	margin-block: 3em;

	border-color: transparent;
`;

const BlockQuote = styled.blockquote`
	position: relative;

	text-align: justify;

	&::before {
		content: open-quote;

		position: absolute;
		font-size: 2em;

		top: -0.5em;
		left: -0.5em;
	}
`;

const QuotedPerson = styled.figcaption`
	align-self: end;
`;

const BlockQuoteFigure = styled.figure`
	display: flex;
	flex-direction: column;

	padding: 2em;

	& > * {
		margin-bottom: 0;
	}
`;

const ImageContainer = styled.figure`
	width: min(30em, 100%);
	margin-inline: auto;
	margin-block: 3em;

	& figcaption {
		text-align: center;
	}
`;

const MakeTheSameThingEveryDayBlogPost: React.FC = () => {
	return (
		<BlogPageTemplate
			dateCreated="2023-02-08"
			title="Make the Same Thing Every Day"
		>
			<LimitWidth>
				<Subheader>The Problem</Subheader>

				<p>
					If you're anything like me, you have a whole slew of projects you've
					started but not finished. You get very interested in an idea, take a
					deep dive into it for a few days, and have a blast. For one reason or
					another, though, you end up moving on to something else.
				</p>

				<p>
					The hard truth is that, no matter how curious you are and how much you
					think you know, your body of work (and thus your real, verifiable
					experience in that field) is only as good as the projects you finish.
					One must finish projects and make them usable or seen.
				</p>

				<p>
					I was made aware of this problem for myself &amp; my professional
					journey so far when I went through a terrible, horrible, no good, very
					bad interview. The interviewers were fantastic, asking thoughtful
					questions about technical details of my experience &amp; past
					projects. I stumbled through almost everything I said, realizing that
					I was not only rusty with interviewing (a whole skill in itself), but
					that I also had very little to pull from outside of the few projects I
					had worked on and completed with my previous employers in my
					relatively short career. There were topics I wanted to discuss that I
					had discovered while starting short-lived personal projects, and many
					more that I had read about online or watched countless video tutorials
					about, but I had only surface-level knowledge about most of the
					material we discussed.
				</p>

				<h3>The Problem More Fully Realized</h3>

				<p>
					The specifics of the problem I want to solve were unexpectedly found
					before fully understanding that it was a problem. I found this video
					by Struthless on YouTube, who had at one point struggled with a
					similar issue, specifically with honing his artistic skills.
				</p>

				<YouTubeEmbed
					src="https://www.youtube.com/embed/M6NsEDwHHiE"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>

				<p>
					Campbell Walker (the guy in the video who called me out) consulted his
					mentor, Marc Schattner (of the dynamic duo{" "}
					<a
						href="https://en.wikipedia.org/wiki/Gillie_and_Marc"
						target="_blank"
					>
						Gillie and Marc
					</a>
					), complaining that he couldn't make his art his full-time gig. Marc
					clapped back with this:
				</p>

				<BlockQuoteFigure>
					<BlockQuote cite="Marc Schattner">
						<em>
							One day you write a song, the next day you write a poem, and then
							the third day you do a drawing, and none of it adds up to
							anything.
						</em>
					</BlockQuote>

					<QuotedPerson>&mdash; Marc Schattner</QuotedPerson>
				</BlockQuoteFigure>

				<Subheader>The Solution</Subheader>

				<p>
					Campbell then asked Marc how he can fix his problem. The solution?{" "}
					<em>Draw the same thing every single day.</em>
				</p>

				<p>
					Campbell eventually (via the magic of the universe) landed on the
					subject of the ibis for his daily drawings. As he continued drawing
					ibises, he began to feel more free to flex his creative muscles, to
					the point that the ibis took a backseat role to the rest of the
					drawing most days.
				</p>

				<ImageContainer>
					<img
						src={struthlessIbisDrawing}
						alt="drawing of an ibis by Campbell Walker"
					/>
					<figcaption>
						<i>Drawing of an ibis by Campbell Walker</i>
					</figcaption>
				</ImageContainer>

				<h3>Now, Specifics</h3>

				<p>
					I am going to apply a similar principal to my web development skills.
					I enjoy working with this tech, and I want to improve it. I want to
					develop the skill of <em>finishing</em> projects, too, so this sounds
					like a good path forward.
				</p>

				<p>
					I'm going to build a testimonial component on this site every day.
					This is a simple enough web component that it can be knocked out in a
					matter of minutes (to at least build &amp; continue the habit every
					day), but it's open-ended enough to not limit my creativity by any
					means. I anticipate building larger sections or even full pages around
					some testimonial components when I have more free time on a given day.
					I'm excited to get started!
				</p>

				<Subheader>Additional Resources</Subheader>

				<ol>
					<li>
						<a
							href="https://www.youtube.com/watch?v=M6NsEDwHHiE"
							target="_blank"
						>
							https://www.youtube.com/watch?v=M6NsEDwHHiE
						</a>
					</li>

					<li>
						<Link to="/daily-testimonials/2023-02-08">
							My first testimonial component: FaaSt Foods
						</Link>
					</li>
				</ol>
			</LimitWidth>
		</BlogPageTemplate>
	);
};

export default MakeTheSameThingEveryDayBlogPost;

export const Head: React.FC = () => {
	return <title>Make the Same Thing Every Day | Zac Milano</title>;
};
