const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'assets', 'official_raw_data.json'), 'utf8'));

// Parse Events page
function parseEventsPage(html) {
  const items = [];
  // look for rows or cards
  const blockRegex = /<div class="[^"]*col-[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
  // let's do a direct regex on img and text
  const itemRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>(?:[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>)?/gi;
  let match;
  while ((match = itemRegex.exec(html)) !== null) {
    const imgSrc = match[1].replace(/\\/g, '/');
    const filename = path.basename(imgSrc);
    const title = match[2].replace(/<[^>]+>/g, '').trim();
    const desc = match[3] ? match[3].replace(/<[^>]+>/g, '').trim() : '';
    if (title && !title.includes('Quick Links') && !title.includes('Online Services')) {
      items.push({ imgSrc, filename, title, desc });
    }
  }
  return items;
}

const events = parseEventsPage(raw.events || '');
const news = parseEventsPage(raw.news || '');

console.log(`Parsed ${events.length} events and ${news.length} news items.`);
console.log('Sample parsed items:');
console.log(events.slice(0, 10));

// Let's write a combined list
fs.writeFileSync(path.join(__dirname, '..', 'assets', 'parsed_events.json'), JSON.stringify({ events, news }, null, 2));
