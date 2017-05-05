module.exports = {
  conditions: [''],
  name: 'Identifier',
  rules: [
    'IdentifierName',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Identifier\').IdentifierNode)($1, { loc: this._$, lexer: yy.lexer });',
  ],
  subRules: [
    require('./IdentifierName'),
  ],
};
