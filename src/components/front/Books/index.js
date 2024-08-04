import React from 'react';
import styles from './styles.module.css'
import HomeSection from "../HomeSection";
import ImageBullet from "../ImageBullet";
import TagList from '../../../theme/TagList'


export default function Books() {
	return (
		<HomeSection reversed="true">
			<div className={styles.innerAside}>
				<h2>Read All About It</h2>
				<p>Buy The Print Edition of Risk-First</p>
			</div>
			<>
				<a href="/The-Menagerie"><img src="/img/Cover_Image_Bordered.png" /></a>
			</>
			<div>
				<p><a className={styles.cta} href="/The-Menagerie">BUY THE BOOK</a></p>
			</div>
		</HomeSection>


	)
}


