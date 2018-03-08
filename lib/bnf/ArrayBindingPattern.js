'use strict';

module.exports = {
  conditions: [''],
  name: 'ArrayBindingPattern',
  rules: ['[ ]', '[ Elision ]', '[ BindingRestElement ]', '[ Elision BindingRestElement ]', '[ BindingElementList ]', '[ BindingElementList , BindingRestElement ]', '[ BindingElementList , Elision BindingRestElement ]', '[ BindingElementList , Elision ]'],
  handlers: ['$$ = new (require(\'./ast/ArrayBindingPatternNode\'))([], { loc: this._$, yy })', '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2, { loc: this._$, yy })', '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2, { loc: this._$, yy })', '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2.concat([$3]), { loc: this._$, yy })', '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2, { loc: this._$, yy })', '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2.concat([$3]), { loc: this._$, yy })', '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2.concat($4).concat([$5]), { loc: this._$, yy })', '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2.concat($4), { loc: this._$, yy })'],
  subRules: [require('./Elision'), require('./BindingRestElement'), require('./BindingElementList')]
};