module.exports = {
  conditions: [''],
  name: 'Finally',
  rules: [
    'finally Block',
  ],
  handlers: [
    '$$ = $2',
  ],
  subRules: [
    require('./Block'),
  ],
};
