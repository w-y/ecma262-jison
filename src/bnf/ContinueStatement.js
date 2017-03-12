module.exports = {
  conditions: [''],
  name: 'ContinueStatement',
  rules: [
    `continue ;`,
    `CONTINUE_LF`,
    `continue LabelIdentifier ;`,
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
