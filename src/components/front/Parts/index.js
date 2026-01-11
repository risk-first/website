import React from 'react';
import styles from './styles.module.css'
import HomeSection2 from "../HomeSection2";


export default function GetInvolved() {

	return (
		<HomeSection2>
			<div className={styles.innerAside}>
				<h2>How Does It Work?</h2>
				<p className={styles.explanation}>Risk-First takes the view that a project's <a href="/tags/Goal">Goals</a> are
					obstructed by <a href="/risks/Start">Risks</a>.  These risks can be managed by Software Development <a href="/risks/Start">Practices</a>,
					which are often packaged up as different methodologies (think Scrum, XP, Lean, DevOps), or <a href="/methods/Start">Risk Frameworks</a> as we call them here.</p>
			</div>
			<div className={styles.showcaseOuter}>
				<img className={styles.showcaseImage} src="/img/generated/introduction/risk_framework_2.svg" />
			</div>
			<div className={styles.explanation}>
				<p>But in order to meet your projects' goals, you'll have to choose the right practices to tackle the most important risks.</p>
				<p className={styles.explanationLarge}>That's Risk Management</p>
				<p><a className={styles.cta} href="/overview/Quick-Summary">READ THE SUMMARY</a></p>
			</div>
		</HomeSection2>
	);
};

