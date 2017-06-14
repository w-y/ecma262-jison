module.exports = {
  conditions: [''],
  name: 'ArrowFunction',
  rules: [
    'ArrowParameters => ConciseBody',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ArrowFunctionNode\'))($1, $3, { loc: this._$, yy })',
  ],
  subRules: [
    require('./ArrowParameters'),
    require('./ConciseBody'),
  ],
};
