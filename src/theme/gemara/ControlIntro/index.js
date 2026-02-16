import React from 'react';
import styles from './styles.module.css'
import { usePluginData } from '@docusaurus/useGlobalData'

const Threat = ({ referenceId, entries }) => {
	const firstEntry = entries?.[0];
	return (
		<li>
			<a href={`/agentic/risks/${referenceId}`}>{referenceId}</a>
			{firstEntry?.remarks && `: ${firstEntry.remarks}`}
			{firstEntry?.strength && <span className={styles.strength}> (strength: {firstEntry.strength}/10)</span>}
		</li>
	)
}

const Requirement = ({ requirement }) => {
	return (
		<li className={styles.requirement}>
			<code>{requirement.id}</code>: {requirement.text}
			{requirement.recommendation && (
				<div className={styles.recommendation}>
					<em>Recommendation:</em> {requirement.recommendation}
				</div>
			)}
			{requirement.applicability && requirement.applicability.length > 0 && (
				<div className={styles.applicability}>
					Applies to: {requirement.applicability.join(', ')}
				</div>
			)}
		</li>
	)
}

export default ({ fm }) => {
	const gemara = fm.gemara || {}
	const title = fm.title

	const family = gemara.family
	const objective = gemara.objective
	const assessmentRequirements = gemara['assessment-requirements'] || []
	const threatMappings = gemara['threat-mappings'] || []

	return (
		<div className={styles.controlIntro}>
			<div className={styles.header}>
				{family && <span className={styles.family}>Family: {family}</span>}
				<p className={styles.objective}>{objective || fm.description}</p>
			</div>

			{assessmentRequirements.length > 0 && (
				<>
					<h3>Assessment Requirements</h3>
					<ul className={styles.requirements}>
						{assessmentRequirements.map((req, idx) => (
							<Requirement key={idx} requirement={req} />
						))}
					</ul>
				</>
			)}

			{threatMappings.length > 0 && (
				<>
					<h3>Mitigates Threats</h3>
					<ul>
						{threatMappings.map((mapping, idx) => (
							<Threat 
								key={idx} 
								referenceId={mapping['reference-id']} 
								entries={mapping.entries} 
							/>
						))}
					</ul>
				</>
			)}
		</div>
	)
}
