import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css'


function imageLinkFor(doc) {
	const pl = doc.permalink;
	const stripped = pl.endsWith('/') ? pl + 'index' : pl;
	return '/img/generated/single/' + stripped + '.svg';
}

function DocItemImage({ doc }) {
	const imageLink = imageLinkFor(doc);

	return (
		<article className={styles.docItem}>
			<div className={styles.columns}>
				<div className={styles.left}>
					<img src={imageLink} className={styles.articleImage} alt="" />
				</div>
				<div className={styles.right}>
					<Link key={doc.permalink} to={doc.permalink}><h3>{doc.title}</h3></Link>
					<p className={styles.description}>{doc.description}</p>
				</div>
			</div>
		</article>
	);
}

function DocItemCard({ doc }) {
	const imageLink = imageLinkFor(doc);

	return (
		<Link to={doc.permalink} className={styles.card}>
			<img className={styles.cardPhoto} src={imageLink} alt="" />
			<div className={styles.cardBody}>
				<h3 className={styles.cardTitle}>{doc.title}</h3>
				<p className={styles.cardTeaser}>{doc.description}</p>
				<span className={styles.cardLink}>Explore →</span>
			</div>
		</Link>
	);
}

const sorts = {
	"title" : (a, b) => { return a.title.localeCompare(b.title) },
	"default" : (a, b) => { return a.order - b.order }
} 



export default function TagList(props) {

	function uniqueOnly(value, index, array) {
		return array.map(o => o.permalink).indexOf(value.permalink) == index;
	}

	const allTags = usePluginData('category-listing');
	const oneTag = props.tag ? allTags[props.tag] : Object.values(allTags)
		.flatMap(a => a)
		.filter(uniqueOnly)

	if (!oneTag) {
		return <p><em>No documents tagged</em></p>;
	}

	const filter = props.filter ? '/' + props.filter + '/' : ''
	const location = useLocation().pathname;
	
	const sort = props.sort ?? "default"

	//console.log("Filter: "+filter)

	oneTag.sort(sorts[sort]).filter(uniqueOnly);
	
	// oneTag
	//.filter(d => d.permalink.indexOf(filter) > -1)
	//	.forEach(d => console.log(d.permalink))



	const docs = oneTag
		.filter(d => d.permalink.indexOf(filter) > -1)
		.filter(d => d.permalink != location);

	const Item = props.variant === 'cards' ? DocItemCard : DocItemImage;
	const listClass = props.variant === 'cards' ? styles.tagListCards : styles.tagList;

	return (
		<div className={listClass}>
			{docs.map(d => <Item key={d.permalink} doc={d} />)}
		</div>
	);
}