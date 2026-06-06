import React from 'react';
import styles from './styles.module.css';
import HomeSection from '../HomeSection';

const LOGOS = [
	{ name: 'Pragmatic Bookshelf', image: '/img/logos/pragmatic.svg' },
	{ name: 'FINOS', image: '/img/logos/finos.svg' },
	{ name: 'Software Engineering Radio', image: '/img/logos/ser.svg' },
	{ name: 'Open Source Finance Forum', image: '/img/logos/osff.svg' },
	{ name: 'Scott Logic', image: '/img/logos/scott-logic.svg' },
	{ name: 'NatWest', image: '/img/logos/natwest.svg' },
];

export default function SocialProof() {
	return (
		<HomeSection>
			<div className={styles.inner}>
				<p className={styles.statement}>
					Discussed by software leaders, architects, open source maintainers and
					technology executives across the industry.
				</p>
				<div className={styles.logoStrip}>
					{LOGOS.map((logo) => (
						<div key={logo.name} className={styles.logoItem}>
							<img
								className={styles.logoImg}
								src={logo.image}
								alt={logo.name}
								onError={(e) => {
									e.target.style.display = 'none';
									e.target.nextSibling.style.display = 'inline-block';
								}}
							/>
							<span className={styles.logoBadge}>{logo.name}</span>
						</div>
					))}
				</div>
			</div>
			<></>
			<></>
		</HomeSection>
	);
}
