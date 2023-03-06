import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { NavigationHeader, useTestimonialRegistry } from "$components";
import { VisuallyHidden, blackRockBlue, pagePaddingInline } from "$styles";

const Main = styled.main`
	/* display: grid; */
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
	justify-content: space-around;
	flex-flow: row wrap;
	gap: 1.5em;

	margin-inline: auto;
	padding-left: 0;

	list-style-type: none;

	& > li {
		flex-grow: 1;
		min-width: 30ch;
		overflow: hidden;
		text-wrap: nowrap;

		&:focus-within,
		&:focus-visible {
			outline: 4px solid orange;
		}

		& > a {
			display: inline-block;

			width: 100%;
			padding-block: 1em;
			padding-inline: auto;

			background-color: white;
			color: ${blackRockBlue};
			border: 2px solid ${blackRockBlue};

			text-align: center;
			text-decoration: none;
			font-weight: bold;
		}
	}
`;

const ImportAliasesLink = styled((props) => <Link {...props} />)`
	padding: 1em 2em;

	text-decoration: none;
	font-weight: bold;
	color: ${blackRockBlue};
	background-color: white;
	border: 2px solid ${blackRockBlue};
`;

const TestimonialsHome: React.FC = () => {
	const registry = useTestimonialRegistry();

	return (
		<>
			<NavigationHeader />

			<Main>
				<header>
					<h1>A gallery of my work</h1>
					<Subheader>Or at least, the pretty stuff I've made lately.</Subheader>
				</header>

				<nav aria-labelledby="gallery-nav-label">
					<h2 id="gallery-nav-label">
						<VisuallyHidden>Gallery Navigation Menu</VisuallyHidden>
					</h2>

					<section>
						<SectionHeader>
							<h3>Updates to this project</h3>
						</SectionHeader>

						<ImportAliasesLink to={"./import-aliases"}>
							Import Aliases
						</ImportAliasesLink>
					</section>

					<section>
						<SectionHeader>
							<h3>Testimonials</h3>
							<p>
								Read about this project{" "}
								<Link to="/blog/make-the-same-thing-every-day">here</Link>.
							</p>
						</SectionHeader>

						<TestimonialList>
							{registry.map((date, index) => (
								<li key={index}>
									<Link to={`./daily-testimonials/${date}`}>
										See testimonial for {date}
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

export default TestimonialsHome;

export const Head: React.FC = () => {
	return <title>Gallery | Zac Milano</title>;
};
