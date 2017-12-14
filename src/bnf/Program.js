module.exports = {
  conditions: [''],
  name: 'Program',
  rules: [
    'Script',
    // 'Module',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
  ],
  subRules: [
    require('./Script'),
    require('./Module'),
  ],
};
