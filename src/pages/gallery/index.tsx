import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { NavigationHeader, useTestimonialRegistry } from "$components";
import { VisuallyHidden, blackRockBlue, pagePaddingInline } from "$styles";

const Main = styled.main`
	margin-block-start: 4em;
	padding-inline: ${pagePaddingInline};

	padding-bottom: 10em;

	& > * + *,
	& > nav > * + * {
		margin-block-start: 4em;
	}

	& > header {
		margin-block-end: 2em;
	}

	/* Utility class for styling links as uniform buttons. */
	/* TODO: Make this global */
	& .button-link {
		padding: 1em 2em;

		display: inline-block;

		background-color: white;
		color: ${blackRockBlue};
		border: 2px solid ${blackRockBlue};

		text-align: center;
		text-decoration: none;
		font-weight: bold;
	}
`;

const Subheader = styled.p`
	font-size: 1.25rem;
`;

const SectionHeader = styled.header`
	margin-block-end: 2em;

	& > h3 {
		font-size: 1.25rem;
	}
`;

const TestimonialList = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1.5em;

	margin-inline: auto;
	padding-inline-start: 0;

	list-style-type: none;

	& > li {
		flex-grow: 1;
		min-width: 30ch;
		overflow: hidden;
		text-wrap: nowrap;

		& > a {
			display: inline-block;

			width: 100%;
		}
	}
`;

const ClusterList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5em;

	margin-inline: auto;
	padding: 0;

	list-style-type: none;

	@media (max-width: 35rem) {
		& > li {
			width: 100%;

			& > a {
				width: 100%;
			}
		}
	}
`;

const GalleryLink = styled((props) => <Link {...props} />)`
	& + & {
		margin-inline-start: 1em;
	}
`;

interface LinkConfig {
	to: string;
	displayText: string;
}

const GalleryHome: React.FC = () => {
	const testimonialRegistry = useTestimonialRegistry();

	const galleryUpdateRegistry: LinkConfig[] = [
		{ to: "./import-aliases", displayText: "Import Aliases" },
		{ to: "./copy-button", displayText: "Copy Button" },
	];

	const uiPracticeRegistry: LinkConfig[] = [
		{ to: "./concentric-button", displayText: "Concentric Button" },
	];

	return (
		<>
			<NavigationHeader />

			<Main>
				<header>
					<h1>A gallery of my work</h1>
					<Subheader>Or at least, the fun stuff I've made lately.</Subheader>
				</header>

				<nav aria-labelledby="gallery-nav-label">
					<h2 id="gallery-nav-label">
						<VisuallyHidden>Gallery Navigation Menu</VisuallyHidden>
					</h2>

					<section>
						<SectionHeader>
							<h3>UI Practice</h3>
						</SectionHeader>

						<ClusterList>
							{uiPracticeRegistry.map(({ to, displayText }, index) => (
								<li key={index}>
									<GalleryLink to={to} className="button-link">
										{displayText}
									</GalleryLink>
								</li>
							))}
						</ClusterList>
					</section>

					<section>
						<SectionHeader>
							<h3>Updates to this project</h3>
						</SectionHeader>

						<ClusterList>
							{galleryUpdateRegistry.map(({ to, displayText }, index) => (
								<li key={index}>
									<GalleryLink to={to} className="button-link">
										{displayText}
									</GalleryLink>
								</li>
							))}
						</ClusterList>
					</section>

					<section>
						<SectionHeader>
							<h3>Testimonials</h3>
							<p>
								Read about this project{" "}
								<Link to="/blog/make-the-same-thing-every-day">here</Link>.
								TODO: Write a post in the Updates section about why I'm not
								doing this anymore. (Hint: it's so I have time to work on other
								things here!)
							</p>
						</SectionHeader>

						<TestimonialList>
							{testimonialRegistry.map((date, index) => (
								<li key={index}>
									<Link
										to={`./daily-testimonials/${date}`}
										className="button-link"
									>
										Testimonial for {date}
									</Link>
								</li>
							))}
						</TestimonialList>
					</section>
				</nav>
			</Main>
		</>
	);
};

export default GalleryHome;

export const Head: React.FC = () => {
	return <title>Gallery | Zac Milano</title>;
};
