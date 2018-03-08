'use strict';

module.exports = {
  name: 'DefaultClause_Return',
  conditions: [''],
  rules: ['default : StatementList_Return', 'default :'],
  handlers: ['$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)(null, $3, { loc: this._$, yy })', '$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)(null, null, { loc: this._$, yy })'],
  subRules: [require('./StatementList_Return')]
};