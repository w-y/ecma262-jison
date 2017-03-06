module.exports = {
  conditions: [''],
  name: 'DecimalLiteral',
  rules: [
    `DecimalIntegerLiteral DecimalPoint`,
    `DecimalIntegerLiteral DecimalPoint DecimalDigits`,
    `DecimalPoint DecimalDigits`,
    `DecimalIntegerLiteral`,
  ],
  handlers: [
    `$$ = $1 + $2;`,
    `$$ = $1 + $2 + $3;`,
    `$$ = $1 + $2;`,
    `$$ = $1;`,
  ],
  subRules: [
    require('./DecimalIntegerLiteral'),
    require('./DecimalDigits'),
  ],
};
