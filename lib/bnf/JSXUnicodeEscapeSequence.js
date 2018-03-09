'use strict';

module.exports = {
  conditions: [''],
  name: 'JSXUnicodeEscapeSequence',
  rules: ['JSXUnicodeEscapeSequenceStart Hex4Digits'],
  handlers: ['$$ = String.fromCodePoint($2);'],
  subRules: [require('./Hex4Digits')]
};