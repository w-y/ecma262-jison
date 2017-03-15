module.exports = {
  conditions: [''],
  name: 'LogicalORExpression',
  rules: [
    `LogicalANDExpression`,
    `LogicalORExpression || LogicalANDExpression`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./LogicalANDExpression'), 
  ],
};
