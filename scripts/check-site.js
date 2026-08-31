const fs = require('node:fs');
const path = require('node:path');

const outputDir = path.resolve('public');
const contentDir = path.resolve('src/content');
const configuredPrefix = process.env.ELEVENTY_PATH_PREFIX || '/futures.clir.org/';
const normalizedPrefix = configuredPrefix.replace(/^\/+|\/+$/g, '');
const pathPrefix = normalizedPrefix ? `/${normalizedPrefix}/` : '/';
const failures = [];

function walk(directory, extension) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(entryPath, extension);
    return entry.name.endsWith(extension) ? [entryPath] : [];
  });
}

function report(file, message) {
  failures.push(`${path.relative(process.cwd(), file)}: ${message}`);
}

function resolveOutputTarget(rawUrl) {
  if (!rawUrl || /^(?:[a-z]+:|\/\/|#)/i.test(rawUrl)) return undefined;

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(rawUrl, 'https://example.test/').pathname);
  } catch {
    return 'invalid';
  }

  if (pathname.includes('/.11ty/image/')) return undefined;

  if (pathPrefix !== '/' && pathname.startsWith(pathPrefix)) {
    pathname = `/${pathname.slice(pathPrefix.length)}`;
  }

  const target = path.join(outputDir, pathname.replace(/^\//, ''));
  const candidates = pathname.endsWith('/')
    ? [path.join(target, 'index.html')]
    : [target, path.join(target, 'index.html')];
  return candidates.some((candidate) => fs.existsSync(candidate));
}

function checkTarget(file, rawUrl) {
  const result = resolveOutputTarget(rawUrl);
  if (result === 'invalid') report(file, `invalid URL ${JSON.stringify(rawUrl)}`);
  if (result === 'invalid' || result === undefined) return;
  if (!result) report(file, `missing internal target ${JSON.stringify(rawUrl)}`);
}

const htmlFiles = walk(outputDir, '.html');
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) checkTarget(file, match[1]);
  for (const match of html.matchAll(/\bsrcset="([^"]+)"/g)) {
    for (const candidate of match[1].split(',')) checkTarget(file, candidate.trim().split(/\s+/)[0]);
  }
  for (const match of html.matchAll(/url\((?:'|")?([^'")]+)(?:'|")?\)/g)) checkTarget(file, match[1]);

  if (!file.endsWith(`${path.sep}print${path.sep}index.html`)) {
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    const duplicates = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
    if (duplicates.length) report(file, `duplicate IDs: ${duplicates.join(', ')}`);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]*"/.test(match[0])) report(file, `image is missing alt text: ${match[0].slice(0, 100)}`);
  }

  const requiredMetadata = [
    /<meta name="description" content="[^"]+">/,
    /<link rel="canonical" href="https:\/\/futures\.clir\.org\//,
    /<meta property="og:title" content="[^"]+">/,
    /<meta property="og:image" content="https:\/\//,
    /<meta name="twitter:card" content="summary_large_image">/,
  ];
  for (const pattern of requiredMetadata) {
    if (!pattern.test(html)) report(file, `missing required metadata matching ${pattern}`);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      report(file, `invalid JSON-LD: ${error.message}`);
    }
  }
}

const orders = new Map();
for (const file of walk(contentDir, '.md')) {
  const source = fs.readFileSync(file, 'utf8');
  const frontmatter = source.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatter) {
    report(file, 'missing YAML frontmatter');
    continue;
  }

  for (const field of ['layout', 'title', 'date', 'order', 'excerpt', 'permalink']) {
    if (!new RegExp(`^${field}:`, 'm').test(frontmatter[1])) report(file, `missing required frontmatter field ${field}`);
  }

  const order = frontmatter[1].match(/^order:\s*(\d+)/m)?.[1];
  if (order) {
    if (orders.has(order)) report(file, `duplicate order ${order}, also used by ${orders.get(order)}`);
    orders.set(order, path.relative(process.cwd(), file));
  }

  for (const match of frontmatter[1].matchAll(/^(?:hero|articleHero):\s*(\/assets\/[^\s]+)$/gm)) {
    if (!fs.existsSync(path.resolve('src', match[1].replace(/^\//, '')))) report(file, `missing image ${match[1]}`);
  }
}

if (failures.length) {
  console.error(`Quality checks failed with ${failures.length} issue${failures.length === 1 ? '' : 's'}:\n`);
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Quality checks passed for ${htmlFiles.length} generated HTML files and ${orders.size} contributions.`);
}
