const fs = require('fs');
const path = require('path');
const root = __dirname;
const src = path.join(root, 'src');
const out = path.join(root, 'public');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of ['index.html','styles.css','script.js','logo-nahr.svg','logo-mark.svg']) {
  fs.copyFileSync(path.join(src, file), path.join(out, file));
}
fs.writeFileSync(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: https://nahr-employee-enablement.vercel.app/sitemap.xml\n`);
fs.writeFileSync(path.join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://nahr-employee-enablement.vercel.app/</loc><priority>1.0</priority></url>\n</urlset>\n`);
fs.writeFileSync(path.join(out, 'og-image.svg'), `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#fbf7ef"/><rect x="70" y="70" width="1060" height="490" rx="36" fill="#fffdf8" stroke="#e4d7c3"/><text x="1060" y="210" direction="rtl" text-anchor="end" font-family="Arial, sans-serif" font-size="86" font-weight="800" fill="#1d1a15">نهر</text><text x="1060" y="310" direction="rtl" text-anchor="end" font-family="Arial, sans-serif" font-size="44" font-weight="700" fill="#1d1a15">تدريب الذكاء الاصطناعي للشركات</text><text x="1060" y="390" direction="rtl" text-anchor="end" font-family="Arial, sans-serif" font-size="34" fill="#6d6254">تمكين الموظفين وتطوير أنظمة العمل الداخلية</text><circle cx="150" cy="480" r="58" fill="#d8c3a3"/><path d="M150 430v100M110 480h80" stroke="#1d1a15" stroke-width="10" stroke-linecap="round"/></svg>`);
console.log('Built public/ with', fs.readdirSync(out).length, 'files');
