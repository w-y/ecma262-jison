module.exports = {
  conditions: [''],
  name: 'LexicalDeclaration',
  rules: [
    'LetOrConst BindingList ;',
  ],
  handlers: [
    '$$ = $1 + \' \' + $2 + $3',
  ],
  subRules: [
    require('./BindingList'),
  ],
};
