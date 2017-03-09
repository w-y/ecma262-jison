module.exports = {
  conditions: [''],
  name: 'LeftHandSideExpression',
  rules: [
    `NewExpression`,
    `CallExpression`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1;console.log('call expression: ' + $1)`,
  ],
  subRules: [
    require('./NewExpression'),
    require('./CallExpression'),
  ],
};
