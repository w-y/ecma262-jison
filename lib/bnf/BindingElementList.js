'use strict';

module.exports = {
  conditions: [''],
  name: 'BindingElementList',
  rules: ['BindingElisionElement', 'BindingElementList , BindingElisionElement'],
  handlers: ['$$ = [$1]', '$$ = $1.push([$3])'],
  subRules: [require('./BindingElisionElement')]
};