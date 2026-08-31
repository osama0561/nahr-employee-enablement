const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, '..', 'public', 'styles.css'), 'utf8');
const must = ['<html lang="ar" dir="rtl">','meta name="description"','application/ld+json','من نخدم','القطاع الحكومي','القطاع الخاص','القطاع غير الربحي','نموذج الاحتياج','/logo-nahr.svg','/logo-mark.svg'];
const forbidden = ['ملفات نهر','PowerPoint','Excel','Markdown','تحميل','lovable','v0.dev','bolt.new','✨','🚀','⚡'];
let failed = false;
for (const s of must) if (!html.includes(s)) { console.error('Missing:', s); failed = true; }
for (const s of forbidden) if ((html+css).toLowerCase().includes(s.toLowerCase())) { console.error('Forbidden public marker:', s); failed = true; }
if (!fs.existsSync(path.join(__dirname, '..', 'public', 'robots.txt'))) { console.error('Missing robots'); failed = true; }
if (!fs.existsSync(path.join(__dirname, '..', 'public', 'sitemap.xml'))) { console.error('Missing sitemap'); failed = true; }
if (failed) process.exit(1);
console.log('Site checks passed');
