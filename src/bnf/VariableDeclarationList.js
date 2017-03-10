module.exports = {
  conditions: [''],
  name: 'VariableDeclarationList',
  rules: [
    `VariableDeclaration`,
    `VariableDeclarationList , VariableDeclaration`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./VariableDeclaration'),
  ],
};
