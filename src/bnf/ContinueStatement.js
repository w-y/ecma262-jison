module.exports = {
  conditions: [''],
  name: 'ContinueStatement',
  rules: [
    'continue ;',
    'CONTINUE_LF',
    'continue LabelIdentifier ;',
  ],
  handlers: [
    `$$ = new (require('./ast/ContinueStatement'))(null);`,
    `throw new (require('./error').ParseError)();`,
    `$$ = new (require('./ast/ContinueStatement'))($2);`,
  ],
  subRules: [
    require('./LabelIdentifier'),
  ],
};
