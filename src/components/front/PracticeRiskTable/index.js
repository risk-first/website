import React from 'react';
import styles from './styles.module.css';
import HomeSection from '../HomeSection';

const ROWS = [
	{
		practice: 'Automated Testing',
		practiceHref: '/practices/Testing-and-Quality-Assurance/Automated-Testing',
		risk: 'Implementation Risk',
		riskHref: '/risks/Implementation-Risk',
	},
	{
		practice: 'Automation',
		practiceHref: '/practices/Deployment-And-Operations/Automation',
		risk: 'Operational Risk',
		riskHref: '/risks/Operational-Risk',
	},
	{
		practice: 'Pair Programming',
		practiceHref: '/practices/Development-And-Coding/Pair-Programming',
		risk: 'Internal Model Risk',
		riskHref: '/risks/Internal-Model-Risk',
	},
	{
		practice: 'Monitoring',
		practiceHref: '/practices/Deployment-And-Operations/Monitoring',
		risk: 'Reliability Risk',
		riskHref: '/risks/Reliability-Risk',
	},
	{
		practice: 'Configuration Management',
		practiceHref: '/practices/Deployment-And-Operations/Configuration-Management',
		risk: 'Complexity Risk',
		riskHref: '/risks/Complexity-Risk',
	},
	{
		practice: 'Review',
		practiceHref: '/practices/Communication-And-Collaboration/Review',
		risk: 'Complexity Risk',
		riskHref: '/risks/Complexity-Risk',
	},
];

export default function PracticeRiskTable() {
	return (
		<HomeSection>
			<div className={styles.innerAside}>
				<h2>Every Practice Manages Risk</h2>
				<p className={styles.intro}>
					Every software development practice exists to manage a specific kind of risk.
					Risk-First makes that connection explicit — so you can choose the right practices
					for the risks you actually face.
				</p>
			</div>
			<div className={styles.tableWrap}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Practice</th>
							<th>Risk Managed</th>
						</tr>
					</thead>
					<tbody>
						{ROWS.map((row) => (
							<tr key={row.practice}>
								<td>
									<a href={row.practiceHref}>{row.practice}</a>
								</td>
								<td>
									<a href={row.riskHref}>{row.risk}</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className={styles.mobileCards}>
					{ROWS.map((row) => (
						<div key={row.practice} className={styles.mobileCard}>
							<div className={styles.mobileLabel}>Practice</div>
							<div className={styles.mobileValue}>
								<a href={row.practiceHref}>{row.practice}</a>
							</div>
							<div className={styles.mobileLabel}>Risk Managed</div>
							<div className={styles.mobileValue}>
								<a href={row.riskHref}>{row.risk}</a>
							</div>
						</div>
					))}
				</div>
			</div>
			<></>
		</HomeSection>
	);
}
