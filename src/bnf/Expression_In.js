module.exports = {
  conditions: [''],
  name: 'Expression_In',
  rules: [
    'AssignmentExpression_In',
    'Expression_In , AssignmentExpression_In',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = (require(\'../ast/SequenceExpressionNode\'))([$1].concat([$3]), { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./AssignmentExpression_In'),
  ],
};
