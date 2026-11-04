import { readFile, readdir, access } from 'node:fs/promises';
import { resolve, join, relative, extname } from 'node:path';
import { strict as assert } from 'node:assert';
import { load } from 'cheerio';

const root = resolve('dist');
async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? files(join(directory, entry.name)) : [join(directory, entry.name)]))).flat();
}
const allFiles = await files(root);
const pages = allFiles.filter(path => extname(path) === '.html');
const origin = new URL(process.env.PUBLIC_SITE_URL || 'https://shubhankchandak.vercel.app').origin;
const failures = [];
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const $ = load(html);
  const path = '/' + relative(root, file).replaceAll('\\', '/').replace(/index\.html$/, '');
  if ($('main h1').length !== 1) failures.push(`${path}: expected one main heading`);
  if (!$('title').text() || !$('meta[name="description"]').attr('content')) failures.push(`${path}: missing metadata`);
  if (!$('link[rel="canonical"]').attr('href')?.startsWith(origin)) failures.push(`${path}: incorrect canonical origin`);
  for (const element of $('[href], [src]').toArray()) {
    if ($(element).attr('rel') === 'canonical') continue;
    if ($(element).attr('rel') === 'canonical') continue;
    const value = $(element).attr('href') ?? $(element).attr('src');
    if (!value || /^(mailto:|tel:|data:|javascript:)/.test(value)) continue;
    const url = new URL(value, origin + path);
    if (url.origin !== origin) continue;
    let target = resolve(root, '.' + decodeURIComponent(url.pathname));
    if (url.pathname.endsWith('/')) target = join(target, 'index.html');
    if (!extname(target)) target = join(target, 'index.html');
    try { await access(target); } catch { failures.push(`${path}: missing ${value}`); continue; }
    if (url.hash && extname(target) === '.html') {
      const destination = load(await readFile(target, 'utf8'));
      const anchor = decodeURIComponent(url.hash.slice(1));
      if (!destination('[id]').toArray().some(node => destination(node).attr('id') === anchor)) failures.push(`${path}: missing anchor ${value}`);
    }
  }
  if (/TODO|John Doe|onboarding@resend|formspree\.io\/f\//.test($('main').text())) failures.push(`${path}: stale placeholder content`);
}
const projectPages = pages.filter(path => /[\\/]projects[\\/][^\\/]+[\\/]index\.html$/.test(path));
assert(projectPages.length >= 9, `Expected at least nine project routes, got ${projectPages.length}`);
const legacy = ['finsight-ai','cafeteria-buddy','park-plus','expense-platform','oar-data-assistant','text-to-code'];
for (const slug of legacy) await access(join(root, 'projects', slug, 'index.html'));
await access(join(root, 'writing/building-retrieval-systems-that-know-their-limits/index.html'));
await access(join(root, 'og-image.png'));
await access(join(root, 'sitemap-index.xml'));
await access(join(root, 'robots.txt'));
assert.deepEqual(failures, [], failures.join('\n'));
console.log(`Verified ${pages.length} HTML pages, ${projectPages.length} case studies, local links/anchors/assets, canonical metadata, and preserved legacy URLs.`);
