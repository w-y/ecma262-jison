'use strict';

module.exports = {
  conditions: [''],
  name: 'LexicalDeclaration',
  rules: ['LetOrConst BindingList ;'],
  handlers: ['$$ = new (require(\'./ast/LexicalDeclaration\').LexicalDeclarationNode)($1, $2, { loc: this._$, yy })'],
  subRules: [require('./BindingList')]
};