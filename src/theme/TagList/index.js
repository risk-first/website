import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css'


function DocItemImage({ doc }) {
	const pl = doc.permalink
	const stripped = pl.endsWith('/') ? pl+"index" : pl
	const imageLink = "/img/generated/single/" + stripped + ".png"

	return (
		
		<article className={styles.docItem}>
			<div className={styles.columns}>
				<div className={styles.left}>
					<img src={imageLink} className={styles.articleImage} />
				</div>
				<div className={styles.right}>
					<Link key={doc.permalink} to={doc.permalink}><h3>{doc.title}</h3></Link>
					<p className={styles.description}>{doc.description}</p>
				</div>
			</div>
		</article>
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
	console.log(JSON.stringify(oneTag))
	const filter = props.filter ? '/' + props.filter + '/' : ''
	const location = useLocation().pathname;

	oneTag.sort((a, b) => a.order - b.order);
	
	console.log(oneTag[0].permalink.indexOf(location))
	console.log(filter)

	return (
		<div className={styles.tagList}>
			{
				oneTag
					.filter(d => d.permalink.indexOf(filter) > -1)
					.filter(d => d.permalink != location)
					.map(d => <DocItemImage key={d.permalink} doc={d} />)
			}
		</div>
	);
}