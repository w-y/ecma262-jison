'use strict';

module.exports = {
  conditions: [''],
  name: 'JSXDoubleStringCharacters',
  rules: ['JSXDoubleStringCharacter', 'JSXDoubleStringCharacter JSXDoubleStringCharacters', 'JSXEscapeSequenceStart EscapeSequence', 'JSXEscapeSequenceStart EscapeSequence DoubleStringCharacters'],
  handlers: ['$$ = $1;', '$$ = $1 + $2;', '$$ = $1;', '$$ = $1 + $2;'],
  subRules: [require('./EscapeSequence')]
};