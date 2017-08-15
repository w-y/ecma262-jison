module.exports = {
  conditions: [''],
  name: 'Literal',
  rules: [
    'NullLiteral',
    'BooleanLiteral',
    'StringLiteral',
    'DecimalLiteral',
    'HexIntegerLiteral',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Literal\').NullLiteralNode)($1, { raw: $1, loc: this._$, yy })',
    '$$ = new (require(\'./ast/Literal\').BooleanLiteralNode)($1, { raw: $1, loc: this._$, yy });',
    '$$ = new (require(\'./ast/Literal\').StringLiteralNode)($1, { raw: $1, loc: this._$, yy });',
    '$$ = new (require(\'./ast/Literal\').DecimalLiteralNode)($1, { raw: $1, loc: this._$, yy });',
    '$$ = new (require(\'./ast/Literal\').HexIntegerLiteralNode)($1, { raw: $1, loc: this._$, yy });',
  ],
  subRules: [
    require('./StringLiteral'),
    require('./DecimalLiteral'),
    require('./HexIntegerLiteral'),
  ],
};
