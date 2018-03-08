'use strict';

module.exports = {
  conditions: [''],
  name: 'SuperCall',
  rules: ['super Arguments'],
  handlers: ['$$ = new (require(\'./ast/LeftHandSideExpression\').SuperCallExpressionNode)($2, [], { loc: this._$, yy })'],
  subRules: [require('./Arguments')]
};