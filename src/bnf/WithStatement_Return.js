module.exports = {
  conditions: [''],
  name: 'WithStatement_Return',
  rules: [
    'with ( Expression_In ) Statement_Return',
  ],
  handlers: [
    '$$ = new (require(\'./ast/WithStatement\').WithStatementNode)($3, $5, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./Expression_In'),
    require('./Statement_Return'),
  ],
};
