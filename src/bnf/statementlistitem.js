const Statement = require('./statement');

const StatementListItem = {
  conditions: [''],
  name: 'StatementListItem',
  rules: [
    `${Statement.name}`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    Statement,
  ]
}

module.exports = StatementListItem;
