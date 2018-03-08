'use strict';

var parser = require('../src/index');

var _require = require('./test/helpers'),
    createFileHelper = _require.createFileHelper;

var fileHelper = createFileHelper('/tmp/test5.js');

fileHelper.readFileAsync(function (err, data) {
  var ast = parser.parse(data);
  console.log(JSON.stringify(ast, null, 2));
});