module.exports = {
  conditions: [''],
  name: 'MemberExpression',
  rules: [
    `PrimaryExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./PrimaryExpression'),
  ],
};
