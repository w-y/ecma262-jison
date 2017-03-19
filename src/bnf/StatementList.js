module.exports = {
  conditions: [''],
  name: 'StatementList',
  rules: [
    'StatementListItem',
    'StatementList StatementListItem',
  ],
  handlers: [
    ';',
    ';',
  ],
  subRules: [
    require('./StatementListItem'),
  ],
};
