module.exports = {
  conditions: [''],
  name: 'ExpressionStatement',
  rules: [
    'Expression_In ;',
    'Expression_In error',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ExpressionStatement\').ExpressionStatementNode)($1, { loc: this._$, yy })',
    '$$ = require(\'./asi/Expression\')(this, $1, $2, @1, @2, this._$)',
  ],
  subRules: [
    require('./Expression_In'),
  ],
};
