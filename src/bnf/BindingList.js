module.exports = {
  conditions: [''],
  name: 'BindingList',
  rules: [
    `LexicalBinding`,
    `BindingList , LexicalBinding`,
  ],
  handlers: [
    `$$ = $1`,
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
    require('./LexicalBinding'),
  ],
};
