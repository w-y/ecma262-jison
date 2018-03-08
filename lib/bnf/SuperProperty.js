'use strict';

module.exports = {
  conditions: [''],
  name: 'SuperProperty',
  rules: ['super [ Expression_In ]', 'super . IdentifierName'],
  handlers: ['$$ =\n      new (require(\'./ast/LeftHandSideExpression\').MemberExpressionNode)(new (require(\'./ast/SuperNode\')($1)), $3, { loc: this._$, yy })\n    ', '$$ =\n      new (require(\'./ast/LeftHandSideExpression\').MemberExpressionNode)(new (require(\'./ast/SuperNode\')($1)), $3, { loc: this._$, yy })\n    '],
  subRules: [require('./Expression_In'), require('./IdentifierName')]
};