const fs = require('fs');

const packageJson = require('./package.json');
const packageLockJson = require('./package-lock.json');

const currentVersion = packageJson.version;
const [major, minor, patch] = currentVersion.split('.');
const nextVersion = `${major}.${minor}.${Number(patch) + 1}`;

packageJson.version = nextVersion;
packageLockJson.version = nextVersion;

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2) + '\n');
fs.writeFileSync('./package-lock.json', JSON.stringify(packageLockJson, null, 2) + '\n');
