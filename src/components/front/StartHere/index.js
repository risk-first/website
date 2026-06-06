import React from 'react';
import styles from './styles.module.css';
import HomeSection from '../HomeSection';

const STEPS = [
	{
		step: 1,
		title: 'Read the 5-minute summary',
		description: 'Get the core idea in five minutes',
		href: '/overview/Quick-Summary',
		button: 'Read Summary',
	},
	{
		step: 2,
		title: 'Explore the software risk taxonomy',
		description: 'See how risks are categorised',
		href: '/risks/Start',
		button: 'Explore Risks',
	},
	{
		step: 3,
		title: 'Learn the Risk Framework',
		description: 'Understand goals, risks, and practices',
		href: '/methods/Start',
		button: 'Learn Framework',
	},
	{
		step: 4,
		title: 'Read the book',
		description: 'The complete framework in one guide',
		href: '/Risk-First-Second-Edition',
		button: 'Read the Book',
	},
];

export default function StartHere() {
	return (
		<HomeSection alt="true">
			<div className={styles.innerAside}>
				<h2>New to Risk-First?</h2>
				<p className={styles.subtitle}>Start here — a four-step path through the material.</p>
			</div>
			<div className={styles.grid}>
				{STEPS.map((item) => (
					<div key={item.step} className={styles.card}>
						<span className={styles.stepNum}>{item.step}</span>
						<h3 className={styles.cardTitle}>{item.title}</h3>
						<p className={styles.cardDesc}>{item.description}</p>
						<a className={styles.cardBtn} href={item.href}>{item.button}</a>
					</div>
				))}
			</div>
			<></>
		</HomeSection>
	);
}
