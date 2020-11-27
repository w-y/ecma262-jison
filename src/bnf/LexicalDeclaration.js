module.exports = {
  conditions: [''],
  name: 'LexicalDeclaration',
  rules: [
    'LetOrConst BindingList ;',
    'LetOrConst BindingList error',
  ],
  handlers: [
    '$$ = new (require(\'./ast/LexicalDeclaration\').LexicalDeclarationNode)($1, $2, { loc: this._$, yy })',
    '$$ = require(\'./asi/LexicalDeclaration\')(this, $2, @2, @3, this._$)',
  ],
  subRules: [
    require('./BindingList'),
  ],
};
