module.exports = {
  conditions: [''],
  name: 'ExpressionStatement',
  rules: [
    'Expression_In ;',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ExpressionStatement\').ExpressionStatementNode)($1, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./Expression_In'),
  ],
};
