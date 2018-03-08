'use strict';

module.exports = {
  conditions: [''],
  name: 'Block_Return',
  rules: ['{ StatementList_Return }', '{ }'],
  handlers: ['$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)($2, { loc: this._$, yy });', '$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)([], { loc: this._$, yy });'],
  subRules: [require('./StatementList_Return')]
};