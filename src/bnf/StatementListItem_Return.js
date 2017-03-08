module.exports = {
  conditions: [''],
  name: 'StatementListItem_Return',
  rules: [
    `Statement_Return`,
    `Declaration`,
  ],
  handlers: [
    `$$ = $1;`,
    `$$ = $1;`,
  ],
  subRules: [
    require('./Statement_Return'),
    require('./Declaration'),
  ],
};
