'use strict';

module.exports = {
  conditions: [''],
  name: 'ExponentPart',
  rules: ['ExponentIndicator SignedInteger'],
  handlers: ['$$ = $1 + $2;'],
  subRules: [require('./SignedInteger')]
};