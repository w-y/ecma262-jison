module.exports = {
  conditions: [''],
  name: 'ForDeclaration',
  rules: [
    'LetOrConst ForBinding',
  ],
  handlers: [
    '$$ = new (require(\'./ast/LexicalDeclaration\').LexicalDeclarationNode)($1, $2)',
  ],
  subRules: [
    require('./ForBinding'),
  ],
};
