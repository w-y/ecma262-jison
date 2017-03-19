module.exports = {
  conditions: [''],
  name: 'HoistableDeclaration_Default',
  rules: [
    'FunctionDeclaration_Default',
  ],
  handlers: [
    '$$ = $1',
  ],
  subRules: [
    require('./FunctionDeclaration_Default'),
  ],
};
