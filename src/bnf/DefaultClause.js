module.exports = {
  name: 'DefaultClause',
  conditions: [''],
  rules: [
    'default : StatementList',
    'default :',
  ],
  handlers: [
    '$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)(null, $3)',
    '$$ = new (require(\'./ast/SwitchStatement\').SwitchCaseNode)(null, null)',
  ],
  subRules: [
    require('./StatementList'),
  ],
};
