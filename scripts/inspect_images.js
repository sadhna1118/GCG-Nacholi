const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'assets', 'official');
const files = fs.readdirSync(dir);

const stats = files.map(f => {
  const p = path.join(dir, f);
  const s = fs.statSync(p);
  return { file: f, size: s.size };
});

stats.sort((a, b) => b.size - a.size);

console.log(`Total files in assets/official: ${files.length}`);
console.log('Top 30 files by size:');
console.log(stats.slice(0, 30));

const categories = {
  faculty: stats.filter(x => x.file.match(/^\d+\.(jpg|jpeg|png)$/i)),
  news: stats.filter(x => x.file.startsWith('News')),
  icons: stats.filter(x => x.file.endsWith('.png')),
  others: stats.filter(x => !x.file.match(/^\d+\.(jpg|jpeg|png)$/i) && !x.file.startsWith('News') && !x.file.endsWith('.png'))
};

console.log('\nCategories:');
console.log(`Faculty images: ${categories.faculty.length}`, categories.faculty.map(x => x.file));
console.log(`News/Event images: ${categories.news.length}`, categories.news.map(x => `${x.file} (${Math.round(x.size/1024)}KB)`));
console.log(`Icons: ${categories.icons.length}`, categories.icons.map(x => x.file));
console.log(`Others: ${categories.others.length}`, categories.others.map(x => x.file));
