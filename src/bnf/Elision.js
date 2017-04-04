module.exports = {
  conditions: [''],
  name: 'Elision',
  rules: [
    ',',
    'Elision ,',
  ],
  handlers: [
    '$$ = [,]',
    '$$ = $1.concat([null])',
  ],
  subRules: [
  ],
};
