'use strict';

module.exports = {
  name: 'CaseClause',
  conditions: [''],
  rules: ['case Expression_In : StatementList', 'case Expression_In :'],
  handlers: ['$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)($2, $4, { loc: this._$, yy })', '$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)($2, null, { loc: this._$, yy })'],
  subRules: [require('./Expression_In'), require('./StatementList')]
};