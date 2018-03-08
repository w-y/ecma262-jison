'use strict';

module.exports = {
  conditions: [''],
  name: 'BindingElement',
  rules: ['SingleNameBinding', 'BindingPattern Initializer_In', 'BindingPattern'],
  handlers: ['$$ = $1', '$$ = {key: $1, value: $2}', '$$ = {key: $1, value: $1}'],
  subRules: [require('./SingleNameBinding'), require('./BindingPattern'), require('./Initializer_In')]
};