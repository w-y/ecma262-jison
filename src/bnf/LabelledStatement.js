module.exports = {
  conditions: [''],
  name: 'LabelledStatement',
  rules: [
    'LabelIdentifier : LabelledItem',
  ],
  handlers: [
    '$$ = $1 + $2 + $3;',
  ],
  subRules: [
    require('./LabelIdentifier'),
    require('./LabelledItem'),
  ],
};
