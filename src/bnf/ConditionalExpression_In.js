
module.exports = {
  conditions: [''],
  name: 'ConditionalExpression_In',
  rules: [
    'LogicalORExpression_In',
    'LogicalORExpression_In ? AssignmentExpression_In : AssignmentExpression_In',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = new (require(\'./ast/ConditionalExpression\')).ConditionalExpressionNode($1, $3, $5, { loc: this._$, lexer: yy.lexer });',
  ],
  subRules: [
    require('./LogicalORExpression_In'),
    require('./AssignmentExpression_In'),
  ],
};
