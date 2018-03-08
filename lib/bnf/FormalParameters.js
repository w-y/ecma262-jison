'use strict';

module.exports = {
  conditions: [''],
  name: 'FormalParameters',
  rules: ['FormalParameterList'],
  handlers: ['$$ = $1;'],
  subRules: [require('./FormalParameterList')]
};