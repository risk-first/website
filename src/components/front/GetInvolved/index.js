import React from 'react';
import styles from './styles.module.css'
import HomeSection from "../HomeSection";
import ImageBullet from "../ImageBullet";


export default function Parts() {

	return (
		<HomeSection reverse="true">
			<div className={styles.innerAside}>
				<h2>Get Involved</h2>
			</div>
			<div className={styles.callToAction}>
				<ImageBullet image="/img/front/hand-up.svg" alt="Movement Icon">
					<a href="/Build-The-Movement">Build The Movement & Get A Free Book!</a>
				</ImageBullet>
				<ImageBullet image="/img/front/star.svg" alt="Connect Icon">
					<a href="https://github.com/risk-first/website">Star The Repo On GitHub!</a>
				</ImageBullet>
				<ImageBullet image="/img/front/github.svg" alt="Connect Icon">
					Join Our <a href="https://github.com/orgs/risk-first/teams/risk-first-team">GitHub Team</a> (and receive regular updates)
				</ImageBullet>
				<ImageBullet image="/img/front/community.svg" alt="Community Icon">
					<a href="/community/Start">Explore Community Content</a> — talks, interviews, music & more
				</ImageBullet>
			</div>
		</HomeSection>
	);
};

