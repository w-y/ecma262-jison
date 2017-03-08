module.exports = {
  conditions: [''],
  name: 'LiteralPropertyName',
  rules: [
    `IdentifierName`,
    `StringLiteral`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1`,
  ],
  subRules: [
    require('./IdentifierName'),
    require('./StringLiteral'),
  ],
};
