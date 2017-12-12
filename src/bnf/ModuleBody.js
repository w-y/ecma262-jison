module.exports = {
  conditions: [''],
  name: 'ModuleBody',
  rules: [
    'ModuleItemList',
  ],
  handlers: [
    '$$ = $1;',
  ],
  subRules: [
    require('./ModuleItemList'),
  ],
};
