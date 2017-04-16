module.exports = {
  conditions: [''],
  name: 'LexicalDeclaration',
  rules: [
    'LetOrConst BindingList ;',
  ],
  handlers: [
    '$$ = new (require(\'./ast/LexicalDeclaration\').LexicalDeclarationNode)($1, $2)',
  ],
  subRules: [
    require('./BindingList'),
  ],
};
