module.exports = {
  conditions: [''],
  name: 'FormalsList',
  rules: [
    'FormalParameter',
    'FormalsList , FormalParameter',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./FormalParameter'),
  ],
};
