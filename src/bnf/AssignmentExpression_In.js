module.exports = {
  conditions: [''],
  name: 'AssignmentExpression_In',
  rules: [
    'ConditionalExpression_In',
    // 'LeftHandSideExpression AssignmentOperator AssignmentExpression_In',
    // 'LeftHandSideExpression = AssignmentExpression_In',
    // 'ArrowFunction_In',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/AssignmentExpression\').AssignmentExpressionNode)($2, $1, $3, { loc: this._$, yy });',
    '$$ = new (require(\'./ast/AssignmentExpression\').AssignmentExpressionNode)($2, $1, $3, { loc: this._$, yy });',
    '$$ = $1',
  ],
  subRules: [
    require('./ConditionalExpression_In'),
    require('./LeftHandSideExpression'),
    require('./ArrowFunction_In'),
  ],
};

