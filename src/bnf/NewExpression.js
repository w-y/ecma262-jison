module.exports = {
  conditions: [''],
  name: 'NewExpression',
  rules: [
    `MemberExpression`,
    `new NewExpression`,
  ],
  handlers: [
    `console.log('member expression: ' + $1); $$ = $1;;`,
    `console.log('new expression: ' + $1); $$ = $1;;`,
  ],
  subRules: [
    require('./MemberExpression'),
  ],
};
