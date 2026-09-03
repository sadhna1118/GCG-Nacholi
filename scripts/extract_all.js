const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'assets', 'official_raw_data.json'), 'utf8'));

function extractBodyText(html) {
  // strip scripts and styles
  let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  // extract body
  const bodyMatch = /<body[^>]*>([\s\S]*)<\/body>/i.exec(clean);
  const content = bodyMatch ? bodyMatch[1] : clean;
  return content;
}

// Let's parse faculty members
const facultyHtml = raw.faculty || '';
console.log('--- EXTRACTING FACULTY ---');
const facultyMatches = facultyHtml.match(/<table[\s\S]*?<\/table>/gi);
if (facultyMatches) {
  console.log('Found tables in faculty: ', facultyMatches.length);
  facultyMatches.forEach((tbl, i) => {
    console.log(`Table ${i+1}:`);
    console.log(tbl.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 500));
  });
}

// Let's parse principal bio
console.log('\n--- PRINCIPAL BIO ---');
const princHtml = raw.principal || '';
const princText = princHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
console.log(princText.slice(0, 1000));

// Let's parse staff statement
console.log('\n--- STAFF STATEMENT ---');
const staffHtml = raw.staff || '';
const staffTables = staffHtml.match(/<table[\s\S]*?<\/table>/gi);
if (staffTables) {
  staffTables.forEach((tbl, i) => {
    console.log(`Staff Table ${i+1}:`);
    console.log(tbl.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 500));
  });
}

// Let's parse events & news
console.log('\n--- EVENTS / NEWS ITEMS ---');
const eventHtml = (raw.events || '') + (raw.news || '');
const imgTitleRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi;
let m;
let count = 0;
while ((m = imgTitleRegex.exec(eventHtml)) !== null && count < 20) {
  console.log(`Image: ${m[1]} | Title: ${m[2].replace(/<[^>]+>/g, '').trim()}`);
  count++;
}
