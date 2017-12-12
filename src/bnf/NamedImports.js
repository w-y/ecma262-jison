module.exports = {
  conditions: [''],
  name: 'NamedImports',
  rules: [
    '{ }',
    '{ ImportsList }',
    '{ ImportsList , }',
  ],
  handlers: [
    '$$ = [];',
    '$$ = $2;',
    '$$ = $2;',
  ],
  subRules: [
    require('./ImportsList'),
  ],
};
