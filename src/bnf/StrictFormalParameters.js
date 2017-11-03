module.exports = {
  conditions: [''],
  name: 'StrictFormalParameters',
  rules: [
    'FormalParameters',
  ],
  handlers: [
    '$$ = $1',
  ],
  subRules: [
    require('./FormalParameters'),
  ],
};
