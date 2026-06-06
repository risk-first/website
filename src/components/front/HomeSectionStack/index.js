import React from 'react';
import styles from './styles.module.css';
import MonoIcon from '../MonoIcon';

export default function HomeSectionStack({ children, alt }) {
	return (
		<section className={alt ? styles.homeSectionAlt : styles.homeSection}>
			<div className={styles.innerStack}>
				{children}
			</div>
			<div className={styles.footerImage}>
				<MonoIcon />
			</div>
		</section>
	);
}
