module.exports = {
  conditions: [''],
  name: 'ModuleItemList',
  rules: [
    'ModuleItem',
    'ModuleItemList ModuleItem',
  ],
  handlers: [
    '$$ = $1;',
    '$$ = $1;',
  ],
  subRules: [
    require('./ModuleItem'),
  ],
};
