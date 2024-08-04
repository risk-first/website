import React from 'react';
import styles from './styles.module.css'
import MonoIcon from '../MonoIcon'

// left, right panels, a call to action adn a footer icon
export default ({children, alt, reverse}) => {
	return (
		<section className={alt ? styles.homeSectionAlt : styles.homeSection}>
			<div className={reverse ? styles.innerFlexReverse : styles.innerFlex}>
				<div className={styles.item}>
					{ children[0] }
				</div>
				<div className={styles.item}>
					{ children[1] }
				</div>
			</div>
			
			<div className={styles.callToAction}>
				{ children[2] }
			</div>
			
			<div className={styles.footerImage}>
				<MonoIcon />
			</div>
		</section> )
}


