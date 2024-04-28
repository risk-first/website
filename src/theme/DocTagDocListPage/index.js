import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
	PageMetadata,
	HtmlClassNameProvider,
	ThemeClassNames,
	usePluralForm,
} from '@docusaurus/theme-common';
import Translate, { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import SearchMetadata from '@theme/SearchMetadata';
import { usePluginData } from '@docusaurus/useGlobalData'
import { useLocation } from '@docusaurus/router'
// Very simple pluralization: probably good enough for now
function useNDocsTaggedPlural() {
	const { selectMessage } = usePluralForm();
	return (count) =>
		selectMessage(
			count,
			translate(
				{
					id: 'theme.docs.tagDocListPageTitle.nDocsTagged',
					description:
						'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
					message: 'One doc tagged|{count} docs tagged',
				},
				{ count },
			),
		);
}
function DocItem({ doc }) {
	return (
		<article className="margin-vert--lg">
			<Link to={doc.permalink}>
				<h3>{doc.title}</h3>
			</Link>
			{doc.description && <p>{doc.description}</p>}
		</article>
	);
}

function categoryFromPermalink(pl) {
	return pl.replaceAll("/", " ")
}

function mainDoc(items, tag) {
	return items.find(i => i.title == tag.label)
}

function path(i) {
	return i.permalink.substring(0, i.permalink.lastIndexOf("/")+1)
}

function sortDocs(items, exclude) {
	const buckets = Array.from(new Set(items.map(i => path(i)))).sort()
	
	const out = {}
	
	console.log("Items : "+items.length)
	console.log("Buckets : "+JSON.stringify(buckets))

	items
		.filter(i => i !== exclude)
		.forEach(i => {
			const p = path(i)
			buckets.forEach(c => {
				console.log("Bucket "+c)
				if (p == c) {
					const list = out[c];
					if (!list) {
						out[c] = [];
					}
					console.log("Pushed 1")

					out[c].push(i);
				}
			})

			return out;
		})


	
	return out;

}

export default function DocTagDocListPage({ tag }) {
	const allTags = usePluginData('category-listing');
	const oneTag = allTags[tag.label]
	
	const nDocsTaggedPlural = useNDocsTaggedPlural();
	const md = mainDoc(oneTag, tag);
	const sorted = sortDocs(oneTag, null);
	const title = translate(
		{
			id: 'theme.docs.tagDocListPageTitle',
			description: 'The title of the page for a docs tag',
			message: '{nDocsTagged} with "{tagName}"',
		},
		{ nDocsTagged: nDocsTaggedPlural(tag.count), tagName: tag.label },
	);
	return (
		<div className="container margin-vert--lg">
			<div className="row">
				<main className="col col--8 col--offset-2">
					<header className="margin-bottom--m">
						<h1>{title}</h1>
						<Link href={tag.allTagsPath}>
							<Translate
								id="theme.tags.tagsPageLink"
								description="The label of the link targeting the tag list page">
								View All Tags
							</Translate>
						</Link>
					</header>
					{md ? 
						<section key="maindoc" className="margin-vert--lg" style={{textTransform: "capitalize"}}>
							<h2>Main Result</h2>
							<DocItem id={-1} doc={md} /> 
						</section> : ""
					}

					{Object.keys(sorted)
						.map(k => <section key={k} className="margin-vert--lg" style={{textTransform: "capitalize"}}>
							<h2>{categoryFromPermalink(k)}</h2>
							{sorted[k].map((doc, i) => <DocItem key={i} id={i} doc={doc} />)}
						</section>)}
				</main>
			</div>
		</div>

	);
}

/**
 * 					
 */
