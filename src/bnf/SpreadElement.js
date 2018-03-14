module.exports = {
  conditions: [''],
  name: 'SpreadElement',
  rules: [
    '... AssignmentExpression_In',
  ],
  handlers: [
    '$$ = new (require(\'./ast/SpreadElementNode\'))($2, { loc: this._$, yy })',
  ],
  subRules: [
    require('./AssignmentExpression_In'),
  ],
};
