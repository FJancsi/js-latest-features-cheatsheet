#!/usr/bin/env node
// Hashbang-enabled CLI script. Run with:
//   chmod +x examples/cli.mjs
//   ./examples/cli.mjs hello world
// Or via Node directly: npm run cli

console.log('CLI hashbang demo');
console.log('Args:', process.argv.slice(2));