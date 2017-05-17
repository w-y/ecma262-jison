module.exports = {
  conditions: [''],
  name: 'LexicalDeclaration_In',
  rules: [
    'LetOrConst BindingList_In ;',
  ],
  handlers: [
    '$$ = new (require(\'./ast/LexicalDeclaration\').LexicalDeclarationNode)($1, $2, { loc: this._$, yy })',
  ],
  subRules: [
    require('./BindingList_In'),
  ],
};
