module.exports = {
  conditions: [''],
  name: 'SuperCall',
  rules: [
    `super Arguments`,
  ],
  handlers: [
    `$$ = $1 + $2`,
  ],
  subRules: [
    require('./Arguments'),
  ],
};
