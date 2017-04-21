module.exports = {
  conditions: [''],
  name: 'Script',
  rules: [
    'ScriptBody',
  ],
  handlers: [
    `
      $$ = $1;
      console.log(JSON.stringify($$));
      return $$;
    `,
  ],
  subRules: [
    require('./ScriptBody'),
  ],
};
