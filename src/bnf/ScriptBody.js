module.exports = {
  conditions: [''],
  name: 'ScriptBody',
  rules: [
    'StatementList',
  ],
  handlers: [
    ';',
  ],
  subRules: [
    require('./StatementList'),
  ],
};
