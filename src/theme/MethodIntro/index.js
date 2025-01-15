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

const Practice = ({tag, reason, uses}) => {
	const addUses = uses && uses.length > 0
	return (
		<li class="practice"><a href={tagUrl(tag)}>{tag}</a>: {reason} { addUses ? (<span>Referred to as:</span>) : null } 
		
		{
			
			addUses ? (<ul>  { uses.map(u => <li class={styles.practiceName}>{u}</li>) } </ul>) : null 			
		}
		
		</li>
	)
}


export default ({details}) => {
	const pl = useLocation().pathname
	const stripped = pl.endsWith('/') ? pl+"index" : pl
	const imageLink = "/img/generated/single/" + stripped + ".svg"
	
	
    return <div className={styles.methodIntro}>
    	<div className={styles.columns}>
			<div className={styles.left}>
				<img src={imageLink} className={styles.articleImage} />
			</div>
			<div className={styles.right}>
				{details.description}
			</div>
		</div>
		<h3>Practices Employed</h3>
		<ul>
    	{
			details.method.practices
				.sort((a, b) => (a.tag.localeCompare(b.tag)))
				.map(i => <Practice tag={i.tag} reason={i.reason} uses={i.use} />)
		}
		</ul>
    </div>
}