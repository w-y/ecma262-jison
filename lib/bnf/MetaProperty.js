'use strict';

module.exports = {
  conditions: [''],
  name: 'MetaProperty',
  rules: ['new . target'],
  handlers: ['$$ = new (require(\'./ast/MetaPropertyNode\'))($1, $3, { loc: this._$, yy })'],
  subRules: []
};