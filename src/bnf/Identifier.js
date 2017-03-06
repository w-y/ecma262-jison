module.exports = {
  conditions: [''],
  name: 'Identifier',
  rules: [
    `IdentifierName`,
  ],
  handlers: [
    `$0 = $1;`,
  ],
  subRules: [
    require('./IdentifierName'),
  ],
};
