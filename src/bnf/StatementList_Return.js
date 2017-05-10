module.exports = {
  conditions: [''],
  name: 'StatementList_Return',
  rules: [
    'StatementListItem_Return',
    'StatementList_Return StatementListItem_Return',
  ],
  handlers: [
    '$$ = [$1]',
    '$$ = $1.concat([$2])',
  ],
  subRules: [
    require('./StatementListItem_Return'),
  ],
};
