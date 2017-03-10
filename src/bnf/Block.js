module.exports = {
  conditions: [''],
  name: 'Block',
  rules: [
    `{ }`,
    `{ StatementList }`,
  ],
  handlers: [
    `$$ = $1 + $2`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./StatementList'),
  ],
};
