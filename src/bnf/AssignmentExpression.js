module.exports = {
  conditions: [''],
  name: 'AssignmentExpression',
  rules: [
    'ConditionalExpression',
    'LeftHandSideExpression AssignmentOperator AssignmentExpression',
    'LeftHandSideExpression = AssignmentExpression',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/AssignmentExpression\').AssignmentExpressionNode)($2, $1, $3, { loc: this._$, lexer: yy.lexer });',
    '$$ = new (require(\'./ast/AssignmentExpression\').AssignmentExpressionNode)($2, $1, $3, { loc: this._$, lexer: yy.lexer });',
  ],
  subRules: [
    require('./ConditionalExpression'),
    require('./LeftHandSideExpression'),
  ],
};

