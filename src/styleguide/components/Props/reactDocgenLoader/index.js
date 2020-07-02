// Custom webpack loader to generate component props documentation

const docgen = require('react-docgen');

module.exports = function (source, filename) {
  this.cacheable && this.cacheable();

  let value = {};

  try {
    value = docgen.parse(source, undefined, undefined, {
      parserOptions: { plugins: ['jsx', 'typescript'] },
    });
  } catch (e) {
    // do nothing
  }

  return 'module.exports = ' + JSON.stringify(value, undefined, '\t');
};
