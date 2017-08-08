module.exports = {
  conditions: [''],
  name: 'DecimalLiteral',
  rules: [
    'DecimalIntegerLiteral DecimalPoint',
    'DecimalIntegerLiteral DecimalPoint DecimalDigits',
    'DecimalPoint DecimalDigits',
    'DecimalIntegerLiteral',

    'DecimalIntegerLiteral DecimalPoint DecimalDigits ExponentPart',
    'DecimalIntegerLiteral DecimalPoint ExponentPart',
    'DecimalPoint DecimalDigits ExponentPart',
    'DecimalIntegerLiteral ExponentPart',
  ],
  handlers: [
    '$$ = $1 + $2;',
    '$$ = $1 + $2 + $3;',
    '$$ = $1 + $2;',
    '$$ = $1;',

    'console.log(\'DecimalIntegerLiteral DecimalPoint DecimalDigits ExponentPart\');$$ = $1 + $2 + $3 + $4;',
    'console.log(\'DecimalIntegerLiteral DecimalPoint ExponentPart\');$$ = $1 + $2 + $3;',
    'console.log(\'DecimalPoint DecimalDigits ExponentPart\');$$ = $1 + $2 + $3;',
    'console.log(\'DecimalIntegerLiteral ExponentPart\');$$ = $1 + $2;',
  ],
  subRules: [
    require('./DecimalIntegerLiteral'),
    require('./DecimalDigits'),

    require('./ExponentPart'),
  ],
};
