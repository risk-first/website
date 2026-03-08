// This script fetches the RSS feed server‑side, parses it, and writes a static JSON file
// that can be served by the dev server, avoiding CORS issues.

// Using built‑in global fetch (Node 18+)
const { parseStringPromise } = require('xml2js');
const { decode } = require('html-entities');
const fs = require('fs');
const path = require('path');

// URL of the RSS feed
const RSS_URL = 'https://api.riverside.fm/hosting/BRdFe33E.rss';
// Output path – placed in the static folder so it is served at /podcast.json
const OUTPUT_PATH = path.resolve(__dirname, '..', 'static', 'podcast.json');

async function generate() {
  try {
    const response = await fetch(RSS_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status}`);
    }
    const xml = await response.text();
    const result = await parseStringPromise(xml, { trim: true, explicitArray: false });
    const items = result.rss.channel.item;
    const episodes = Array.isArray(items) ? items : [items];
    const data = episodes.map(item => ({
      title: item.title || '',
      description: decode(item.description || '').replace(/<\/?h[1-6]>/gi, tag => tag.startsWith('</') ? '</b>' : '<b>'),
      season: item['itunes:season'] ? parseInt(item['itunes:season'], 10) : undefined,
      episode: item['itunes:episode'] ? parseInt(item['itunes:episode'], 10) : undefined,
    }));
    fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`Podcast data written to ${OUTPUT_PATH}`);
  } catch (err) {
    console.error('Error generating podcast data:', err);
    process.exit(1);
  }
}

generate();
