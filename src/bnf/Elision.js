module.exports = {
  conditions: [''],
  name: 'Elision',
  rules: [
    `,`,
    `Elision ,`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2`,
  ],
  subRules: [
  ],
};
