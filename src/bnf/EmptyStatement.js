module.exports = {
  name: 'EmptyStatement',
  conditions: [''],
  rules: [
    ';',
  ],
  handlers: [
    '$$ = new (require(\'./ast/EmptyStatement\').EmptyStatementNode)();',
  ],
  subRules: [],
};
