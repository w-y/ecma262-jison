'use strict';

module.exports = {
  conditions: [''],
  name: 'UnicodeEscapeSequenceContinue',
  rules: ['UnicodeEscapeSequenceContinueStart Hex4Digits'],
  handlers: ['$$ = String.fromCodePoint($2);'],
  subRules: [require('./Hex4Digits')]
};