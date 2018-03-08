'use strict';

module.exports = {
  conditions: [''],
  name: 'RegularExpressionChar',
  rules: ['RegularExpressionNonTerminator', 'RegularExpressionBackslashSequence', 'RegularExpressionClass'],
  handlers: ['$$ = $1', '$$ = $1', '$$ = $1'],
  subRules: []
};