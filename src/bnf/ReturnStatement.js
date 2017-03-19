module.exports = {
  conditions: [''],
  name: 'ReturnStatement',
  rules: [
    'return ;',
    'return Expression_In ;',
  ],
  handlers: [
    '$$ = $1 + $2;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./Expression_In'),
    require('./Statement_Return'),
  ],
};
