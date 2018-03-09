'use strict';

module.exports = {
  conditions: [''],
  name: 'FormalParameter',
  rules: ['BindingElement'],
  handlers: ['$$ = $1;'],
  subRules: [require('./BindingElement')]
};