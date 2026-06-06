import React from 'react';
import styles from './styles.module.css';
import HomeSection from '../HomeSection';

export default function Books() {
	return (
		<HomeSection alt>
			<>
				<a href="/Risk-First-Second-Edition">
					<img
						className={styles.cover}
						src="/img/Cover_Image_Second_Edition.jpg"
						alt="Risk-First Software Development Second Edition"
					/>
				</a>
			</>
			<div className={styles.innerAside}>
				<h2>The Book</h2>
				<p className={styles.edition}>Second Edition · 265 pages</p>
				<p className={styles.description}>
					265 pages that reframe software development around the force that shapes
					every decision: risk. Risk-First peels back the onion — not a methodology
					telling you what to do, but a toolbox and pattern language to help you
					figure out what you should do, and communicate your case to others.
				</p>
				<p className={styles.description}>
					Gain the vocabulary, tools, and confidence to identify, evaluate, and
					mitigate risks before they derail your project — whether you are managing
					a startup product, steering an enterprise system, or incorporating AI.
				</p>
				<div className={styles.ctaGroup}>
					<a
						className={styles.ctaBuy}
						href="https://www.amazon.com/dp/B0GJG2TRC9"
						target="_blank"
						rel="noopener noreferrer"
					>
						Buy on Amazon
					</a>
					<a
						className={styles.ctaBuy}
						href="https://pragprog.com/titles/rmrfsd/risk-first-software-development-second-edition"
						target="_blank"
						rel="noopener noreferrer"
					>
						Pragmatic Bookshelf
					</a>
					<a className={styles.ctaFree} href="/Build-The-Movement">
						Free Digital Copy
					</a>
				</div>
			</div>
			<></>
		</HomeSection>
	);
}
