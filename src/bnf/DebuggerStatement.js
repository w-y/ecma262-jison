module.exports = {
  conditions: [''],
  name: 'DebuggerStatement',
  rules: [
    'debugger ;',
  ],
  handlers: [
    '$$ = new (require(\'./ast/DebuggerStatementNode\'))({ loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
  ],
};
