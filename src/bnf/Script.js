module.exports = {
  conditions: [''],
  name: 'Script',
  rules: [
    'ScriptBody',
  ],
  handlers: [
    `
      $$ = $1;
      return $$;
    `,
  ],
  subRules: [
    require('./ScriptBody'),
  ],
};
