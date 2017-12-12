module.exports = {
  conditions: [''],
  name: 'NamedImports',
  rules: [
    '{ }',
    '{ ImportsList }',
    '{ ImportsList , }',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
    '$$ = $1;',
  ],
  subRules: [
    require('./ImportsList'),
  ],
};
