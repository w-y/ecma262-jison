'use strict';

module.exports = {
  conditions: [''],
  name: 'TryStatement_Return',
  rules: ['try Block_Return Catch_Return', 'try Block_Return Finally_Return', 'try Block_Return Catch_Return Finally_Return'],
  handlers: ['$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, $3, null, { loc: this._$, yy })', '$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, null, $3, { loc: this._$, yy })', '$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, $3, $4, { loc: this._$, yy })'],
  subRules: [require('./Block_Return'), require('./Catch_Return'), require('./Finally_Return')]
};