module.exports = {
  name: 'SwitchStatement_Return',
  conditions: [''],
  rules: [
    'switch ( Expression_In ) CaseBlock_Return',
  ],
  handlers: [
    '$$ = new (require(\'./ast/SwitchStatement\').SwitchStatementNode)($3, $5, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./Expression_In'),
    require('./CaseBlock_Return'),
  ],
};
