const StatementList = require('./statementList');

const ScriptBody = {
  conditions: [''],
  name: 'ScriptBody',
  rules: [
    `${StatementList.name}`,
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    StatementList,
  ]
}

module.exports = ScriptBody;
