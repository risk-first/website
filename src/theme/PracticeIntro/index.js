import React from 'react';
import styles from './styles.module.css'
import { useDocById } from '@docusaurus/theme-common/internal'
import { usePluginData } from '@docusaurus/useGlobalData'
import { useLocation } from '@docusaurus/router';

function formatReadableTag(page) {
	var out = page.replaceAll("-", " ").substring(page.lastIndexOf("/")+1)	
	if (out.indexOf("#") > -1) {
		out = out.substr(0, out.indexOf("#"))
	}
	
	return out
 }

function tagUrl(tag) {
	return "/tags/"+tag.replaceAll(" ", "-")	
}

const Risk = ({tag, reason}) => {
	return (
		<li><a href={tagUrl(tag)}>{tag}</a>: {reason}</li>
	)
}

const Method = ({ article, permalink, reason }) => {
	return (
		<li><a href={permalink}>{article}</a>: {reason}</li>
	)
}

const Aka = ({ name, from, link }) => {
	return (
		<li>{name}{ from ? (<span class={styles.methodRef}> (in <a href={link}>{from}</a>)</span>): null }</li>
	)
}


function isMethod(article, title) {
	const matching = (article.frontMatter?.method?.practices ?? []).find(m => m.tag == title);
	if (matching) {
		return {
			article: article.title,
			permalink: article.permalink,
			reason: matching.reason,
			use: matching.use ?? []
		}
	} else {
		return undefined;
	}
}

function sortAndUnique(l) {
	const uniqueArray = l.filter(function(item, pos) {
    	return l.findIndex(e => e.article == item.article) == pos;
	})
	
	const sorted = uniqueArray.sort((a, b) => a.article.localeCompare(b.article))
	return sorted
}

export default ({details}) => {
	const title = details.title

	const pl = useLocation().pathname
	const stripped = pl.endsWith('/') ? pl+"index" : pl
	const imageLink = "/img/generated/single/" + stripped + ".svg"
	const allTags = usePluginData('category-listing');

	const myTag = allTags[title]

	const methods = sortAndUnique(myTag.map(article => isMethod(article, title)).filter(i => i != undefined))
	
	const mainAka = details.practice.aka ? details.practice.aka.map(i => { return { name: i} }) : []
	const moreAka = methods.flatMap(m => m.use.map(u => { return {name: u, from: m.article, link: m.permalink, bob: JSON.stringify(m) }}))
	const sortedAka = [...mainAka, ...moreAka].sort((a, b) => a.name.localeCompare(b.name)) 
	console.log("Found " + JSON.stringify(myTag.map(i => i.title)))
	
    return <div className={styles.practiceIntro}>
    	<div className={styles.columns}>
			<div className={styles.left}>
				<img src={imageLink} className={styles.articleImage} />
			</div>
			<div className={styles.right}>
				{details.description}
			</div>
		</div>
		{
			(sortedAka.length > 0) ? <>
		    	<h3>Also Known As</h3>
		    	<ul>
		    	{
					//JSON.stringify(sortedAka)
				sortedAka.map(m => <Aka name={m.name} from={m.from} link={m.link} /> )
				}
				</ul></> : null
		}
		{
			(details.practice.related) ? (
				<><h3>Related</h3>
				<ul>
		    	{
					details.practice.related.map(i => <li><a href={i}>{formatReadableTag(i)}</a></li>)
				}
				</ul></>
			) : null
		}
		{
			 (details.practice.mitigates) ?(<><h3>Addresses / Mitigates</h3>
			<ul>
	    	{
				details.practice.mitigates.map(i => <Risk tag={i.tag} reason={i.reason} />)
			}
			</ul></>) : null
		}
		{
			(details.practice.attendant) ? 
			<><h3>Attendant Risks</h3>
			<ul>
	    	{
				details.practice.attendant.map(i => <Risk tag={i.tag} reason={i.reason} />)
			}
			</ul></> : null
		}
		{
			methods.length > 0 ? (
				<>
					<h3>Used By</h3>
					<ul>
						{
							methods.map(i => <Method key={i.permalink} article={i.article} permalink={i.permalink} reason={i.reason} />)
						}
					</ul>
				</>) : null
		}
    </div>
}