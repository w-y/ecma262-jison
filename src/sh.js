const parser = require('../src/index');

const { createFileHelper } = require('./test/helpers');

const fileHelper = createFileHelper('/tmp/test3.js');
// const fileHelper = createFileHelper('/tmp/test11.js');
// const fileHelper = createFileHelper('/tmp/angular.min.js');
// const fileHelper = createFileHelper('/tmp/test40.js');
// const fileHelper = createFileHelper('/tmp/test10.js');
// const fileHelper = createFileHelper('/tmp/angular.min.js');
// const fileHelper = createFileHelper('/tmp/angular-1.6.js');
// const fileHelper = createFileHelper('/tmp/react-dom-15.6.1.js');

fileHelper.readFileAsync((err, data) => {
  const ast = parser.parse(data);
  console.log(JSON.stringify(ast, null, 2));
});
