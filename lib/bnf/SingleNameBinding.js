'use strict';

module.exports = {
  conditions: [''],
  name: 'SingleNameBinding',
  rules: ['BindingIdentifier Initializer_In', 'BindingIdentifier'],
  handlers: ['$$ = {key: $1, value: $2}', '$$ = {key: $1, value: $1}'],
  subRules: [require('./BindingIdentifier'), require('./Initializer_In')]
};