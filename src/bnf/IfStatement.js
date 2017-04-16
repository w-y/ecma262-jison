module.exports = {
  name: 'IfStatement',
  conditions: [''],
  rules: [
    'if ( Expression_In ) Statement',
    'if ( Expression_In ) Statement else Statement',
  ],
  handlers: [
    '$$ = new (require(\'./ast/IfStatement\').IfStatementNode)($3, $5)',
    '$$ = new (require(\'./ast/IfStatement\').IfStatementNode)($3, $5, $7)',
  ],
  subRules: [
    require('./Statement'),
    require('./Expression_In'),
  ],
};
