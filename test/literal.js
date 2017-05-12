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

  describe('empty string', function() {
    it('should return Literal with value \'\'', function(done) {
      assert.equal('Literal', ast.body[3].expression.type);
      assert.equal('', ast.body[3].expression.value);
      done();
    });
  });

  describe('single-quoted string', function() {
    it('should return Literal with value \'this\'', function(done) {
      assert.equal('Literal', ast.body[4].expression.type);
      assert.equal('this', ast.body[4].expression.value);
      done();
    });
  });

  describe('empty string', function() {
    it('should return Literal with value \'\'', function(done) {
      assert.equal('Literal', ast.body[5].expression.type);
      assert.equal('', ast.body[5].expression.value);
      done();
    });
  });

  describe('double-quoted string', function() {
    it('should return Literal with value "this"', function(done) {
      assert.equal('Literal', ast.body[6].expression.type);
      assert.equal('this', ast.body[6].expression.value);
      done();
    });
  });

  describe('single-quoted string with escaped', function() {
    it('should return Literal with value \'\\100abc\'', function(done) {
      assert.equal('Literal', ast.body[7].expression.type);
      assert.equal('\\100abc', ast.body[7].expression.value);
      done();
    });
  });

  describe('single-quoted string with escaped unicode start', function() {
    it('\'\\u0056abc\' => Vabc', function(done) {
      assert.equal('Literal', ast.body[8].expression.type);
      assert.equal('Vabc', ast.body[8].expression.value);
      done();
    });
  });

  describe('single-quoted string with escaped unicode continue', function() {
    it('\'abc\\u0056\' => abcV', function(done) {
      assert.equal('Literal', ast.body[9].expression.type);
      assert.equal('abcV', ast.body[9].expression.value);
      done();
    });
  });

  describe('single-quoted string with escaped continue', function() {
    it('\'abc\\99\' => abc\\99', function(done) {
      assert.equal('Literal', ast.body[10].expression.type);
      assert.equal('abc\\99', ast.body[10].expression.value);
      done();
    });
  });

  describe('single-quoted string with escaped continue', function() {
    it('\'abc\\x\' => abc\\x', function(done) {
      assert.equal('Literal', ast.body[11].expression.type);
      assert.equal('abc\\x', ast.body[11].expression.value);
      done();
    });
  });

  describe('double-quoted string with escaped', function() {
    it('"\\100" => \\100', function(done) {
      assert.equal('Literal', ast.body[12].expression.type);
      assert.equal('\\100', ast.body[12].expression.value);
      done();
    });
  });

  describe('double-quoted single quote', function() {
    it('"\'" => \'', function(done) {
      assert.equal('Literal', ast.body[13].expression.type);
      assert.equal('\'', ast.body[13].expression.value);
      done();
    });
  });

  describe('decimal number', function() {
    it('1.23', function(done) {
      assert.equal('Literal', ast.body[14].expression.type);
      assert.equal(1.23, ast.body[14].expression.value);
      done();
    });
  });

  describe('decimal number with 0', function() {
    it('2.02232', function(done) {
      assert.equal('Literal', ast.body[15].expression.type);
      assert.equal(2.02232, ast.body[15].expression.value);
      done();
    });
  });

  describe('decimal number starts with 0', function() {
    it('0.99', function(done) {
      assert.equal('Literal', ast.body[16].expression.type);
      assert.equal(0.99, ast.body[16].expression.value);
      done();
    });
  });

  describe('decimal number starts with dot', function() {
    it('.123', function(done) {
      assert.equal('Literal', ast.body[17].expression.type);
      assert.equal(.123, ast.body[17].expression.value);
      done();
    });
  });

  describe('decimal number ends with dot', function() {
    it('0.', function(done) {
      assert.equal('Literal', ast.body[18].expression.type);
      assert.equal(0, ast.body[18].expression.value);
      done();
    });
  });

  describe('decimal integer', function() {
    it('123', function(done) {
      assert.equal('Literal', ast.body[19].expression.type);
      assert.equal(123, ast.body[19].expression.value);
      done();
    });
  });

});
