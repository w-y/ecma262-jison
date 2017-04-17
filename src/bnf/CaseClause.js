module.exports = {
  name: 'CaseClause',
  conditions: [''],
  rules: [
    'case Expression_In : StatementList',
    'case Expression_In :',
  ],
  handlers: [
    '$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)($2, $4)',
    '$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)($2, null)',
  ],
  subRules: [
    require('./Expression_In'),
    require('./StatementList'),
  ],
};
