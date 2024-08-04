import React from 'react';
import styles from './styles.module.css'
import HomeSection from "../HomeSection";
import ImageBullet from "../ImageBullet";

export default function Benefits() {
	return (
		<HomeSection alt="true">
			<div className={styles.innerAside}>
				<h2>What Is It?</h2>
			</div>
			<>
				<ImageBullet  image="/img/front/risk.svg" alt="Connect Icon">
					We can look at software projects in terms of risks.
				</ImageBullet>
				<ImageBullet  image="/img/front/hierarchy.svg" alt="Connect Icon"> 
				We can break down risks on a project methodically.
				</ImageBullet>
				<ImageBullet  image="/img/front/todo.svg" alt="Connect Icon"> 
				We can analyse tools and techniques in terms of how well they manage risk.
				</ImageBullet>
				<ImageBullet  image="/img/front/r1-icon.svg" alt="Connect Icon"> 
				Risk-First: Software Development meets Risk Management.
				</ImageBullet>
			</>
			<p>
				<a className={styles.cta} href="/overview/Quick-Summary">READ THE SUMMARY</a>
			</p>
		</HomeSection>


	)
}



