import React from 'react';
import styles from './styles.module.css';
import stackStyles from '../HomeSectionStack/styles.module.css';
import HomeSectionStack from '../HomeSectionStack';

export default function Parts() {
	return (
		<HomeSectionStack alt>
			<div className={stackStyles.sectionHeading}>
				<h2>How Does It Work?</h2>
				<p>
					Risk-First takes the view that a project's <a href="/tags/Goal">goals</a> are
					obstructed by <a href="/risks/Start">risks</a>. These risks can be managed by software
					development <a href="/practices/Start">practices</a>, which are often packaged up as
					different methodologies (think Scrum, XP, Lean, DevOps), or{' '}
					<a href="/methods/Start">risk frameworks</a> as we call them here.
				</p>
			</div>
			<div className={styles.showcaseOuter}>
				<img
					className={styles.showcaseImage}
					src="/img/generated/introduction/risk_framework_2.svg"
					alt="Risk-First framework diagram"
				/>
			</div>
			<div className={styles.footer}>
				<p>
					But in order to meet your project's goals, you'll have to choose the right practices
					to tackle the most important risks.
				</p>
				<p className={styles.tagline}>That's Risk Management</p>
				<a className={styles.cta} href="/overview/Quick-Summary">Read the Summary</a>
			</div>
		</HomeSectionStack>
	);
}
