module.exports = {
  conditions: [''],
  name: 'Block_Return',
  rules: [
    '{ StatementList_Return }',
    '{ }',
  ],
  handlers: [
    '$$ = $1 + $2 + $3;',
    '$$ = $1 + $2;',
  ],
  subRules: [
    require('./StatementList_Return'),
  ],
};
