'use strict';

module.exports = {
  conditions: [''],
  name: 'RegularExpressionChars',
  rules: ['RegularExpressionChar', 'RegularExpressionChars RegularExpressionChar'],
  handlers: ['$$ = $1', '$$ = $1 + $2'],
  subRules: [require('./RegularExpressionChar')]
};