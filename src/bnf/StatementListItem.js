module.exports = {
  conditions: [''],
  name: 'StatementListItem',
  rules: [
    'Statement',
    'Declaration',
  ],
  handlers: [
    ';',
    ';',
  ],
  subRules: [
    require('./Statement'),
    require('./Declaration'),
  ],
};
