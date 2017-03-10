module.exports = {
  conditions: [''],
  name: 'Statement',
  rules: [
    `EmptyStatement`,
    `ExpressionStatement`,
    `VariableStatement`,
    `BlockStatement`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1;`,
    `$$ = $1;`,
    `console.log('block statement: ' + $1);$$ = $1;`,
  ],
  subRules: [
    require('./EmptyStatement'),
    require('./ExpressionStatement'),
    require('./VariableStatement'),
    require('./BlockStatement'),
  ],
};
