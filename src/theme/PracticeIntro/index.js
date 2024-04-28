import React from 'react';
import styles from './styles.module.css'
import { useDocById } from '@docusaurus/theme-common/internal'

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
    return <div className={styles.practiceIntro}>
    	<h3>Also Known As</h3>
    	<ul>
    	{
			details.aka.map(i => <li>{i}</li>)
		}
		</ul>
		<h3>Related Practices</h3>
		<ul>
    	{
			details.related.map(i => <li><a href={i}>{formatReadableTag(i)}</a></li>)
		}
		</ul>
		<h2>Addresses / Mitigates</h2>
		<ul>
    	{
			details.mitigates.map(i => <Risk tag={i.tag} reason={i.reason} />)
		}
		</ul>
		<h2>Attendant Risks</h2>
		<ul>
    	{
			details.attendant.map(i => <Risk tag={i.tag} reason={i.reason} />)
		}
		</ul>
    </div>
}