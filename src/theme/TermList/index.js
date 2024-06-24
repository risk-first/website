import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';
import styles from './styles.module.css'
import clsx from 'clsx';


function Term({ name, description, anchor, permalink, own_term }) {
	const link = (permalink ? permalink + ( anchor ? "#"+anchor : "") : "") 
	const tagLink = "/tags/" + name.replaceAll(" ","-")
	return (
		
		<article className={styles.docItem}>
			<h3><Link key={link} to={link} title="Go to main definition">{name}</Link> { own_term ? <span className={styles.ownTerm}>Risk-First Term</span> : null}</h3> 
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
	// all terms from everywhere
	const allTags = usePluginData('category-listing');
	const allDocs = Object.values(allTags).flatMap(v => v)
	const grossDefinitions = allDocs
			.flatMap(doc => (doc.frontMatter.definitions ?? []).map(t => {
			return {
				name: t.name,
				own_term: t.own_term,
				description: t.description,
				anchor: t.anchor,
				permalink: doc.permalink
			}
		}))
	
	const allDefinitions = sortAndUnique(grossDefinitions)	
	
	var definitions = []

	if (details) {
		if (details.definitions) {
			definitions = definitions.concat(details.definitions)
		}

		(details?.tags ?? []).forEach(term => {
			const found = allDefinitions.find(d => d.name == term)
			definitions.push(found)
		})
	} else {
		definitions = allDefinitions
	}
	
	const sorted = sortAndUnique(definitions.filter(d => d.name !=null))
	//console.log(JSON.stringify(sorted))

	return (
		<div className={styles.tagList}>
			{
				sorted.map(d => <Term key={d.name} own_term={d.own_term} name={d.name} description={d.description} permalink={d.permalink} anchor={d.anchor}  />)
			}
		</div>
	);
}