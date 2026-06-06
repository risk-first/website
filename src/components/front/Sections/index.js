import React from 'react';
import styles from './styles.module.css';
import stackStyles from '../HomeSectionStack/styles.module.css';
import HomeSectionStack from '../HomeSectionStack';
import TagList from '../../../theme/TagList';

export default function Sections() {
	return (
		<HomeSectionStack>
			<div className={stackStyles.sectionHeading}>
				<h2>Risk-First Tracks</h2>
				<p>
					Risk-First is split into several main tracks, dealing with different areas of
					software development.
				</p>
			</div>
			<div className={styles.trackRow}>
				<TagList tag="Read All About It" variant="cards" wrap muted />
			</div>
		</HomeSectionStack>
	);
}
