module.exports = {
  name: 'SwitchStatement',
  conditions: [''],
  rules: [
    'switch ( Expression_In ) CaseBlock',
  ],
  handlers: [
    '$$ = new (require(\'./ast/SwitchStatement\').SwitchStatementNode)($3, $5)',
  ],
  subRules: [
    require('./Expression_In'),
    require('./CaseBlock'),
  ],
};
