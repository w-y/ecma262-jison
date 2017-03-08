module.exports = {
  conditions: [''],
  name: 'ArrayBindingPattern',
  rules: [
    `[ ]`,
    `[ Elision ]`,
    `[ BindingRestElement ]`,
    `[ Elision BindingRestElement ]`,
    `[ BindingElementList ]`,
    `[ BindingElementList , BindingRestElement ]`,
    `[ BindingElementList , Elision BindingRestElement ]`,
    `[ BindingElementList , Elision ]`,
  ],
  handlers: [
    `$$ = $1 + $2`,
    `$$ = $1 + $2 + $3`,
    `$$ = $1 + $2 + $3`,
    `$$ = $1 + $2 + $3 + $4`,
    `$$ = $1 + $2 + $3`,
    `$$ = $1 + $2 + $3 + $4 + $5`,
    `$$ = $1 + $2 + $3 + $4 + $5 + $6`,
    `$$ = $1 + $2 + $3 + $4 + $5`,
  ],
  subRules: [
    require('./Elision'),
    require('./BindingRestElement'),
    require('./BindingElementList'),
  ],
};
