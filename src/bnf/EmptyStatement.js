module.exports = {
  name: 'EmptyStatement',
  conditions: [''],
  rules: [
    `;`
  ],
  handlers: [
    `
      console.log('empty statement');
    `,
  ],
  subRules: [],
};
