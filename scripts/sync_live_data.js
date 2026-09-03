/**
 * GCG Nacholi - Live Official Website Synchronizer
 * Connects directly to http://gcgnacholi.ac.in/ to fetch real-time notices,
 * announcements, circulars, and updates so this portal works hand-in-hand with the official portal.
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const OFFICIAL_URL = 'http://gcgnacholi.ac.in/';
const NOTICE_URL = 'http://gcgnacholi.ac.in/Notice';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const u = new URL(url);
          redirectUrl = `${u.protocol}//${u.host}${redirectUrl}`;
        }
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(12000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

function parseNoticesFromHtml(html) {
  const notices = [];
  
  // Specific regex to capture notices with PDF links or specific notice text
  const noticeRegex = /<a\s+[^>]*href=["']([^"']*(?:Notice|\.pdf)[^"']*)["'][^>]*>([\s\S]*?)<\/a>(?:[\s\S]*?\((?:Notice Date\s*)?(\d{2}\/\d{2}\/\d{4})\))?/gi;
  
  let match;
  let count = 0;
  const seenUrls = new Set();
  const ignoreTitles = ['view all notices', 'circulars & notices', 'student notices', 'department instructions', 'download forms'];

  while ((match = noticeRegex.exec(html)) !== null && count < 30) {
    let fileUrl = match[1].trim();
    let rawTitle = match[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    let date = match[3] || '';

    if (!rawTitle || rawTitle.length < 10) continue;
    if (ignoreTitles.includes(rawTitle.toLowerCase())) continue;

    if (!fileUrl.startsWith('http')) {
      fileUrl = `http://gcgnacholi.ac.in/${fileUrl.replace(/^\//, '')}`;
    }

    if (seenUrls.has(fileUrl + rawTitle)) continue;
    seenUrls.add(fileUrl + rawTitle);

    // Extract notice ID if available
    const idMatch = fileUrl.match(/Notice(\d+)\.pdf/i);
    const noticeId = idMatch ? `NTC-${idMatch[1]}` : `NTC-${Date.now().toString().slice(-4)}-${count + 1}`;

    // Determine category
    let category = "General";
    const lower = rawTitle.toLowerCase();
    if (lower.includes('admission') || lower.includes('merit') || lower.includes('counseling') || lower.includes('mcom') || lower.includes('m.com') || lower.includes('seat')) {
      category = "Admissions";
    } else if (lower.includes('athletic') || lower.includes('sport') || lower.includes('meet') || lower.includes('tournament')) {
      category = "Sports";
    } else if (lower.includes('exam') || lower.includes('date sheet') || lower.includes('practical') || lower.includes('mdu')) {
      category = "Examinations";
    } else if (lower.includes('scholarship') || lower.includes('har-chhatravratti') || lower.includes('post matric')) {
      category = "Scholarships";
    } else if (lower.includes('nss') || lower.includes('camp') || lower.includes('red cross') || lower.includes('ncc')) {
      category = "NSS & Youth";
    }

    notices.push({
      id: noticeId,
      title: rawTitle,
      date: date || "Latest",
      category: category,
      badge: count === 0 ? "LIVE NEW" : category,
      fileUrl: fileUrl,
      description: rawTitle,
      isNew: count < 2,
      isOfficialLive: true,
      syncedAt: new Date().toISOString()
    });

    count++;
  }

  return notices;
}

async function syncLiveData() {
  console.log('🔄 Connecting to official portal: http://gcgnacholi.ac.in/ ...');
  try {
    const [homeHtml, noticeHtml] = await Promise.allSettled([
      fetchUrl(OFFICIAL_URL),
      fetchUrl(NOTICE_URL)
    ]);

    const combinedHtml = (homeHtml.status === 'fulfilled' ? homeHtml.value : '') + 
                         (noticeHtml.status === 'fulfilled' ? noticeHtml.value : '');

    if (!combinedHtml) {
      throw new Error('Failed to reach official website');
    }

    const liveNotices = parseNoticesFromHtml(combinedHtml);
    console.log(`✅ Successfully extracted ${liveNotices.length} live notices from official website!`);

    const syncPayload = {
      lastSynced: new Date().toISOString(),
      officialUrl: OFFICIAL_URL,
      status: "ONLINE",
      noticesCount: liveNotices.length,
      notices: liveNotices
    };

    const assetsDir = path.join(__dirname, '..', 'assets');
    if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

    const outputPath = path.join(assetsDir, 'live_synced_data.json');
    fs.writeFileSync(outputPath, JSON.stringify(syncPayload, null, 2), 'utf8');
    console.log(`💾 Live synced data saved to ${outputPath}`);

    return syncPayload;
  } catch (err) {
    console.warn(`⚠️ Warning during live sync: ${err.message}. Using cached baseline data.`);
    return null;
  }
}

if (require.main === module) {
  syncLiveData();
}

module.exports = { syncLiveData, parseNoticesFromHtml, fetchUrl };
