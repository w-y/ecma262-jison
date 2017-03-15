module.exports = {
  conditions: [''],
  name: 'EqualityExpression_In',
  rules: [
    `RelationalExpression_In`,
    `EqualityExpression_In EqualityOperator RelationalExpression_In`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1 + $2 + $3;`,
  ],
  subRules: [
    require('./RelationalExpression_In'),
  ],
}
