'use strict';

module.exports = {
  conditions: [''],
  name: 'StringLiteral',
  rules: ['SingleQuoteStart SingleStringCharacters SingleQuoteEnd', 'DoubleQuoteStart DoubleStringCharacters DoubleQuoteEnd', 'SingleQuoteStart SingleQuoteEnd', 'DoubleQuoteStart DoubleQuoteEnd'],
  handlers: ['$$ = $1 + $2 + $3;', '$$ = $1 + $2 + $3;', '$$ = $1 + $2;', '$$ = $1 + $2;'],
  subRules: [require('./SingleStringCharacters'), require('./DoubleStringCharacters')]
};