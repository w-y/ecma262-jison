module.exports = {
  conditions: [''],
  name: 'Program',
  rules: [
    'Script',
  ],
  handlers: [
    '$$ = $1;',
  ],
  subRules: [
    require('./Script'),
  ],
};
