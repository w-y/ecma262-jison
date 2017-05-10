module.exports = {
  conditions: [''],
  name: 'Block_Return',
  rules: [
    '{ StatementList_Return }',
    '{ }',
  ],
  handlers: [
    '$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)($2, { loc: this._$, lexer: yy.lexer });',
    '$$ = new (require(\'./ast/BlockStatement\').BlockStatementNode)([], { loc: this._$, lexer: yy.lexer });',
  ],
  subRules: [
    require('./StatementList_Return'),
  ],
};
