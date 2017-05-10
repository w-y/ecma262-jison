module.exports = {
  conditions: [''],
  name: 'BindingList_In',
  rules: [
    'LexicalBinding_In',
    'BindingList_In , LexicalBinding_In',
  ],
  handlers: [
    '$$ = [$1]',
    '$$ = $1.concat([$3])',
  ],
  subRules: [
    require('./LexicalBinding_In'),
  ],
};
