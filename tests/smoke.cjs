// Smoke test: serve the repo, load the game on a phone-sized viewport and walk the core loop.
// Fails on any console error, page error or missing step.
// CommonJS so it also resolves the globally preinstalled Playwright in Claude cloud sessions.
const { createServer } = require('node:http');
const { readFile } = require('node:fs/promises');
const { extname, join, normalize } = require('node:path');
const { chromium } = require('playwright');

const root = join(__dirname, '..');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };

(async () => {
const server = createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  const file = join(root, path.endsWith('/') ? path + 'index.html' : path);
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404); res.end();
  }
});
await new Promise(r => server.listen(0, r));
const url = `http://localhost:${server.address().port}/`;

const errors = [];
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(e.message));

  await page.goto(url);
  await page.getByRole('button', { name: 'Enter the ruins' }).tap();
  await page.locator('#hand-card').waitFor({ state: 'visible' });
  await page.getByRole('button', { name: 'Play card' }).tap();
  const turn = await page.textContent('#turn-label');
  if (turn !== 'Turn 2') throw new Error(`expected "Turn 2" after playing a card, got "${turn}"`);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  if (overflow) throw new Error('page scrolls horizontally on a phone viewport');
  if (errors.length) throw new Error('console errors:\n' + errors.join('\n'));
  console.log('smoke test passed');
} finally {
  await browser.close();
  server.close();
}
})().catch(e => { console.error(e); process.exit(1); });
