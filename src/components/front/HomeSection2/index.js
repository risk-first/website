import React from 'react';
import styles from './styles.module.css'
import MonoIcon from '../MonoIcon'

// title, central panel, a call to action adn a footer icon
export default ({ children, alt }) => {
	return (
		<section className={alt ? styles.homeSectionAlt : styles.homeSection}>
			<div className={styles.title}>
				{children[0]}
			</div>

			<div className={styles.main}>
				{children[1]}
			</div>

			<div className={styles.callToAction}>
				{children[2]}
			</div>

			<div className={styles.footerImage}>
				<MonoIcon />
			</div>
		</section>)
}


