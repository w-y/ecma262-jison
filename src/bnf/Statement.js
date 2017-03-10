module.exports = {
  conditions: [''],
  name: 'Statement',
  rules: [
    `EmptyStatement`,
    `ExpressionStatement`,
    `VariableStatement`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1;`,
    `$$ = $1;`,
  ],
  subRules: [
    require('./EmptyStatement'),
    require('./ExpressionStatement'),
    require('./VariableStatement'),
  ],
};
