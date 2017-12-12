module.exports = {
  conditions: [''],
  name: 'ImportsList',
  rules: [
    'ImportSpecifier',
    'ImportsList , ImportSpecifier',
  ],
  handlers: [
    '$$ = [$1];',
    '$$ = $1.concat([$3]);',
  ],
  subRules: [
    require('./ImportSpecifier'),
  ],
};
