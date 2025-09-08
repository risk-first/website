import React from 'react';
import styles from './styles.module.css'
import HomeSection from "../HomeSection";
import ImageBullet from "../ImageBullet";
import TagList from '../../../theme/TagList'


export default function Books() {
	return (
		<>
			<HomeSection reversed="false">
				<>
					<a href="/Risk-First-Second-Edition"><img src="/img/Cover_Image_Second_Edition.jpg" /></a>
				</>
				<div className={styles.innerAside}>
					<h2>Second Edition <strong>beta</strong></h2>
					<p>Now Available in <a href="/Risk-First-Second-Edition">Digital Format!</a></p>
				</div>
			</HomeSection>
			<HomeSection reversed="true">
				<div className={styles.innerAside}>
					<h2>Read All About It</h2>
					<p>Buy The <a href="/The-Menagerie">Original Print Edition</a> of Risk-First</p>
				</div>
				<>
					<a href="/The-Menagerie"><img src="/img/Cover_Image_Bordered.png" /></a>
				</>
			</HomeSection>
		</>
	)
}


