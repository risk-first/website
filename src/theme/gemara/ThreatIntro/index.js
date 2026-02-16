import React from 'react';
import styles from './styles.module.css'
import { usePluginData } from '@docusaurus/useGlobalData'

function tagUrl(tag) {
	return "/tags/" + tag.replaceAll(" ", "-")
}

const Capability = ({ id, remarks }) => {
	return (
		<li><a href={`/agentic/capabilities/${id}`}>{id}</a>{remarks ? `: ${remarks}` : ''}</li>
	)
}

const Control = ({ article, permalink, remarks }) => {
	return (
		<li><a href={permalink}>{article}</a>{remarks ? `: ${remarks}` : ''}</li>
	)
}

const ExternalMapping = ({ referenceId, entries, mappingRef }) => {
	const title = mappingRef?.title || referenceId;
	const url = mappingRef?.url;
	
	return (
		<li>
			<strong>{url ? <a href={url} target="_blank" rel="noopener noreferrer">{title}</a> : title}</strong>
			{mappingRef?.version && <span style={{color: '#888', fontSize: '0.85em'}}> v{mappingRef.version}</span>}
			{entries && entries.length > 0 && (
				<ul>
					{entries.map((e, idx) => (
						<li key={idx}>{e.remarks}</li>
					))}
				</ul>
			)}
		</li>
	)
}

function isControlMitigating(article, threatId) {
	const mappings = article.frontMatter?.gemara?.['threat-mappings'] ?? [];
	const matching = mappings.find(m => m['reference-id'] === threatId);
	if (matching && matching.entries?.length > 0) {
		return {
			article: article.title,
			permalink: article.permalink,
			remarks: matching.entries[0]?.remarks
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
	const threatId = gemara.id
	
	const allTags = usePluginData('category-listing');
	const gemaraMetadata = usePluginData('gemara-metadata');
	const mappingReferences = gemaraMetadata?.mappingReferences || {};
	const myTag = allTags[title] || []

	const mitigatingControls = sortAndUnique(
		myTag.map(article => isControlMitigating(article, threatId)).filter(i => i !== undefined)
	)

	const capabilities = gemara.capabilities || []
	const externalMappings = gemara['external-mappings'] || []
	const actors = gemara.actors || []

	return (
		<div className={styles.threatIntro}>
			<p className={styles.description}>{gemara.description || fm.description}</p>

			{capabilities.length > 0 && (
				<>
					<h3>Exploits Capabilities</h3>
					<ul>
						{capabilities.map((cap, idx) => (
							<Capability 
								key={idx} 
								id={cap['reference-id']} 
								remarks={cap.entries?.[0]?.remarks} 
							/>
						))}
					</ul>
				</>
			)}

			{actors.length > 0 && (
				<>
					<h3>Actors</h3>
					<ul>
						{actors.map((actor, idx) => (
							<li key={idx}>
								<strong>{actor.name}</strong> ({actor.type}): {actor.description}
							</li>
						))}
					</ul>
				</>
			)}

			{mitigatingControls.length > 0 && (
				<>
					<h3>Mitigated By Controls</h3>
					<ul>
						{mitigatingControls.map(i => (
							<Control key={i.permalink} article={i.article} permalink={i.permalink} remarks={i.remarks} />
						))}
					</ul>
				</>
			)}

			{externalMappings.length > 0 && (
				<>
					<h3>External Framework Mappings</h3>
					<ul>
						{externalMappings.map((mapping, idx) => (
							<ExternalMapping 
								key={idx} 
								referenceId={mapping['reference-id']} 
								entries={mapping.entries}
								mappingRef={mappingReferences[mapping['reference-id']]}
							/>
						))}
					</ul>
				</>
			)}
		</div>
	)
}
