import React from 'react';
import styles from './styles.module.css';
import stackStyles from '../HomeSectionStack/styles.module.css';
import HomeSectionStack from '../HomeSectionStack';

function imageFor(permalink) {
	return `/img/generated/single${permalink}.svg`;
}

const ROWS = [
	{
		practice: 'Automated Testing',
		practiceHref: '/practices/Testing-and-Quality-Assurance/Automated-Testing',
		practiceDescription: 'Writing and running tests for individual units or components of the software.',
		risk: 'Implementation Risk',
		riskHref: '/risks/Implementation-Risk',
		riskDescription: 'Risk that the functionality you are providing doesn\'t correctly implement the perceived solution you are trying to build for your clients.',
	},
	{
		practice: 'Automation',
		practiceHref: '/practices/Deployment-And-Operations/Automation',
		practiceDescription: 'Using machines to perform repetitive tasks.',
		risk: 'Operational Risk',
		riskHref: '/risks/Operational-Risk',
		riskDescription: 'The risk of loss resulting from inadequate or failed internal processes, people and systems or from external events.',
	},
	{
		practice: 'Pair Programming',
		practiceHref: '/practices/Development-And-Coding/Pair-Programming',
		practiceDescription: 'Two developers working together on the same code.',
		risk: 'Internal Model Risk',
		riskHref: '/risks/Internal-Model-Risk',
		riskDescription: 'Risks due to the differences between reality and an internal model of reality, and the assumption that they are equivalent.',
	},
	{
		practice: 'Monitoring',
		practiceHref: '/practices/Deployment-And-Operations/Monitoring',
		practiceDescription: 'Continuous observation and tracking of a system, team or person, perhaps with respect to performance, security or availability.',
		risk: 'Reliability Risk',
		riskHref: '/risks/Reliability-Risk',
		riskDescription: 'Risks of not getting benefit from a dependency due to its reliability.',
	},
	{
		practice: 'Configuration Management',
		practiceHref: '/practices/Deployment-And-Operations/Configuration-Management',
		practiceDescription: 'Managing and maintaining configuration settings of the software.',
		risk: 'Complexity Risk',
		riskHref: '/risks/Complexity-Risk',
		riskDescription: 'Risks caused by the weight of complexity in the systems we create, and their resistance to change and comprehension.',
	},
	{
		practice: 'Review',
		practiceHref: '/practices/Communication-And-Collaboration/Review',
		practiceDescription: 'Conducting systematic reviews of work done.',
		risk: 'Complexity Risk',
		riskHref: '/risks/Complexity-Risk',
		riskDescription: 'Risks caused by the weight of complexity in the systems we create, and their resistance to change and comprehension.',
	},
];

function ItemCell({ href, image, title }) {
	return (
		<div className={styles.itemCell}>
			<a className={styles.cellTitle} href={href}>{title}</a>
			<img className={styles.cellIcon} src={image} alt="" />
		</div>
	);
}

function DescCell({ description }) {
	return (
		<p className={styles.cellDesc}><em>{description}</em></p>
	);
}

export default function PracticeRiskTable() {
	return (
		<HomeSectionStack>
			<div className={stackStyles.sectionHeading}>
				<h2>Every Practice Manages Risk</h2>
				<p>
					Every software development practice exists to manage a specific kind of risk.
					Risk-First makes that connection explicit — so you can choose the right practices
					for the risks you actually face.
				</p>
			</div>
			<div className={styles.tableWrap}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th colSpan={2}>Adopting This Practice...</th>
							<th colSpan={2}>...Can Help Manage This Risk</th>
						</tr>
					</thead>
					<tbody>
						{ROWS.map((row) => (
							<tr key={row.practice}>
								<td className={styles.itemCol}>
									<ItemCell
										href={row.practiceHref}
										image={imageFor(row.practiceHref)}
										title={row.practice}
									/>
								</td>
								<td className={styles.descCol}>
									<DescCell description={row.practiceDescription} />
								</td>
								<td className={styles.itemCol}>
									<ItemCell
										href={row.riskHref}
										image={imageFor(row.riskHref)}
										title={row.risk}
									/>
								</td>
								<td className={styles.descCol}>
									<DescCell description={row.riskDescription} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className={styles.mobileCards}>
					{ROWS.map((row) => (
						<div key={row.practice} className={styles.mobileCard}>
							<div className={styles.mobileLabel}>Practice</div>
							<ItemCell
								href={row.practiceHref}
								image={imageFor(row.practiceHref)}
								title={row.practice}
							/>
							<DescCell description={row.practiceDescription} />
							<div className={styles.mobileLabel}>Risk Managed</div>
							<ItemCell
								href={row.riskHref}
								image={imageFor(row.riskHref)}
								title={row.risk}
							/>
							<DescCell description={row.riskDescription} />
						</div>
					))}
				</div>
			</div>
		</HomeSectionStack>
	);
}
