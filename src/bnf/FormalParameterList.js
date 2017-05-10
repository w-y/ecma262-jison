module.exports = {
  conditions: [''],
  name: 'FormalParameterList',
  rules: [
    'FunctionRestParameter',
    'FormalsList',
    'FormalsList , FunctionRestParameter',
  ],
  handlers: [
    '$$ = [$1];',
    '$$ = $1;',
    '$$ = $1.concat([$3]);',
  ],
  subRules: [
    require('./FormalsList'),
    require('./FunctionRestParameter'),
  ],
};
