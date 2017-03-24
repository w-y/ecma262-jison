module.exports = {
  conditions: [''],
  name: 'Comment',
  rules: [
    'SingleLineComment',
  ],
  handlers: [
    '$$ = $1;',
  ],
  subRules: [
    require('./SingleLineComment'),
  ],
};
