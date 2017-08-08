module.exports = {
  conditions: [''],
  name: 'ExponentPart',
  rules: [
    'ExponentIndicator SignedInteger',
  ],
  handlers: [
    'console.log(\'ExponentIndicator SignedInteger\');$$ = $1 + $2;',
  ],
  subRules: [
    require('./SignedInteger'),
  ],
};
