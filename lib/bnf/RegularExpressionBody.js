'use strict';

module.exports = {
  conditions: [''],
  name: 'RegularExpressionBody',
  rules: ['RegularExpressionFirstChar', 'RegularExpressionFirstChar RegularExpressionChars'],
  handlers: ['$$ = $1', '$$ = $1 + $2'],
  subRules: [require('./RegularExpressionFirstChar'), require('./RegularExpressionChars')]
};