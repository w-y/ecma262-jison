'use strict';

module.exports = {
  conditions: [''],
  name: 'JSXSingleStringCharacters',
  rules: ['JSXSingleStringCharacter', 'JSXSingleStringCharacter JSXSingleStringCharacters', 'JSXEscapeSequenceStart EscapeSequence', 'JSXEscapeSequenceStart EscapeSequence DoubleStringCharacters'],
  handlers: ['$$ = $1;', '$$ = $1 + $2;', '$$ = $1 + $2;', '$$ = $1 + $2;'],
  subRules: [require('./EscapeSequence')]
};