module.exports = {
  conditions: [''],
  name: 'AssignmentExpression',
  rules: [
    `ConditionalExpression`,
    `LeftHandSideExpression = AssignmentExpression`,
    `LeftHandSideExpression AssignmentOperator AssignmentExpression`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2 + $3`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./ConditionalExpression'),
    require('./LeftHandSideExpression'),
    require('./AssignmentExpression'),
    require('./AssignmentOperator'),
  ],
};

