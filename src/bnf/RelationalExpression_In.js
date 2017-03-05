module.exports = {
  conditions: [''],
  name: 'RelationalExpression_In',
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
