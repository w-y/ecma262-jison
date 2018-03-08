'use strict';

module.exports = {
  conditions: [''],
  name: 'ImportedDefaultBinding',
  rules: ['ImportedBinding'],
  handlers: ['$$ = $1;'],
  subRules: [require('./ImportedBinding')]
};