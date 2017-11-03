module.exports = {
  conditions: [''],
  name: 'ClassElement',
  rules: [
    'MethodDefinition',
    'static MethodDefinition',
    ';',
  ],
  handlers: [
    `
      $1.static = false;
      $$ = $1;
    `,
    `
      $2.static = true;
      $$ = $2;
    `,
    `
      $$ = [];
    `,
  ],
  subRules: [
    require('./MethodDefinition'),
  ],
};
