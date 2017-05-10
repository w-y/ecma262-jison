module.exports = {
  name: 'IfStatement',
  conditions: [''],
  rules: [
    'if ( Expression_In ) Statement',
    'if ( Expression_In ) Statement else Statement',
  ],
  handlers: [
    '$$ = new (require(\'./ast/IfStatement\').IfStatementNode)($3, $5, null, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/IfStatement\').IfStatementNode)($3, $5, $7, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./Statement'),
    require('./Expression_In'),
  ],
};
