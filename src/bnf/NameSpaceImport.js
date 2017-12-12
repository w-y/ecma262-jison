module.exports = {
  conditions: [''],
  name: 'NameSpaceImport',
  rules: [
    '* as ImportedBinding',
  ],
  handlers: [
    '$$ = $1;',
  ],
  subRules: [
    require('./ImportedBinding'),
  ],
};
