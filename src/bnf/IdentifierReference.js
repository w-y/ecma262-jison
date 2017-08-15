module.exports = {
  conditions: [''],
  name: 'IdentifierReference',
  rules: [
    'Identifier',
    'of',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = new (require(\'./ast/Identifier\').IdentifierNode)($1, { loc: this._$, yy })',
  ],
  subRules: [
    require('./Identifier'),
  ],
};
