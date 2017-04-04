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
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)([])',
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)($2)',
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)($2)',
    '$$ = new (require(\'./ast/Literal\').ArrayLiteralNode)($2.concat($4))',
  ],
  subRules: [
    require('./Elision'),
    require('./ElementList'),
  ],
};
