module.exports = {
  conditions: [''],
  name: 'PropertyName',
  rules: [
    'LiteralPropertyName',
    'ComputedPropertyName',
  ],
  handlers: [
    '$$ = $1',
    '$$ = $1',
  ],
  subRules: [
    require('./LiteralPropertyName'),
    require('./ComputedPropertyName'),
  ],
};
