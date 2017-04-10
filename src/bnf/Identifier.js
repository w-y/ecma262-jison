module.exports = {
  conditions: [''],
  name: 'Identifier',
  rules: [
    'IdentifierName',
  ],
  handlers: [
    '$$ = new (require(\'./ast/Identifier\').IdentifierNode)($1);',
  ],
  subRules: [
    require('./IdentifierName'),
  ],
};
