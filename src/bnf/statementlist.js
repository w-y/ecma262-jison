const StatementListItem = require('./statementlistitem');

const StatementList = {
  conditions: [''],
  name: 'StatementList',
  rules: [
    `${StatementListItem.name}`,
    `StatementList ${StatementListItem.name}`,
  ],
  handlers: [
    `;`,
    `;`,
  ],
  subRules: [
    StatementListItem,
  ]
}

module.exports = StatementList;
