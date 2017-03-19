module.exports = {
  conditions: [''],
  name: 'Script',
  rules: [
    'ScriptBody',
  ],
  handlers: [
    ';',
  ],
  subRules: [
    require('./ScriptBody'),
  ],
};
