import React from 'react';
import styles from './styles.module.css'
import HomeSection from "../HomeSection";
import ImageBullet from "../ImageBullet";

export default function Benefits() {
	return (
		<HomeSection reverse="true">
			<div className={styles.innerAside}>
				<h2>What Are The Benefits?</h2>
			</div>
			<>
				<ImageBullet  image="/img/front/question.svg" alt="Connect Icon">
					Make Better Decisions!
				</ImageBullet>
				<ImageBullet  image="/img/front/directors.svg" alt="Connect Icon"> 
				Talk The Language of the C-Suite!!
				</ImageBullet>
				<ImageBullet  image="/img/front/todo.svg" alt="Connect Icon"> 
				Evaluate Software Development Methods and Processes!!!
				</ImageBullet>
				<ImageBullet  image="/img/front/argument.svg" alt="Connect Icon"> 
				Win Arguments!!!!
				</ImageBullet>
			</>
			<p>
				<a className={styles.cta} href="/overview/Quick-Summary">READ THE SUMMARY</a>
			</p>
		</HomeSection>


	)
}



