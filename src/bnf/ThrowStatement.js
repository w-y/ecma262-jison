module.exports = {
  conditions: [''],
  name: 'ThrowStatement',
  rules: [
    'throw Expression_In ;',
    'THROW_LF',
  ],
  handlers: [
    '$$ = $1 + $2 + $3;',
    '$$ = $1 + $2;',
  ],
  subRules: [
    require('./Expression_In'),
  ],
};
