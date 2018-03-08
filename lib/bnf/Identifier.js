'use strict';

module.exports = {
  conditions: [''],
  name: 'Identifier',
  rules: ['IdentifierName'],
  handlers: ['$$ = $1;'],
  subRules: [require('./IdentifierName')]
};