'use strict';

module.exports = {
  conditions: [''],
  name: 'FunctionRestParameter',
  rules: ['BindingRestElement'],
  handlers: ['$$ = $1;'],
  subRules: [require('./BindingRestElement')]
};