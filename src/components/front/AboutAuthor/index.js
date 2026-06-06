import React from 'react';
import styles from './styles.module.css';
import HomeSection from '../HomeSection';

export default function AboutAuthor() {
	return (
		<HomeSection>
			<div className={styles.photoCol}>
				<img
					className={styles.photo}
					src="/img/community/rob-moffat.jpg"
					alt="Rob Moffat"
				/>
			</div>
			<div className={styles.bioCol}>
				<h2>About Rob Moffat</h2>
				<p className={styles.bio}>
					Rob Moffat is a software developer with deep experience in the finance industry
					leading regulatory, risk, and transformation IT projects at top-tier investment banks
					in London. A strong advocate for open source, he currently serves as the chief
					architect for FINOS, the Financial Open Source initiative of the Linux Foundation.
				</p>
				<ul className={styles.bioList}>
					<li>Chief Architect at FINOS</li>
					<li>Author of <em>Risk-First Software Development</em></li>
					<li>Podcast host</li>
					<li>Conference speaker</li>
				</ul>
				<div className={styles.links}>
					<a href="https://robmoff.at" target="_blank" rel="noopener noreferrer">
						robmoff.at
					</a>
					<a href="https://www.finos.org/team" target="_blank" rel="noopener noreferrer">
						FINOS Team
					</a>
					<a
						href="https://www.linkedin.com/in/robmoffat/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</div>
			</div>
			<></>
		</HomeSection>
	);
}
