module.exports = {
  conditions: [''],
  name: 'ArgumentList',
  rules: [
    'AssignmentExpression_In',
    '... AssignmentExpression_In',
    'ArgumentList , AssignmentExpression_In',
    'ArgumentList , ... AssignmentExpression_In',
  ],
  handlers: [
    '$$ = [$1]',
    '$$ = [new (require(\'./ast/SpreadElementNode\'))($2, { loc: this._$, yy })]',
    '$$ = $1.concat($3)',
    '$$ = $1.concat([new (require(\'./ast/SpreadElementNode\'))($4, { loc: this._$, yy })])',
  ],
  subRules: [
    require('./AssignmentExpression_In'),
  ],
};
