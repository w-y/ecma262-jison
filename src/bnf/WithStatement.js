module.exports = {
  conditions: [''],
  name: 'WithStatement',
  rules: [
    'with ( Expression_In ) Statement',
  ],
  handlers: [
    '$$ = new (require(\'./ast/WithStatement\').WithStatementNode)($3, $5, { loc: this._$, yy })',
  ],
  subRules: [
    require('./Expression_In'),
    require('./Statement'),
  ],
};
