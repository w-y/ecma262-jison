var assert = require('assert');
const parser = require('../src/index');

const { createFileHelper } = require('../src/test/helpers');

describe('iteral', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/literal.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    })
  });

  describe('null', function() {
    it('should return Literal with value null', function(done) {
      assert.equal('Literal', ast.body[0].expression.type);
      assert.equal('null', ast.body[0].expression.value);
      done();
    });
  });

  describe('true', function() {
    it('should return Literal with value ture', function(done) {
      assert.equal('Literal', ast.body[1].expression.type);
      assert.equal('true', ast.body[1].expression.value);
      done();
    });
  });

  describe('false', function() {
    it('should return Literal with value false', function(done) {
      assert.equal('Literal', ast.body[2].expression.type);
      assert.equal('false', ast.body[2].expression.value);
      done();
    });
  });
});
