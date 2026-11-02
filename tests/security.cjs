// Security check: static rules from docs/rules/security.md, run by `npm test` and CI.
// Everything in this repo and on the live page is public, so this fails the build if:
//  - a secret-looking value (token, private key, PIN, password, service account) is committed
//  - the page loses its Content-Security-Policy
//  - a script is loaded from another origin without a pinned integrity hash
//  - a GitHub Action is referenced by tag instead of a full commit SHA
//  - a workflow uses pull_request_target (runs untrusted PR code with secrets)
const { execSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const root = join(__dirname, '..');
const problems = [];
const files = execSync('git ls-files', { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean)
  .filter(f => !/\.(png|jpe?g|gif|webp|ico|woff2?|ttf|mp3|ogg|wav)$/i.test(f) && f !== 'tests/security.cjs');

const secretPatterns = [
  [/gh[pousr]_[A-Za-z0-9]{30,}/, 'GitHub token'],
  [/github_pat_[A-Za-z0-9_]{40,}/, 'GitHub fine-grained token'],
  [/sk-(ant-|proj-|live_)?[A-Za-z0-9_-]{20,}/, 'API secret key'],
  [/-----BEGIN [A-Z ]*PRIVATE KEY-----/, 'private key'],
  [/"type"\s*:\s*"service_account"/, 'cloud service account key'],
  [/AKIA[0-9A-Z]{16}/, 'AWS access key'],
  [/xox[abpr]-[A-Za-z0-9-]{10,}/, 'Slack token'],
  [/["']?(pin|password|passwd|secret|api_?secret|client_?secret|staff_?code)["']?\s*[:=]\s*["'][^"']{3,}["']/i, 'hard-coded PIN/password/secret'],
];

for (const f of files) {
  const text = readFileSync(join(root, f), 'utf8');
  text.split('\n').forEach((line, i) => {
    for (const [re, what] of secretPatterns) {
      if (re.test(line)) problems.push(`${f}:${i + 1} looks like a ${what}. Everything in this repo is public: move it server-side.`);
    }
  });
}

for (const f of files.filter(f => f.endsWith('.html'))) {
  const html = readFileSync(join(root, f), 'utf8');
  if (!/http-equiv=["']Content-Security-Policy["']/i.test(html)) problems.push(`${f} has no Content-Security-Policy meta tag`);
  for (const tag of html.match(/<script\b[^>]*\bsrc=["']https?:\/\/[^>]*>/gi) || []) {
    if (!/\bintegrity=["']sha(256|384|512)-/i.test(tag)) problems.push(`${f} loads an outside script without an integrity hash: ${tag}`);
  }
}

for (const f of files.filter(f => f.startsWith('.github/workflows/'))) {
  const yml = readFileSync(join(root, f), 'utf8');
  if (/pull_request_target/.test(yml)) problems.push(`${f} uses pull_request_target`);
  for (const m of yml.matchAll(/uses:\s*([^\s#]+)/g)) {
    const ref = m[1];
    if (ref.startsWith('./')) continue;
    if (!/@[0-9a-f]{40}$/.test(ref)) problems.push(`${f} uses ${ref}: pin it to a full commit SHA`);
  }
}

if (problems.length) {
  console.error('security check failed:\n- ' + problems.join('\n- '));
  process.exit(1);
}
console.log(`security check passed (${files.length} files)`);
