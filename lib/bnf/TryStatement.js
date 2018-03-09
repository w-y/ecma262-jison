'use strict';

module.exports = {
  conditions: [''],
  name: 'TryStatement',
  rules: ['try Block Catch', 'try Block Finally', 'try Block Catch Finally'],
  handlers: ['$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, $3, null, { loc: this._$, yy })', '$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, null, $3, { loc: this._$, yy })', '$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, $3, $4, { loc: this._$, yy })'],
  subRules: [require('./Block'), require('./Catch'), require('./Finally')]
};