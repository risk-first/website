import React from 'react';
import styles from './styles.module.css';
import stackStyles from '../HomeSectionStack/styles.module.css';
import HomeSectionStack from '../HomeSectionStack';
import episodes from '@site/static/podcast.json';

const OTHER_CONTENT = [
	{
		title: 'JUXTCast Interview',
		teaser: 'Hot takes on AI reliability, agile cargo-culting, and why you\'re secretly a risk manager',
		href: '/community/JUXTCast-Interview',
		image: '/img/generated/single/community/JUXTCast-Interview.svg',
	},
	{
		title: 'XT25 Keynote',
		teaser: 'From building banking risk systems to realising all software development is risk management',
		href: '/community/XT25-Presentation',
		image: '/img/generated/single/community/XT25-Presentation.svg',
	},
	{
		title: 'TameFlow Interviews',
		teaser: 'Conversations on constraints, flow, and organisational performance',
		href: '/community/TameFlow-Interviews',
		image: '/img/generated/single/community/TameFlow-Interviews.svg',
	},
	{
		title: 'Software Engineering Radio',
		teaser: 'SE Radio 721 — Rob Moffat on Risk-First Software Development',
		href: '/community/SE-Radio-Interview',
		image: 'https://i.ytimg.com/vi/gXHjc3G08rY/hqdefault.jpg',
	},
];

const FALLBACK_IMAGE = '/img/community/podcast.png';

function ContentCard({ href, image, title, teaser, linkLabel, external }) {
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
				<span className={styles.cardLink}>{linkLabel}</span>
			</div>
		</a>
	);
}

export default function CommunityContent() {
	const podcastCards = episodes.map((ep) => ({
		title: ep.guestName || ep.title,
		teaser: ep.teaser || ep.title,
		href: ep.youtubeId
			? `https://www.youtube.com/watch?v=${ep.youtubeId}`
			: `/community/Risk-First-Podcast#episode-${ep.episode}`,
		image: ep.guestImage || FALLBACK_IMAGE,
		linkLabel: 'Listen →',
		external: !!ep.youtubeId,
		key: `ep-${ep.season}-${ep.episode}`,
	}));

	const talkCards = OTHER_CONTENT.map((item) => ({
		...item,
		linkLabel: 'Watch →',
		external: false,
		key: item.title,
	}));

	return (
		<HomeSectionStack>
			<div className={stackStyles.sectionHeading}>
				<h2>Latest From the Community</h2>
				<p>Podcasts, interviews, keynotes, and conversations about Risk-First in the wild.</p>
			</div>
			<div className={styles.cardRow}>
				{[...podcastCards, ...talkCards].map((card) => (
					<ContentCard
						key={card.key}
						href={card.href}
						image={card.image}
						title={card.title}
						teaser={card.teaser}
						linkLabel={card.linkLabel}
						external={card.external}
					/>
				))}
			</div>
		</HomeSectionStack>
	);
}
