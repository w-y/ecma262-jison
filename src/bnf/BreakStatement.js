module.exports = {
  conditions: [''],
  name: 'BreakStatement',
  rules: [
    `break ;`,
    `BREAK_LF ;`,
    `break LabelIdentifier ;`,
  ],
  handlers: [
    `$$ = $1 + $2;`,
    `$$ = $1;`,
    `$$ = $1 + $2 + $3;`,
  ],
  subRules: [
    require('./LabelIdentifier'),
  ],
};
