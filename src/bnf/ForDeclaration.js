module.exports = {
  conditions: [''],
  name: 'ForDeclaration',
  rules: [
    `LetOrConst ForBinding`,
  ],
  handlers: [
    `$$ = $1 + ' ' + $2`,
  ],
  subRules: [
    require('./ForBinding'),
  ],
};
