var assert = require('assert');
const parser = require('../src/index');

const { createFileHelper } = require('../src/test/helpers');

describe('expression', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/expression.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    })
  });

  describe('function expression', function() {
    it('(function () {})', function(done) {
      assert.equal('CoverParenthesizedExpression', ast.body[0].expression.type);
      assert.equal('FunctionExpression', ast.body[0].expression.expressions[0].type);
      assert.equal(0, ast.body[0].expression.expressions[0].params.length);
      assert.equal('BlockStatement', ast.body[0].expression.expressions[0].body.type);
      done();
    });
  });

  describe('primary expression', function() {
    it('this', function(done) {
      done();
    });
  });
});
