'use strict';

module.exports = {
  conditions: [''],
  name: 'NameSpaceImport',
  rules: ['* as ImportedBinding'],
  handlers: ['$$ = $3;'],
  subRules: [require('./ImportedBinding')]
};