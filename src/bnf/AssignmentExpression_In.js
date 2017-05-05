module.exports = {
  conditions: [''],
  name: 'AssignmentExpression_In',
  rules: [
    'ConditionalExpression_In',
    'LeftHandSideExpression AssignmentOperator AssignmentExpression_In',
    'LeftHandSideExpression = AssignmentExpression_In',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/AssignmentExpression\').AssignmentExpressionNode)($2, $1, $3, { loc: this._$, lexer: yy.lexer });',
    '$$ = new (require(\'./ast/AssignmentExpression\').AssignmentExpressionNode)($2, $1, $3, { loc: this._$, lexer: yy.lexer });',
  ],
  subRules: [
    require('./ConditionalExpression_In'),
    require('./LeftHandSideExpression'),
  ],
};

