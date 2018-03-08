'use strict';

module.exports = {
  conditions: [''],
  name: 'DecimalLiteral',
  rules: ['DecimalIntegerLiteral DecimalPoint', 'DecimalIntegerLiteral DecimalPoint DecimalDigits', 'DecimalPoint DecimalDigits', 'DecimalIntegerLiteral', 'DecimalIntegerLiteral DecimalPoint DecimalDigits ExponentPart', 'DecimalIntegerLiteral DecimalPoint ExponentPart', 'DecimalPoint DecimalDigits ExponentPart', 'DecimalIntegerLiteral ExponentPart'],
  handlers: ['$$ = $1 + $2;', '$$ = $1 + $2 + $3;', '$$ = $1 + $2;', '$$ = $1;', '$$ = $1 + $2 + $3 + $4;', '$$ = $1 + $2 + $3;', '$$ = $1 + $2 + $3;', '$$ = $1 + $2;'],
  subRules: [require('./DecimalIntegerLiteral'), require('./DecimalDigits'), require('./ExponentPart')]
};