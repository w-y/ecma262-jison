module.exports = {
  conditions: [''],
  name: 'VariableDeclarationList_In',
  rules: [
    'VariableDeclaration_In',
    'VariableDeclarationList_In , VariableDeclaration_In',
  ],
  handlers: [
    '$$ = [$1]',
    '$$ = $1.concat($3)',
  ],
  subRules: [
    require('./VariableDeclaration_In'),
  ],
};
