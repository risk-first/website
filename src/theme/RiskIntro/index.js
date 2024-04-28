import React from 'react';
import styles from './styles.module.css'
import { useDocById } from '@docusaurus/theme-common/internal'
import { usePluginData } from '@docusaurus/useGlobalData'
import { useLocation } from '@docusaurus/router';

function formatReadableTag(page) {
	return page.replaceAll("-", " ").substring(page.lastIndexOf("/") + 1)
}

function tagUrl(tag) {
	return "/tags/" + tag.replaceAll(" ", "-")
}

const Practice = ({ article, permalink, reason }) => {
	return (
		<li><a href={permalink}>{article}</a>: {reason}</li>
	)
}

function isPracticeMitigating(article, title) {
	const matching = (article.frontMatter?.practice?.mitigates ?? []).find(m => m.tag == title);
	if (matching) {
		return {
			article: article.title,
			permalink: article.permalink,
			reason: matching.reason
		}
	} else {
		return undefined;
	}
}

function isPracticeAttendant(article, title) {
	const matching = (article.frontMatter?.practice?.attendant ?? []).find(m => m.tag == title);
	if (matching) {
		return {
			article: article.title,
			permalink: article.permalink,
			reason: matching.reason,
			title: title
		}
	} else {
		return undefined;
	}
}


export default ({ fm }) => {
	const title = fm.title
	const description = fm.description
	const allTags = usePluginData('category-listing');
	const myTag = allTags[title]

	console.log("Found " + JSON.stringify(myTag.map(i => i.title)))

	const mitigating = myTag.map(article => isPracticeMitigating(article, title)).filter(i => i != undefined)
	const attendant = myTag.map(article => isPracticeAttendant(article, title)).filter(i => i != undefined)

	const pl = useLocation().pathname
	const stripped = pl.endsWith('/') ? pl+"index" : pl
	const imageLink = "/img/generated/single/" + stripped + ".png"
	
	return <div className={styles.riskIntro}>
		<div className={styles.columns}>
			<div className={styles.left}>
				<img src={imageLink} className={styles.articleImage} />
			</div>
			<div className={styles.right}>
				{fm.description}
			</div>
		</div>
		{
			mitigating.length > 0 ? (
				<>
					<h3>Reduced By Practices</h3>
					<ul>
						{
							mitigating.map(i => <Practice key={i.permalink} article={i.article} permalink={i.permalink} reason={i.reason} />)
						}
					</ul>
				</>) : null
		}
		{
			attendant.length > 0 ? (
				<>
					<h3>Attendant To Practices</h3>
					<ul>
						{
							attendant.map(i => <Practice key={i.permalink} article={i.article} permalink={i.permalink} reason={i.reason} />)
						}
					</ul>
				</>) : null
		}
		
	</div>
}