const http = require('http');
const fs = require('fs');
const path = require('path');

function testUrl(urlPath) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + urlPath, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ path: urlPath, status: res.statusCode, length: data.length });
      });
    }).on('error', (e) => {
      resolve({ path: urlPath, status: 500, error: e.message });
    });
  });
}

async function verifyAll() {
  console.log('--- VERIFYING SERVER ASSETS & ENDPOINTS ---');
  
  const endpoints = [
    '/',
    '/index.html',
    '/css/style.css',
    '/css/components.css',
    '/js/data.js',
    '/js/pages.js',
    '/js/app.js',
    '/assets/official/Logo.jpg',
    '/assets/official/highereducation3.png',
    '/assets/official/Banner3.jpg',
    '/assets/official/Banner2.jpg',
    '/assets/official/Principal.jpg',
    '/assets/official/News7536.jpg',
    '/assets/official/News5289.JPG',
    '/assets/official/News18852.jpeg',
    '/assets/official/News18851.jpeg',
    '/assets/official/News18847.jpeg',
    '/assets/official/News18842.jpeg',
    '/assets/official/News18839.jpeg',
    '/assets/official/News18837.jpeg',
    '/assets/official/News14369.jpeg',
    '/assets/official/News11117.jpeg',
    '/assets/official/News9732.jpg'
  ];

  let passed = 0;
  let failed = 0;

  for (const ep of endpoints) {
    const res = await testUrl(ep);
    if (res.status === 200) {
      console.log(`✅ [200 OK] ${ep} (${res.length} bytes)`);
      passed++;
    } else {
      console.error(`❌ [FAILED] ${ep} - Status: ${res.status}`);
      failed++;
    }
  }

  console.log(`\nVerification Summary: ${passed} Passed, ${failed} Failed.`);
}

verifyAll();
