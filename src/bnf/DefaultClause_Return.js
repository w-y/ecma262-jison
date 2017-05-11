module.exports = {
  name: 'DefaultClause_Return',
  conditions: [''],
  rules: [
    'default : StatementList_Return',
    'default :',
  ],
  handlers: [
    '$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)(null, $3, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)(null, null, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./StatementList_Return'),
  ],
};
