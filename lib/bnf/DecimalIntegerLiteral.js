'use strict';

module.exports = {
  conditions: [''],
  name: 'DecimalIntegerLiteral',
  rules: ['0', '0 DecimalDigits', 'NonZeroDigit', 'NonZeroDigit DecimalDigits'],
  handlers: ['$$ = $1;', '$$ = $1 + $2;', '$$ = $1;', '$$ = $1 + $2;'],
  subRules: [require('./DecimalDigits')]
};