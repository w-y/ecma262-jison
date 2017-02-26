const EmptyStatement = require('./emptystatement');
const BlockStatement = require('./blockstatement');

const Statement = Object.assign({
  Statement: [
    ['EmptyStatement', ';'],
    ['BlockStatement', ';'],
  ],
}, EmptyStatement, BlockStatement);

module.exports = Statement;
