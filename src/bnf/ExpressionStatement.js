module.exports = {
  conditions: [''],
  name: 'ExpressionStatement',
  rules: [
    'Expression_In ;',
  ],
  handlers: [
    '$$ = $1',
  ],
  subRules: [
    require('./Expression_In'),
  ],
};
