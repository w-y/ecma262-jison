module.exports = {
  conditions: [''],
  name: 'ArrayBindingPattern',
  rules: [
    '[ ]',
    '[ Elision ]',
    '[ BindingRestElement ]',
    '[ Elision BindingRestElement ]',
    '[ BindingElementList ]',
    '[ BindingElementList , BindingRestElement ]',
    '[ BindingElementList , Elision BindingRestElement ]',
    '[ BindingElementList , Elision ]',
  ],
  handlers: [
    '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))([])',
    '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2)',
    '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2)',
    '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2.concat([$3]))',
    '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2)',
    '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2.concat([$3]))',
    '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2.concat($4).concat([$5]))',
    '$$ = new (require(\'./ast/ArrayBindingPatternNode\'))($2.concat($4))',
  ],
  subRules: [
    require('./Elision'),
    require('./BindingRestElement'),
    require('./BindingElementList'),
  ],
};
