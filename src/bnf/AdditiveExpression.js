module.exports = {
  conditions: [''],
  name: 'AdditiveExpression',
  rules: [
    `MultiplicativeExpression`,
    `AdditiveExpression AdditiveOperator MultiplicativeExpression`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./MultiplicativeExpression'),
  ],
};
