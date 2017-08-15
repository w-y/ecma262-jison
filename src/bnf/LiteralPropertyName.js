module.exports = {
  conditions: [''],
  name: 'LiteralPropertyName',
  rules: [
    'IdentifierName',
    'StringLiteral',
    'NumericLiteral',
  ],
  handlers: [
    '$$ = $1',
    '$$ = new (require(\'./ast/Literal\').StringLiteralNode)($1, { raw: $1, loc: this._$, yy });',
    '$$ = $1',
  ],
  subRules: [
    require('./IdentifierName'),
    require('./StringLiteral'),
    require('./NumericLiteral'),
  ],
};
