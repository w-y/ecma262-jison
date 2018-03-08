'use strict';

module.exports = {
  conditions: [''],
  name: 'ArrowFunction_In',
  rules: ['ArrowParameters => ConciseBody_In'],
  handlers: ['$$ = new (require(\'./ast/ArrowFunctionNode\'))($1, $3, { loc: this._$, yy })'],
  subRules: [require('./ArrowParameters'), require('./ConciseBody_In')]
};