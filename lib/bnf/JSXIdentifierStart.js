'use strict';

module.exports = {
  conditions: [''],
  name: 'JSXIdentifierStart',
  rules: ['JSXUnicodeIDStart', 'JSXUnicodeEscapeSequence', 'JSX$', 'JSX_'],
  handlers: ['$$ = $1;', '$$ = $1;', // TODO: unicode with id start
  '$$ = $1;', '$$ = $1;'],
  subRules: [require('./JSXUnicodeEscapeSequence')]
};