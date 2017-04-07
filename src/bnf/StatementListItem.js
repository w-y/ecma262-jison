module.exports = {
  conditions: [''],
  name: 'StatementListItem',
  rules: [
    'Statement',
    'Declaration',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1',
  ],
  subRules: [
    require('./Statement'),
    require('./Declaration'),
  ],
};
