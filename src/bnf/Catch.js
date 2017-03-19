module.exports = {
  conditions: [''],
  name: 'Catch',
  rules: [
    'catch ( CatchParameter ) Block',
  ],
  handlers: [
    '$$ = $1 + $2 + $3 + $4 + $5',
  ],
  subRules: [
    require('./Block'),
    require('./CatchParameter'),
  ],
};
