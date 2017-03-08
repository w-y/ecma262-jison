module.exports = {
  conditions: [''],
  name: 'PropertyName',
  rules: [
    `LiteralPropertyName`,
  ],
  handlers: [
    `$$ = $1`,
  ],
  subRules: [
    require('./LiteralPropertyName'),
  ],
};
