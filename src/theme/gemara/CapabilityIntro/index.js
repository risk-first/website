import React from 'react';
import styles from './styles.module.css'
import { usePluginData } from '@docusaurus/useGlobalData'

const Threat = ({ article, permalink }) => {
	return (
		<li><a href={permalink}>{article}</a></li>
	)
}

function threatExploitsCapability(article, capabilityId) {
	const capabilities = article.frontMatter?.gemara?.capabilities ?? [];
	const matching = capabilities.find(c => c['reference-id'] === capabilityId);
	if (matching) {
		return {
			article: article.title,
			permalink: article.permalink,
		}
	}
	return undefined;
}

function sortAndUnique(l) {
	const uniqueArray = l.filter(function(item, pos) {
		return l.findIndex(e => e.article === item.article) === pos;
	})
	const sorted = uniqueArray.sort((a, b) => a.article.localeCompare(b.article))
	return sorted
}

export default ({ fm }) => {
	const gemara = fm.gemara || {}
	const title = fm.title
	const capabilityId = gemara.id

	const allTags = usePluginData('category-listing');
	
	// Find all threats that exploit this capability
	const allDocs = Object.values(allTags).flat();
	const exploitingThreats = sortAndUnique(
		allDocs.map(article => threatExploitsCapability(article, capabilityId)).filter(i => i !== undefined)
	)

	const scope = gemara.scope
	const riskLevel = gemara['risk-level']

	return (
		<div className={styles.capabilityIntro}>
			<div className={styles.header}>
				<div className={styles.badges}>
					{scope && <span className={styles.scope}>{scope}</span>}
					{riskLevel && <span className={styles.riskLevel}>Risk: {riskLevel}</span>}
				</div>
				<p className={styles.description}>{gemara.description || fm.description}</p>
			</div>

			{exploitingThreats.length > 0 && (
				<>
					<h3>Exploited By Threats</h3>
					<ul>
						{exploitingThreats.map(i => (
							<Threat key={i.permalink} article={i.article} permalink={i.permalink} />
						))}
					</ul>
				</>
			)}
		</div>
	)
}
