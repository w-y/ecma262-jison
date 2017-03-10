module.exports = {
  conditions: [''],
  name: 'EqualityExpression',
  rules: [
    `RelationalExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./RelationalExpression'),
  ],
}
