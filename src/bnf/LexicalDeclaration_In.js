module.exports = {
  conditions: [''],
  name: 'LexicalDeclaration_In',
  rules: [
    'LetOrConst BindingList_In ;',
  ],
  handlers: [
    '$$ = new (require(\'./ast/LexicalDeclaration\').LexicalDeclarationNode)($1, $2)',
  ],
  subRules: [
    require('./BindingList_In'),
  ],
};
