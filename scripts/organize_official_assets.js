const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const SRC_DIR = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\assets\\images\\official';
const DEST_DIR = path.join(__dirname, '..', 'assets', 'official');

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

// Copy all downloaded images into project assets/official
if (fs.existsSync(SRC_DIR)) {
  const files = fs.readdirSync(SRC_DIR);
  for (const file of files) {
    const srcFile = path.join(SRC_DIR, file);
    const destFile = path.join(DEST_DIR, file);
    fs.copyFileSync(srcFile, destFile);
  }
  console.log(`Copied ${files.length} images to ${DEST_DIR}`);
}

// Let's also fetch detailed faculty and pages from http://gcgnacholi.ac.in
function fetchHtml(pageUrl) {
  return new Promise((resolve) => {
    const parsed = new URL(pageUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    const req = client.get(pageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', () => resolve(''));
    req.setTimeout(10000, () => {
      req.destroy();
      resolve('');
    });
  });
}

async function scrapeDetails() {
  const pages = {
    home: 'http://gcgnacholi.ac.in/Home',
    principal: 'http://gcgnacholi.ac.in/Principalbio',
    faculty: 'http://gcgnacholi.ac.in/Faculty',
    staff: 'http://gcgnacholi.ac.in/StaffStatement',
    events: 'http://gcgnacholi.ac.in/events_activities',
    news: 'http://gcgnacholi.ac.in/news_events',
    courses: 'http://gcgnacholi.ac.in/Programmes',
    contact: 'http://gcgnacholi.ac.in/ContactUs',
    enrollment: 'http://gcgnacholi.ac.in/StudentEnrollment',
    rti: 'http://gcgnacholi.ac.in/RTI',
    history: 'http://gcgnacholi.ac.in/Data?Menu=ROFj+/eyOLA=&SubMenu=BFcJrpmMV3E=',
    infrastructure: 'http://gcgnacholi.ac.in/Data?Menu=ROFj+/eyOLA=&SubMenu=peFtsatR8x4=',
    facilities: 'http://gcgnacholi.ac.in/Data?Menu=ROFj+/eyOLA=&SubMenu=iaz5UGOSHPM='
  };

  const results = {};
  for (const [key, pageUrl] of Object.entries(pages)) {
    console.log(`Scraping content: ${key} (${pageUrl})`);
    results[key] = await fetchHtml(pageUrl);
  }

  fs.writeFileSync(path.join(__dirname, '..', 'assets', 'official_raw_data.json'), JSON.stringify(results, null, 2));
  console.log('Saved raw HTML for all key pages.');
}

scrapeDetails();
