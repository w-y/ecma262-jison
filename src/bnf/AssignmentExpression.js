module.exports = {
  conditions: [''],
  name: 'AssignmentExpression',
  rules: [
    `ConditionalExpression`,
  ],
  handlers: [
    `$$ = $1`,
  ],
  subRules: [
    require('./ConditionalExpression'),
  ],
};

