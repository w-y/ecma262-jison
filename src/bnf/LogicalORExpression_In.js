module.exports = {
  conditions: [''],
  name: 'LogicalORExpression_In',
  rules: [
    `LogicalANDExpression_In`,
    `LogicalORExpression_In || LogicalANDExpression_In`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./LogicalANDExpression_In'), 
  ],
};
