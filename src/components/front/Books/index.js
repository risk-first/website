import React from 'react';
import styles from './styles.module.css'
import HomeSection from "../HomeSection";

export default function Books() {
	return (
		<>
			<HomeSection reversed="false">
				<>
					<a href="/Risk-First-Second-Edition"><img src="/img/Cover_Image_Second_Edition.jpg" /></a>
				</>
				<div className={styles.innerAside}>
					<h2>Buy The Book!</h2>
					<p><a href="/Risk-First-Second-Edition">Now Available</a> from Amazon, the Pragmatic Bookshelf and all good book stores.</p>
				</div>
			</HomeSection>
		</>
	)
}


