const fs = require('fs');

module.exports = function sourceLoader() {
  const source = fs.readFileSync(this.resourcePath, 'utf-8');
  const content = source
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  return `module.exports = ${content}`;
};
