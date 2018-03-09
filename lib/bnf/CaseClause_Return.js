'use strict';

module.exports = {
  name: 'CaseClause_Return',
  conditions: [''],
  rules: ['case Expression_In : StatementList_Return', 'case Expression_In :'],
  handlers: ['$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)($2, $4, { loc: this._$, yy })', '$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)($2, null, { loc: this._$, yy })'],
  subRules: [require('./Expression_In'), require('./StatementList_Return')]
};