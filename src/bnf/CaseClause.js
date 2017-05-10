module.exports = {
  name: 'CaseClause',
  conditions: [''],
  rules: [
    'case Expression_In : StatementList',
    'case Expression_In :',
  ],
  handlers: [
    '$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)($2, $4, { loc: this._$, lexer: yy.lexer })',
    '$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)($2, null, { loc: this._$, lexer: yy.lexer })',
  ],
  subRules: [
    require('./Expression_In'),
    require('./StatementList'),
  ],
};
