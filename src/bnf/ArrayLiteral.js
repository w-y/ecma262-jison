module.exports = {
  conditions: [''],
  name: 'ArrayLiteral',
  rules: [
    '[ ]',
    '[ Elision ]',
    '[ ElementList ]',
    '[ ElementList , Elision ]',
    '[ ElementList , ]',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)([], { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)($2, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)($2, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)($2.concat($4), { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)($2.concat([null]), { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./Elision'),
    require('./ElementList'),
  ],
};
