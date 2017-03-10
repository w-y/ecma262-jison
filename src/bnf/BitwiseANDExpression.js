module.exports = {
  conditions: [''],
  name: 'BitwiseANDExpression',
  rules: [
    `EqualityExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./EqualityExpression'),
  ],
}
