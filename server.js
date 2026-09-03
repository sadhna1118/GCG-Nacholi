const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { syncLiveData } = require('./scripts/sync_live_data');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

const server = http.createServer(async (req, res) => {
  let reqUrl = req.url.split('?')[0];

  // API: Trigger Real-Time Live Sync with Official Portal
  if (reqUrl === '/api/sync-live') {
    try {
      const liveData = await syncLiveData();
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      });
      res.end(JSON.stringify(liveData || { status: 'CACHE_FALLBACK', message: 'Using baseline data' }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // API: Get Synced Notices
  if (reqUrl === '/api/notices') {
    const liveFile = path.join(__dirname, 'assets', 'live_synced_data.json');
    if (fs.existsSync(liveFile)) {
      const data = fs.readFileSync(liveFile, 'utf8');
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      });
      res.end(data);
      return;
    }
  }

  if (reqUrl === '/') reqUrl = '/index.html';

  const safePath = path.normalize(decodeURIComponent(reqUrl)).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(__dirname, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end('<h1>404 Not Found</h1><p>The requested file does not exist.</p>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n======================================================`);
  console.log(`🚀 GCG Nacholi Portal running live at: ${url}`);
  console.log(`📡 Real-Time Official Portal Sync active (http://gcgnacholi.ac.in/)`);
  console.log(`======================================================\n`);

  // Initial Sync on server startup
  syncLiveData().catch(() => {});

  // Periodic background auto-sync every 10 minutes
  setInterval(() => {
    console.log('⏰ Running scheduled auto-sync with official portal...');
    syncLiveData().catch(err => console.error('Periodic sync error:', err.message));
  }, 10 * 60 * 1000);
});
