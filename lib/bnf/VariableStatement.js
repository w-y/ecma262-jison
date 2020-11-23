'use strict';

module.exports = {
  conditions: [''],
  name: 'VariableStatement',
  rules: ['var VariableDeclarationList_In ;', 'var VariableDeclarationList_In error'],
  handlers: ['$$ = new (require(\'./ast/VariableStatement\').VariableStatementNode)($2, { loc: this._$, yy })', '$$ = require(\'./asi/VariableStatement\')(this, $2, @2, @3, this._$)'],
  subRules: [require('./VariableDeclarationList_In')]
};