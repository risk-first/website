import React from 'react';
import styles from './styles.module.css';
import stackStyles from '../HomeSectionStack/styles.module.css';
import HomeSectionStack from '../HomeSectionStack';
import episodes from '@site/static/podcast.json';

const FALLBACK_IMAGE = '/img/community/podcast.png';

function PodcastCard({ href, image, title, teaser, external }) {
	return (
		<a
			className={styles.card}
			href={href}
			{...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
		>
			<img className={styles.cardPhoto} src={image} alt={title} />
			<div className={styles.cardBody}>
				<h3 className={styles.cardTitle}>{title}</h3>
				<p className={styles.cardTeaser}>{teaser}</p>
				<span className={styles.cardLink}>Listen →</span>
			</div>
		</a>
	);
}

export default function PodcastSection() {
	return (
		<HomeSectionStack>
			<div className={stackStyles.sectionHeading}>
				<h2>The Risk-First Podcast</h2>
				<p>
					Stars of Software — conversations with leaders and builders about the risks
					they navigate every day.
				</p>
			</div>
			<div className={styles.cardRow}>
				{episodes.map((ep) => (
					<PodcastCard
						key={`${ep.season}-${ep.episode}`}
						title={ep.guestName || ep.title}
						teaser={ep.teaser || ep.title}
						href={ep.youtubeId
							? `https://www.youtube.com/watch?v=${ep.youtubeId}`
							: `/community/Risk-First-Podcast#episode-${ep.episode}`}
						image={ep.guestImage || FALLBACK_IMAGE}
						external={!!ep.youtubeId}
					/>
				))}
			</div>
		</HomeSectionStack>
	);
}
