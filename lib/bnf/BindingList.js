'use strict';

module.exports = {
  conditions: [''],
  name: 'BindingList',
  rules: ['LexicalBinding', 'BindingList , LexicalBinding'],
  handlers: ['$$ = [$1]', '$$ = $1.concat([$3])'],
  subRules: [require('./LexicalBinding')]
};