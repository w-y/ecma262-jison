module.exports = {
  conditions: [''],
  name: 'LexicalDeclaration_In',
  rules: [
    'LetOrConst BindingList_In ;',
  ],
  handlers: [
    '$$ = $1 + \' \' + $2 + $3',
  ],
  subRules: [
    require('./BindingList_In'),
  ],
};
