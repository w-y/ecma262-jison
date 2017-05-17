const parser = require('../src/index');

const { createFileHelper } = require('./test/helpers');

const fileHelper = createFileHelper('/tmp/test.js');

fileHelper.readFileAsync((err, data) => {
  const ast = parser.parse(data);
  console.log(JSON.stringify(ast, null, 2));
});
