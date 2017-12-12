module.exports = {
  conditions: [''],
  name: 'ModuleSpecifier',
  rules: [
    'StringLiteral',
  ],
  handlers: [
    '$$ = $1;',
  ],
  subRules: [
    require('./StringLiteral'),
  ],
};
