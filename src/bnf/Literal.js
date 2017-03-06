module.exports = {
  conditions: [''],
  name: 'Literal',
  rules: [
    `NullLiteral`,
    `BooleanLiteral`,
    `StringLiteral`,
    `DecimalLiteral`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1;`,
    `$$ = $1;`,
    `$$ = $1;`,
  ],
  subRules: [
    require('./StringLiteral'),
    require('./DecimalLiteral'),
  ],
};
