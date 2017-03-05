const Expression_In = require('./expression_in');

const ExpressionStatement = {
  conditions: [''],
  name: 'ExpressionStatement',
  rules: [
    `${Expression_In.name}`
  ],
  handlers: [
    `;`,
  ],
  subRules: [
    Expression_In,
  ],
}

module.exports = ExpressionStatement;
