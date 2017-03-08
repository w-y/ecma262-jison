module.exports = {
  conditions: [''],
  name: 'NewExpression',
  rules: [
    `MemberExpression`,
  ],
  handlers: [
    `console.log('member expression: ' + $1); $$ = $1;;`,
  ],
  subRules: [
    require('./MemberExpression'),
  ],
};
