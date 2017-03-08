module.exports = {
  conditions: [''],
  name: 'MetaProperty',
  rules: [
    `new . target`,
  ],
  handlers: [
    `$$ = $1 + $2 + $3`,
  ],
  subRules: [
  ],
};
