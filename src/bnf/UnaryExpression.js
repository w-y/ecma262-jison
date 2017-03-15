module.exports = {
  conditions: [''],
  name: 'UnaryExpression',
  rules: [
    `UpdateExpression`,
    `UnaryOperator UnaryExpression`,
    `AdditiveOperator  UnaryExpression`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2`,
    `$$ = $1 + $2`,
  ],
  subRules: [
    require('./UpdateExpression'),
  ],
};
