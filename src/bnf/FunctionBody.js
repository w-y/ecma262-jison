module.exports = {
  conditions: [''],
  name: 'FunctionBody',
  rules: [
    'FunctionStatementList',
  ],
  handlers: [
    '$$ = $1',
  ],
  subRules: [
    require('./FunctionStatementList'),
  ],
};
