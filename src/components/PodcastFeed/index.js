import React from "react";
import PodcastEpisode from "@site/src/components/PodcastEpisode";
import episodes from "@site/static/podcast.json";

/**
 * PodcastFeed component renders a static list of podcast episodes.
 *
 * @param {Object} props
 */
export default function PodcastFeed() {

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
