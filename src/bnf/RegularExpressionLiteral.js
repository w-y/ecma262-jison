module.exports = {
  conditions: [''],
  name: 'RegularExpressionLiteral',
  rules: [
    'LEFT_REGEXP_DIV RegularExpressionBody RIGHT_REGEXP_DIV',
    'LEFT_REGEXP_DIV RegularExpressionBody RIGHT_REGEXP_DIV RegularExpressionFlags',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Literal\').RegexpLiteralNode)($1 + $2 + $3, $2, \'\', { loc: this._$, yy })',
    '$$ = new (require(\'./ast/Literal\').RegexpLiteralNode)($1 + $2 + $3, $2, $4, { loc: this._$, yy })',
  ],
  subRules: [
    require('./RegularExpressionBody'),
    require('./RegularExpressionFlags'),
  ],
};
