'use strict';

module.exports = {
  conditions: [''],
  name: 'Catch',
  rules: ['catch ( CatchParameter ) Block'],
  handlers: ['$$ = new (require(\'./ast/TryStatement\').CatchNode)($3, $5, { loc: this._$, yy })'],
  subRules: [require('./Block'), require('./CatchParameter')]
};