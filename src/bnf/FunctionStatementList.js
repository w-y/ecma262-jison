module.exports = {
  conditions: [''],
  name: 'FunctionStatementList',
  rules: [
    `StatementList_Return`,
  ],
  handlers: [
    `$$ = $1`,
  ],
  subRules: [
    require('./StatementList_Return'),
  ],
};
