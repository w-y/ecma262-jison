module.exports = {
  name: 'BreakableStatement_Return',
  conditions: [''],
  rules: [
    'IterationStatement_Return',
    'SwitchStatement_Return',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1',
  ],
  subRules: [
    require('./IterationStatement_Return'),
    require('./SwitchStatement_Return'),
  ],
};
