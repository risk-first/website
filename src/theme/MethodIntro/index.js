import React from 'react';
import styles from './styles.module.css'
import { useDocById } from '@docusaurus/theme-common/internal'
import { useLocation } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData'

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

const RiskTable = ({title, data}) => {
	const keys = Object.keys(data).sort((a, b) => a.localeCompare(b));
	if (keys.length == 0) return null;

	return (
		<table className={styles.riskTable}>
			<thead>
				<tr>
					<th>{title}</th>
					<th>Practices</th>
				</tr>
			</thead>
			<tbody>
				{keys.map(k => (
					<tr key={k}>
						<td><a href={tagUrl(k)}>{k}</a></td>
						<td>
							<ul>
								{data[k].sort((a, b) => a.name.localeCompare(b.name)).map(p => (
									<li key={p.name}>
										<a href={tagUrl(p.name)}>{p.name}</a>
										{p.reason ? <span className={styles.reason}>: {p.reason}</span> : null}
									</li>
								))}
							</ul>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}


export default ({details}) => {
	const pl = useLocation().pathname
	const stripped = pl.endsWith('/') ? pl+"index" : pl
	const imageLink = "/img/generated/single/" + stripped + ".svg"
	const allTags = usePluginData('category-listing');

	const mitigatedRisks = {};
	const attendantRisks = {};

	(details.method.practices ?? []).forEach(p => {
		const practiceName = p.tag;
		const docList = allTags[practiceName] ?? [];
		const practiceDoc = docList.find(d => d.isPractice);
		if (practiceDoc) {
			(practiceDoc.frontMatter.practice?.mitigates ?? []).forEach(m => {
				mitigatedRisks[m.tag] = mitigatedRisks[m.tag] ?? [];
				if (!mitigatedRisks[m.tag].find(item => item.name === practiceName)) {
					mitigatedRisks[m.tag].push({ name: practiceName, reason: m.reason });
				}
			});
			(practiceDoc.frontMatter.practice?.attendant ?? []).forEach(a => {
				attendantRisks[a.tag] = attendantRisks[a.tag] ?? [];
				if (!attendantRisks[a.tag].find(item => item.name === practiceName)) {
					attendantRisks[a.tag].push({ name: practiceName, reason: a.reason });
				}
			});
		}
	});

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
		<ul className={styles.practiceList}>
    	{
			details.method.practices
				.sort((a, b) => (a.tag.localeCompare(b.tag)))
				.map(i => <Practice key={i.tag} tag={i.tag} reason={i.reason} uses={i.use} />)
		}
		</ul>

		<h3>Addresses / Mitigates</h3>
		<RiskTable title="Risk" data={mitigatedRisks} />

		<h3>Attendant Risks</h3>
		<RiskTable title="Attendant Risk" data={attendantRisks} />
    </div>
}