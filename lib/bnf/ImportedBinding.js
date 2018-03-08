'use strict';

module.exports = {
  conditions: [''],
  name: 'ImportedBinding',
  rules: ['BindingIdentifier'],
  handlers: ['$$ = $1;'],
  subRules: [require('./BindingIdentifier')]
};