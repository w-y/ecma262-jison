const EmptyStatement = require('./emptystatement');

const ExpressionStatement = require('./expressionstatement');

const Statement = {
  conditions: [''],
  name: 'Statement',
  rules: [
    `${EmptyStatement.name}`,
    `${ExpressionStatement.name} ;`
  ],
  handlers: [
    `;`,
    `;`,
  ],
  subRules: [
    EmptyStatement,
    ExpressionStatement,
  ],
}

module.exports = Statement;
