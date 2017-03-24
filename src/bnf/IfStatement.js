module.exports = {
  name: 'IfStatement',
  conditions: [''],
  rules: [
    'if ( Expression_In ) Statement',
    'if ( Expression_In ) Statement else Statement',
  ],
  handlers: [
    '$$ = $1 + $2 + $3 + $4 + $5;',
    '$$ = $1 + $2 + $3 + $4 + $5 + $6 + $7;',
  ],
  subRules: [
    require('./Statement'),
    require('./Expression_In'),
  ],
};
