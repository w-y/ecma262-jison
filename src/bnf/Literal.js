module.exports = {
  conditions: [''],
  name: 'Literal',
  rules: [
    `NullLiteral`,
    `BooleanLiteral`,
    `StringLiteral`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1;`,
    `$$ = $1;`,
  ],
  subRules: [
    require('./StringLiteral'),
  ],
};
