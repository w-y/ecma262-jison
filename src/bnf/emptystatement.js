module.exports = {
  EmptyStatement: [
    [
      ';',
      `
        console.log('empty statement');
      `
    ],
  ],
}

/*module.exports = {
  EmptyStatement: {
      name: EmptyStatement,
      conditions: [],
      rule: [';'],
      handler: `
        console.log('empty statement');
      `,
    }
  }
}*/
