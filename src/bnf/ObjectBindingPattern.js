module.exports = {
  conditions: [''],
  name: 'ObjectBindingPattern',
  rules: [
    'BLOCK_START }',
    'BLOCK_START BindingPropertyList }',
    'BLOCK_START BindingPropertyList , }',
  ],
  handlers: [
    '$$ = $1 + $2',
    '$$ = $1 + $2 + $3',
    '$$ = $1 + $2 + $3',
  ],
  subRules: [
    require('./BindingPropertyList'),
  ],
};
