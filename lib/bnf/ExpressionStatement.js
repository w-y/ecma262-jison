'use strict';

module.exports = {
  conditions: [''],
  name: 'ExpressionStatement',
  rules: ['Expression_In ;'],
  handlers: ['$$ = new (require(\'./ast/ExpressionStatement\').ExpressionStatementNode)($1, { loc: this._$, yy })'],
  subRules: [require('./Expression_In')]
};