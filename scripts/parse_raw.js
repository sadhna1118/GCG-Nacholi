const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'assets', 'official_raw_data.json'), 'utf8'));

console.log('--- PRINCIPAL BIO HTML SNIPPET ---');
console.log((raw.principal || '').slice(0, 1500));

console.log('\n--- FACULTY HTML SNIPPET ---');
console.log((raw.faculty || '').slice(0, 2000));

console.log('\n--- EVENTS / ACTIVITIES HTML SNIPPET ---');
console.log((raw.events || '').slice(0, 2000));

console.log('\n--- NEWS HTML SNIPPET ---');
console.log((raw.news || '').slice(0, 2000));
