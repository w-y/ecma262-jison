module.exports = {
  conditions: [''],
  name: 'AssignmentExpression',
  rules: [
    'ConditionalExpression',
    //'LeftHandSideExpression AssignmentOperator AssignmentExpression',
    //'LeftHandSideExpression = AssignmentExpression',
    'ArrowFunction',
  ],
  handlers: [
    '$$ = $1',
    //'$$ = new (require(\'./ast/AssignmentExpression\').AssignmentExpressionNode)($2, $1, $3, { loc: this._$, yy });',
    //'$$ = new (require(\'./ast/AssignmentExpression\').AssignmentExpressionNode)($2, $1, $3, { loc: this._$, yy });',
    '$$ = $1',
  ],
  subRules: [
    require('./ConditionalExpression'),
    require('./LeftHandSideExpression'),
    require('./ArrowFunction'),
  ],
};

