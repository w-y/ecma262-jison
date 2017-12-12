module.exports = {
  conditions: [''],
  name: 'FromClause',
  rules: [
    'from ModuleSpecifier',
  ],
  handlers: [
    '$$ = $2;',
  ],
  subRules: [
    require('./ModuleSpecifier'),
  ],
};
