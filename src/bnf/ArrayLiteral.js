module.exports = {
  conditions: [''],
  name: 'ArrayLiteral',
  rules: [
    '[ ]',
    '[ Elision ]',
    '[ ElementList ]',
    '[ ElementList , Elision ]',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)([], { loc: $._this, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)($2, { loc: $._this, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)($2, { loc: $._this, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)($2.concat($4), { loc: $._this, lexer: yy.lexer })',
  ],
  subRules: [
    require('./Elision'),
    require('./ElementList'),
  ],
};
