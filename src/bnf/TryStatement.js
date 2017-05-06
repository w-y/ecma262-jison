module.exports = {
  conditions: [''],
  name: 'TryStatement',
  rules: [
    'try Block Catch',
    'try Block Finally',
    'try Block Catch Finally',
  ],
  handlers: [
    '$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, $3, null, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, null, $3, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/TryStatement\').TryStatementNode)($2, $3, $4, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./Block'),
    require('./Catch'),
    require('./Finally'),
  ],
};
