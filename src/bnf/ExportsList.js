module.exports = {
  conditions: [''],
  name: 'ExportsList',
  rules: [
    'ExportSpecifier',
    'ExportsList , ExportSpecifier',
  ],
  handlers: [
    '$$ = [$1];',
    '$$ = $1.concat([$3]);',
  ],
  subRules: [
    require('./ExportSpecifier'),
    require('./ExportsList'),
  ],
};
