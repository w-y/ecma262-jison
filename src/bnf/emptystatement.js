/*module.exports = {
  EmptyStatement: [
    [
      ';',
      `
        console.log('empty statement');
      `
    ],
  ],
}*/

module.exports = {
  name: 'EmptyStatement',
  conditions: [''],
  rules: [';'],
  handlers: [
    `
      console.log('empty statement');
    `,
  ],
  subRules: [],
};
