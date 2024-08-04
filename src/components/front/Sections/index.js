import React from 'react';
import styles from './styles.module.css'
import HomeSection from "../HomeSection";
import ImageBullet from "../ImageBullet";
import TagList from '../../../theme/TagList'


export default function Books() {
	return (
		<HomeSection alt="true">
			<div className={styles.innerAside}>
				<h2>Risk-First Tracks</h2>
				<p>Risk-First is split into several main tracks, dealing with different areas of Software Development</p>
			</div>
			<>
				<TagList tag="Read All About It" />
			</>
		</HomeSection>


	)
}


