import React from 'react';
import styles from './styles.module.css'
import { useDocById } from '@docusaurus/theme-common/internal'
import { usePluginData } from '@docusaurus/useGlobalData'
import { useLocation } from '@docusaurus/router';


/*function formatReadableTag(page) {
	return page.replaceAll("-", " ").substring(page.lastIndexOf("/") + 1)
}

function tagUrl(tag) {
	return "/tags/" + tag.replaceAll(" ", "-")
}

const Risk = ({tag}) => {
	return (
		<li><a href={tagUrl(tag)}>{tag}</a></li>
	)
}

const Practice = ({ article, permalink, reason }) => {
	return (
		<li><a href={permalink}>{article}</a>: {reason}</li>
	)
}*/

function status(p, r) {
	const mit = isPracticeMitigating(p, r.title)
	const att = isPracticeAttendant(p, r.title)
	
	if (mit) {
		return <td>m</td>
	} else if (att) {
		return <td>a</td>
	} else {
		return <td />
	}
}



function isPracticeMitigating(article, title) {
	const matching = (article.frontMatter?.practice?.mitigates ?? []).find(m => m.tag == title);
	if (matching) {
		return true
	} else {
		return false;
	}
}

function isPracticeAttendant(article, title) {
	const matching = (article.frontMatter?.practice?.attendant ?? []).find(m => m.tag == title);
	if (matching) {
		return true
	} else {
		return false;
	}
}

function practiceDetails(map) {
	const listOfPractices = []
	
	function extractCategory(l) {
		const parts = l.split("/")
		return parts[2]
	}
	
	Object.entries(map).forEach(([key, value]) => {
			value.filter(a => a.isPractice) 
			.forEach(e => {
				listOfPractices.push({
					title: e.title,
					category: extractCategory(e.permalink),
					url: e.permalink,
					frontMatter: e.frontMatter
				})
			})	
		})
		

	const uniqueArray = listOfPractices.filter(function(item, pos) {
    	return listOfPractices.findIndex(e => e.title == item.title) == pos;
	})
	
	const sorted = uniqueArray.sort((a, b) => {
		if (a.category != b.category) {
			return a.category.localeCompare(b.category)
		} else {
			return a.title.localeCompare(b.title)
		}
	})

	return sorted
}

function riskDetails(map) {
	const listOfRisks = []
	
	Object.entries(map).forEach(([key, value]) => {
			value.filter(a => a.isRisk) 
			.forEach(e => {
				listOfRisks.push({
					title: e.title,
					parent: e.frontMatter.part_of ?? null,
					url: e.permalink
				})
			})	
		})

	const uniqueArray = listOfRisks.filter(function(item, pos) {
    	return listOfRisks.findIndex(e => e.title == item.title) == pos;
	})
	
	// next, include parents
	function hierarchy(x) {
		const entry = uniqueArray.find(e => e.title == x)
		if (!entry.parent) {
			return [ x ]
		} else {
			return [ ...hierarchy(entry.parent), x ]
		}
	}
	
	uniqueArray.forEach(x => {
		// sets depth on each one
		x.hierarchy = hierarchy(x.title)
	})
		
	
	const sorted = uniqueArray.sort((a, b) => {
		for (let i=0; i < Math.min(a.hierarchy.length, b.hierarchy.length); i++) {
			const ai = a.hierarchy[i]
			const bi = b.hierarchy[i]
			if (ai != bi) {
				return ai.localeCompare(bi)
			}
		}
		
		return a.hierarchy.length - b.hierarchy.length
	})
	
	return sorted
}

function buildRowspans(i, listOfRisks) {
	const layer = listOfRisks.map(r => r.hierarchy[i])
	console.log("Layer", layer)
	const out = []
	var last = layer[0]
	var count = 0
	layer.forEach(l => { 
		if (l == last) {
			count ++;
		} else {
			out.push(<th colspan={count}>{last}</th>)
			last = l
			count = 1
		}
	})
	
	out.push(<th colspan={count}>{last}</th>)
	
	return out
}


export default ({ fm }) => {
	
	const allData = usePluginData('category-listing');
	
	const listOfRisks = riskDetails(allData)
	
	const listOfPractices = practiceDetails(allData)
	

	return (
		<table>
			<thead>
				<tr>
				<th>Category</th>
				<th>Practice</th>
				{
					buildRowspans(0, listOfRisks)
				}
				</tr>
				<tr>
				<th />
				<th />
				{
					buildRowspans(1, listOfRisks)
				}
				</tr>
				<tr>
				<th />
				<th />
				{
					buildRowspans(2, listOfRisks)
				}
				</tr>
				<tr>
				<th />
				<th />
				{
					buildRowspans(3, listOfRisks)
				}
				</tr>
			</thead>
			<tbody>
				{
					listOfPractices.map(p => 
						<tr key={p.title}>
							<td>{p.category}</td>
							<td>{p.title}</td>
						
							{ listOfRisks.map(r => status(p, r)) }
						
						</tr>
					)
				}
			</tbody>
		</table>	
	)
	
}
