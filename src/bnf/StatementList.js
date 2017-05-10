module.exports = {
  conditions: [''],
  name: 'StatementList',
  rules: [
    'StatementListItem',
    'StatementList StatementListItem',
  ],
  handlers: [
    '$$ = [$1];',
    '$$ = $1.concat([$2]);',
  ],
  subRules: [
    require('./StatementListItem'),
  ],
};
