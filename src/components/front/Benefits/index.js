import React from 'react';
import styles from './styles.module.css';
import stackStyles from '../HomeSectionStack/styles.module.css';
import HomeSectionStack from '../HomeSectionStack';

const BENEFITS = [
	{
		icon: '/img/front/argument.svg',
		title: 'Explain Trade-offs Clearly',
		description: 'Frame decisions in terms of the risks being managed and accepted.',
		href: '/thinking/Risk-First-Diagrams',
	},
	{
		icon: '/img/front/community.svg',
		title: 'Build Consensus',
		description: 'Align teams around shared understanding of what matters most.',
		href: '/thinking/A-Conversation',
	},
	{
		icon: '/img/front/question.svg',
		title: 'Make Better Decisions',
		description: 'Choose practices deliberately rather than by habit or fashion.',
		href: '/thinking/Evaluating-Risk',
	},
	{
		icon: '/img/front/directors.svg',
		title: 'Talk the Language of the C-Suite',
		description: 'Connect engineering choices to business outcomes executives care about.',
		href: '/thinking/Enterprise-Risk',
	},
	{
		icon: '/img/front/todo.svg',
		title: 'Evaluate Methods and Processes',
		description: 'Compare Agile, Waterfall, DevOps and more through a risk lens.',
		href: '/methods/Start',
	},
];

export default function Benefits() {
	return (
		<HomeSectionStack>
			<div className={stackStyles.sectionHeading}>
				<h2>What Are The Benefits?</h2>
				<p>Risk-First gives teams and leaders a shared vocabulary for making better software decisions.</p>
			</div>
			<div className={styles.grid}>
				{BENEFITS.map((item) => (
					<a key={item.title} className={styles.card} href={item.href}>
						<img className={styles.icon} src={item.icon} alt="" />
						<h3 className={styles.cardTitle}>{item.title}</h3>
						<p className={styles.cardDesc}>{item.description}</p>
						<span className={styles.cardLink}>Read more →</span>
					</a>
				))}
			</div>
		</HomeSectionStack>
	);
}
