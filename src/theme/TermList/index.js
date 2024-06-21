import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';
import styles from './styles.module.css'
import clsx from 'clsx';


function Term({ name, description, anchor, permalink }) {
	const link = (permalink ? permalink + ( anchor ? "#"+anchor : "") : "") 
	const tagLink = "/tags/" + name.replaceAll(" ","-")
	return (
		
		<article className={styles.docItem}>
			<Link key={link} to={link}><h3>{name}</h3></Link>
			<p className={styles.description}>{description}  <Link className={styles.termTag} href={tagLink}>(tagged)</Link></p>
   		</article>
	);
}


function sortAndUnique(l) {
	const uniqueArray = l.filter(function(item, pos) {
    	return l.findIndex(e => e.name == item.name) == pos;
	})
	
	const sorted = uniqueArray.sort((a, b) => a.name.localeCompare(b.name))
	return sorted
}

export default function TermList({details}) {

	var definitions = []

	if (details) {
		// terms on this page
		definitions = details.definitions
	} else {
		// all terms from everywhere
		const allTags = usePluginData('category-listing');
		const allDocs = Object.values(allTags).flatMap(v => v)
			
		definitions = allDocs
			.flatMap(doc => (doc.frontMatter.definitions ?? []).map(t => {
			return {
				name: t.name,
				description: t.description,
				anchor: t.anchor,
				permalink: doc.permalink
			}
		}))
	}
	

	const sorted = sortAndUnique(definitions.filter(d => d.name !=null))

	return (
		<div className={styles.tagList}>
			{
				sorted.map(d => <Term key={d.name} name={d.name} description={d.description} permalink={d.permalink} anchor={d.anchor}  />)
			}
		</div>
	);
}