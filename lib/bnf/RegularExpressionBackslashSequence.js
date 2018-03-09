'use strict';

module.exports = {
  conditions: [''],
  name: 'RegularExpressionBackslashSequence',
  rules: ['RegexpBackslash RegularExpressionNonTerminator'],
  handlers: ['$$ = $1 + $2'],
  subRules: [require('./RegularExpressionBackslashSequence')]
};