import React from 'react';
import styles from './styles.module.css'
import { useDocById } from '@docusaurus/theme-common/internal'
import { useLocation } from '@docusaurus/router';

function formatReadableTag(page) {
	return page.replaceAll("-", " ").substring(page.lastIndexOf("/")+1)	
}

function tagUrl(tag) {
	return "/tags/"+tag.replaceAll(" ", "-")	
}

const Risk = ({tag, reason}) => {
	return (
		<li><a href={tagUrl(tag)}>{tag}</a>: {reason}</li>
	)
}


export default ({details}) => {
	
	const pl = useLocation().pathname
	const stripped = pl.endsWith('/') ? pl+"index" : pl
	const imageLink = "/img/generated/single/" + stripped + ".png"
	
	
    return <div className={styles.practiceIntro}>
    	<div className={styles.columns}>
			<div className={styles.left}>
				<img src={imageLink} className={styles.articleImage} />
			</div>
			<div className={styles.right}>
				{details.description}
			</div>
		</div>
    	<h3>Also Known As</h3>
    	<ul>
    	{
			details.practice.aka.map(i => <li>{i}</li>)
		}
		</ul>
		<h3>Related Practices</h3>
		<ul>
    	{
			details.practice.related.map(i => <li><a href={i}>{formatReadableTag(i)}</a></li>)
		}
		</ul>
		<h3>Addresses / Mitigates</h3>
		<ul>
    	{
			details.practice.mitigates.map(i => <Risk tag={i.tag} reason={i.reason} />)
		}
		</ul>
		<h3>Attendant Risks</h3>
		<ul>
    	{
			details.practice.attendant.map(i => <Risk tag={i.tag} reason={i.reason} />)
		}
		</ul>
    </div>
}