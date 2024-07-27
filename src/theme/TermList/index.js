import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css'
import clsx from 'clsx';

function generateMarkdownHeaderID(header) {
    // Step 1: Convert all text to lowercase
    let id = header.toLowerCase();

    // Step 2: Replace all non-word characters with hyphens
    id = id.replace(/[^\w\s]/g, '-');

    // Step 3: Replace all spaces with hyphens
    id = id.replace(/\s+/g, '-');

    // Step 4: Replace two or more hyphens in a row with one hyphen
    id = id.replace(/-+/g, '-');

    return id;
}

function Term({ name, description, anchor, permalink, own_term, children }) {
	const link = (permalink ? permalink + ( anchor ? "#"+anchor : "") : "") 
	const tagLink = "/tags/" + name.replaceAll(" ","-")
	const c = (children && children.length >0) 
	//const id = generateMarkdownHeaderID(name)

	return (
		
		<article className={styles.docItem}>
			<Heading as="h3"><Link key={link} to={link} title="Go to main definition">{name}</Link> { own_term ? <span className={styles.ownTerm}>Risk-First Term</span> : null}</Heading> 
			<p className={styles.description}>{description} <Link className={styles.termTag} href={tagLink}>(View Tag)</Link> </p>
			
			{
				c ? (<div>
						<p className={styles.description}>Related Terms:</p>
						<ul>{ children.map(c => <li>{c}</li>) } </ul>
					</div>) : "" 				
			}
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

function assembleAllDefinitions() {
	// all terms from everywhere
	const allTags = usePluginData('category-listing');
	const allDocs = Object.values(allTags).flatMap(v => v)
	const grossDefinitions = allDocs
			.flatMap(doc => (doc.frontMatter.definitions ?? []).map(t => {
			return {
				name: t.name,
				own_term: t.own_term,
				part_of: t.part_of,
				description: t.description,
				anchor: t.anchor,
				permalink: doc.permalink
			}
		}))
		
	return sortAndUnique(grossDefinitions)	
}

export default function TermList({details}) {
	
	
	const allDefinitions = assembleAllDefinitions()
	
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
				sorted
					.filter(d => d.part_of == null)
					.map(d => <Term key={d.name} own_term={d.own_term} name={d.name} description={d.description} permalink={d.permalink} anchor={d.anchor}>
						{
							sorted
								.filter(e => e.part_of == d.name)
								.map(e => <Term key={e.name} own_term={e.own_term} name={e.name} description={e.description} permalink={e.permalink} anchor={e.anchor} />)
						}
				</Term>)
			}
		</div>
	);
}