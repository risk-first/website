import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';
import styles from './styles.module.css'

function MethodItem({ doc, practiceTag }) {
    const pl = doc.permalink
    const stripped = pl.endsWith('/') ? pl + "index" : pl
    const imageLink = "/img/generated/single/" + stripped + ".svg"

    // Find the practice entry that matches our tag
    const practices = doc.frontMatter?.method?.practices ?? []
    const practiceEntry = practices.find(p => p.tag === practiceTag)

    if (!practiceEntry) {
        return null;
    }

    const reason = practiceEntry.reason
    const uses = practiceEntry.use ?? []

    return (
        <article className={styles.methodItem}>
            <div className={styles.columns}>
                <div className={styles.left}>
                    <img src={imageLink} className={styles.articleImage} alt={doc.title} />
                </div>
                <div className={styles.right}>
                    <Link to={doc.permalink}><h3>{doc.title}</h3></Link>
                    <p className={styles.description}>{doc.description}</p>
                    {reason && (
                        <p className={styles.reason}><strong>Why:</strong> {reason}</p>
                    )}
                    {uses.length > 0 && (
                        <div className={styles.uses}>
                            <strong>Uses:</strong>
                            <ul>
                                {uses.map((use, idx) => (
                                    <li key={idx}>{use}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function MethodList({ tag }) {
    const allTags = usePluginData('category-listing');

    // Find all methods that use this practice
    const methods = Object.values(allTags)
        .flatMap(a => a)
        .filter((value, index, array) =>
            array.map(o => o.permalink).indexOf(value.permalink) === index
        )
        .filter(doc => doc.isMethod)
        .filter(doc => {
            const practices = doc.frontMatter?.method?.practices ?? []
            return practices.some(p => p.tag === tag)
        })

    if (!methods || methods.length === 0) {
        return <p><em>No methods use this practice</em></p>;
    }

    return (
        <div className={styles.methodList}>
            {methods.map(doc => (
                <MethodItem key={doc.permalink} doc={doc} practiceTag={tag} />
            ))}
        </div>
    );
}
