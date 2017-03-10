module.exports = {
  conditions: [''],
  name: 'VariableStatement',
  rules: [
    `var VariableDeclarationList_In ;`,
  ],
  handlers: [
    `$$ = $1 + ' ' + $2 + $3`,
  ],
  subRules: [
    require('./VariableDeclarationList_In'),
  ],
}
