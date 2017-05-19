module.exports = {
  conditions: [''],
  name: 'VariableDeclarationList',
  rules: [
    'VariableDeclaration',
    'VariableDeclarationList , VariableDeclaration',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;$$.declarations.concat($3.declarations);',
  ],
  subRules: [
    require('./VariableDeclaration'),
  ],
};
