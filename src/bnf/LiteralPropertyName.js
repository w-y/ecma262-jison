module.exports = {
  conditions: [''],
  name: 'LiteralPropertyName',
  rules: [
    'IdentifierName',
    'StringLiteral',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/Literal\').StringLiteralNode)($1, { raw: $1, loc: this._$, lexer: yy.lexer });',
  ],
  subRules: [
    require('./IdentifierName'),
    require('./StringLiteral'),
  ],
};
