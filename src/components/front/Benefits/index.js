import React from 'react';
import styles from './styles.module.css';
import stackStyles from '../HomeSectionStack/styles.module.css';
import HomeSectionStack from '../HomeSectionStack';

const BENEFITS = [
	{
		icon: '/img/front/argument.svg',
		title: 'Explain Trade-offs Clearly',
		description: 'Frame decisions in terms of the risks being managed and accepted.',
	},
	{
		icon: '/img/front/community.svg',
		title: 'Build Consensus',
		description: 'Align teams around shared understanding of what matters most.',
	},
	{
		icon: '/img/front/question.svg',
		title: 'Make Better Decisions',
		description: 'Choose practices deliberately rather than by habit or fashion.',
	},
	{
		icon: '/img/front/directors.svg',
		title: 'Talk the Language of the C-Suite',
		description: 'Connect engineering choices to business outcomes executives care about.',
	},
	{
		icon: '/img/front/todo.svg',
		title: 'Evaluate Methods and Processes',
		description: 'Compare Agile, Waterfall, DevOps and more through a risk lens.',
	},
];

export default function Benefits() {
	return (
		<HomeSectionStack alt>
			<div className={stackStyles.sectionHeading}>
				<h2>What Are The Benefits?</h2>
				<p>Risk-First gives teams and leaders a shared vocabulary for making better software decisions.</p>
			</div>
			<div className={styles.grid}>
				{BENEFITS.map((item) => (
					<div key={item.title} className={styles.card}>
						<img className={styles.icon} src={item.icon} alt="" />
						<h3 className={styles.cardTitle}>{item.title}</h3>
						<p className={styles.cardDesc}>{item.description}</p>
					</div>
				))}
			</div>
			<p className={styles.ctaWrap}>
				<a className={styles.cta} href="/overview/Quick-Summary">Read the Summary</a>
			</p>
		</HomeSectionStack>
	);
}
