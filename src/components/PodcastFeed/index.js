import React, { useEffect, useState } from "react";
import PodcastEpisode from "@site/src/components/PodcastEpisode";

/**
 * PodcastFeed component fetches an RSS feed and renders a list of PodcastEpisode components.
 *
 * @param {Object} props
 * @param {string} props.rssUrl - URL of the RSS feed.
 */
export default function PodcastFeed({ rssUrl }) {
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function loadData() {
      try {
        const response = await fetch('/podcast.json');
        if (!response.ok) {
          throw new Error(`Failed to load podcast data: ${response.status}`);
        }
        const data = await response.json();
        if (!cancelled) setEpisodes(data);
      } catch (e) {
        if (!cancelled) setError(e.message);
      }
    }
    loadData();
    return () => {
      cancelled = true;
    };
  }, []);


  if (error) {
    return <p style={{ color: "red" }}>Error loading podcast feed: {error}</p>;
  }

  if (episodes.length === 0) {
    return <p>Loading podcast episodes...</p>;
  }

  return (
    <div>
      {episodes.map((ep, idx) => (
        <PodcastEpisode
          key={idx}
          title={ep.title}
          season={ep.season}
          episode={ep.episode}
          description={ep.description}
        />
      ))}
    </div>
  );
}
