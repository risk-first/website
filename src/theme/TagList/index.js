import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css'


function DocItemImage({ doc }) {
	const pl = doc.permalink
	const imageLink = "/img/generated/single/" + pl + ".png"

	return (
		<Link to={doc.permalink}>
			<article className={styles.docItem}>
				<div className={styles.columns}>
					<div className={styles.left}>
						<img src={imageLink} className={styles.articleImage} />
					</div>
					<div className={styles.right}>
						<h3>{doc.title}</h3>
						<p className={styles.description}>{doc.description}</p>
					</div>
				</div>
			</article>
		</Link>
	);
}



export default function TagList(props) {

	function uniqueOnly(value, index, array) {
		return array.map(o => o.permalink).indexOf(value.permalink) == index;
	}

	const allTags = usePluginData('category-listing');
	const oneTag = props.tag ? allTags[props.tag] : Object.values(allTags)
		.flatMap(a => a)
		.filter(uniqueOnly)
	const filter = props.filter ? '/' + props.filter + '/' : ''
	const location = useLocation().pathname;

	oneTag.sort((a, b) => a.order - b.order);

	return (
		<div key={props.tag} className={styles.tagList}>
			{
				oneTag
					.filter(d => d.permalink.indexOf(filter) > -1)
					.filter(d => d.permalink.indexOf(location) == -1)
					.map(d => <DocItemImage key={d} doc={d} />)
			}
		</div>
	);
}