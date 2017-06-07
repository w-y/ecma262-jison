module.exports = {
  conditions: [''],
  name: 'IdentifierName',
  rules: [
    'IdentifierStart',
    'IdentifierName IdentifierPart',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Identifier\').IdentifierNode)($1, { loc: this._$, yy })',
    '$1.value += $2; $$ = $1;',
  ],
  subRules: [
    require('./IdentifierStart'),
    require('./IdentifierPart'),
  ],
};
