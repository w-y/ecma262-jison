'use strict';

module.exports = {
  conditions: [''],
  name: 'PropertySetParameterList',
  rules: ['FormalParameter'],
  handlers: ['$$ = [$1]'],
  subRules: [require('./FormalParameter')]
};