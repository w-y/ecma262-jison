module.exports = {
  conditions: [''],
  name: 'RelationalExpression',
  rules: [
    `ShiftExpression`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    require('./ShiftExpression'),
  ],
}
