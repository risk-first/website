import React from 'react';
import stackStyles from '../HomeSectionStack/styles.module.css';
import HomeSectionStack from '../HomeSectionStack';
import TagList from '../../../theme/TagList';

export default function FromTheCommunity() {
	return (
		<HomeSectionStack alt>
			<div className={stackStyles.sectionHeading}>
				<h2>From the Community</h2>
				<p>
					Interviews, keynotes, and conversations about Risk-First in the wild.
				</p>
			</div>
			<TagList
				tag="Front-Page-Community"
				variant="cards"
				wrap
				linkLabel="Watch →"
			/>
		</HomeSectionStack>
	);
}
