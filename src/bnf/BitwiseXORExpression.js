module.exports = {
  conditions: [''],
  name: 'BitwiseXORExpression',
  rules: [
    `BitwiseANDExpression`,
    `BitwiseXORExpression ^ BitwiseANDExpression`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1 + $2 + $3;`,
  ],
  subRules: [
    require('./BitwiseANDExpression'),
  ],
};
