module.exports = {
  name: 'EmptyStatement',
  conditions: [''],
  rules: [
    ';',
  ],
  handlers: [
    `
      console.log(yy.lexer.comment);
      console.log('empty statement');
    `,
  ],
  subRules: [],
};
