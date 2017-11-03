module.exports = {
  conditions: [''],
  name: 'ClassBody',
  rules: [
    'ClassElementList',
  ],
  handlers: [
    '$$ = $1',
  ],
  subRules: [
    require('./ClassElementList'),
  ],
};
