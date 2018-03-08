'use strict';

module.exports = {
  conditions: [''],
  name: 'RegularExpressionClass',
  rules: ['LEFT_REGEXP_CLASS_BRACKET RIGHT_REGEXP_CLASS_BRACKET', 'LEFT_REGEXP_CLASS_BRACKET RegularExpressionClassChars RIGHT_REGEXP_CLASS_BRACKET'],
  handlers: ['$$ = $1', '$$ = $1 + $2 + $3'],
  subRules: [require('./RegularExpressionClassChars')]
};