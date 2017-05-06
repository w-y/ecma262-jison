module.exports = {
  conditions: [''],
  name: 'VariableStatement',
  rules: [
    'var VariableDeclarationList_In ;',
  ],
  handlers: [
    '$$ = new (require(\'./ast/VariableStatement\').VariableStatementNode)($2, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./VariableDeclarationList_In'),
  ],
};
