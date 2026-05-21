const concurrently = require('concurrently');

// Fix for Windows 'spawn cmd.exe ENOENT' error by ensuring System32 is in the PATH
if (process.platform === 'win32') {
  process.env.PATH = (process.env.PATH || '') + ';C:\\Windows\\System32';
}

console.log("🚀 Starting AkshayaSanga's Portfolio Servers...");
concurrently([
  { command: 'npm run frontend', name: 'frontend', prefixColor: 'cyan' },
  { command: 'npm run backend', name: 'backend', prefixColor: 'green' }
]).result.catch(() => {});