module.exports = {
  conditions: [''],
  name: 'ReturnStatement',
  rules: [
    'return ;',
    'return Expression_In ;',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ReturnStatementNode\'))(null)',
    '$$ = new (require(\'./ast/ReturnStatementNode\'))($1)',
  ],
  subRules: [
    require('./Expression_In'),
    require('./Statement_Return'),
  ],
};
