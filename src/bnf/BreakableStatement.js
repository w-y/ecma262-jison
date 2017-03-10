module.exports = {
  name: 'BreakableStatement',
  conditions: [''],
  rules: [
    `IterationStatement`,
  ],
  handlers: [
    `$$ = $1`,
  ],
  subRules: [
    require('./IterationStatement'),
  ],
};
