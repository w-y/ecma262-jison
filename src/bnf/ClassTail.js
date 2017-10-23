module.exports = {
  conditions: [''],
  name: 'ClassTail',
  rules: [
    '{ }',
    'ClassHeritage { }',
    '{ ClassBody }',
    'ClassHeritage { ClassBody }',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1',
    '$$ = $1',
    '$$ = $1',
  ],
  subRules: [
    require('./ClassHeritage'),
    require('./ClassBody'),
  ],
};
