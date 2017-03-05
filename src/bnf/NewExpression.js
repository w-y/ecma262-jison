module.exports = {
  conditions: [''],
  name: 'NewExpression',
  rules: [
    `MemberExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./MemberExpression'),
  ],
};
