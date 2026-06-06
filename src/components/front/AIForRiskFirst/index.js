import React from 'react';
import styles from './styles.module.css';
import HomeSection from '../HomeSection';

const LINKS = [
	{
		title: 'AI Risks Hub',
		description: 'Explore the Risk-First track on artificial intelligence risk',
		href: '/ai/Start',
	},
	{
		title: 'Agentic Software Development',
		description: 'Risks when AI autonomously writes, modifies, and deploys code',
		href: 'https://agentic-software-development.riskfirst.org',
		external: true,
	},
	{
		title: 'AI Governance Framework',
		description: 'FINOS open-source framework for generative AI in financial services',
		href: 'https://github.com/finos/ai-governance-framework',
		external: true,
	},
	{
		title: 'AI on the Podcast',
		description: 'Colin Eberhardt on AI governance, agentic coding, and open source',
		href: '/community/Risk-First-Podcast',
	},
];

export default function AIForRiskFirst() {
	return (
		<HomeSection>
			<div className={styles.innerAside}>
				<h2>Risk-First for AI</h2>
				<p className={styles.blurb}>
					What changes when software is increasingly designed, generated and operated by AI?
				</p>
			</div>
			<div className={styles.linkGrid}>
				{LINKS.map((link) => (
					<a
						key={link.title}
						className={styles.linkCard}
						href={link.href}
						{...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
					>
						<h3 className={styles.linkTitle}>{link.title}</h3>
						<p className={styles.linkDesc}>{link.description}</p>
					</a>
				))}
			</div>
			<></>
		</HomeSection>
	);
}
