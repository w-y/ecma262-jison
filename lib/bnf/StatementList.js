'use strict';

module.exports = {
  conditions: [''],
  name: 'StatementList',
  rules: ['StatementListItem', 'StatementList StatementListItem'],
  handlers: ['\n      $$ = [$1];\n      if ($1.type === \'ImportDeclaration\' || $1.type === \'ExportDeclaration\') {\n        $$.sourceType = \'module\';\n      } else {\n        $$.sourceType = \'script\';\n      }\n    ', '\n      $$ = $1.concat([$2]);\n      $$.sourceType = $1.sourceType;\n\n      if ($2.type === \'ImportDeclaration\' || $2.type === \'ExportDeclaration\') {\n        $$.sourceType = \'module\';\n      }\n    '],
  subRules: [require('./StatementListItem')]
};