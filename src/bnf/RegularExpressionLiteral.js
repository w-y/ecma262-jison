module.exports = {
  conditions: [''],
  name: 'RegularExpressionLiteral',
  rules: [
    'LEFT_REGEXP_DIV RegularExpressionBody RIGHT_REGEXP_DIV',
    'LEFT_REGEXP_DIV RegularExpressionBody RIGHT_REGEXP_DIV RegularExpressionFlags',
  ],
  handlers: [
    '$$ = $1 + $2 + $3',
    '$$ = $1 + $2 + $3 + $4',
  ],
  subRules: [
    require('./RegularExpressionBody'),
    require('./RegularExpressionFlags'),
  ],
};
