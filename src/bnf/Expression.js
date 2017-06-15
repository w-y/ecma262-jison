module.exports = {
  conditions: [''],
  name: 'Expression',
  rules: [
    'AssignmentExpression',
    'Expression , AssignmentExpression',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = (require(\'./ast/SequenceExpressionNode\'))([$1].concat([$3]), { loc: this._$, yy })',
  ],
  subRules: [
    require('./AssignmentExpression'),
  ],
};
