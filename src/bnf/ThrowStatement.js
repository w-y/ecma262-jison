module.exports = {
  conditions: [''],
  name: 'ThrowStatement',
  rules: [
    'throw Expression_In ;',
    'THROW_LF',
    'throw Expression_In error',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ThrowStatementNode\'))($2, { loc: this._$, yy })',
    '$$ = new (require(\'./ast/ThrowStatementNode\'))(null, { loc: this._$, yy })',
    '$$ = require(\'./asi/Throw\')(this, $2, $3, @2, @3, this._$)',
  ],
  subRules: [
    require('./Expression_In'),
  ],
};
