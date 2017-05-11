var assert = require('assert');
const parser = require('../src/index');

const { createFileHelper } = require('../src/test/helpers');

describe('identifier', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/identifier.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    })
  });

  describe('alphabet letters and digits', function() {
    it('should return identifier node with name of n1', function(done) {
      assert.equal('Identifier', ast.body[0].expression.type);
      assert.equal('n1', ast.body[0].expression.name);
      done();
    });
  });
 
  describe('start with $', function() {
    it('should return identifier node with name of $abc$', function(done) {
      assert.equal('Identifier', ast.body[2].expression.type);
      assert.equal('$abc$', ast.body[2].expression.name);
      done();
    });
  });

  describe('start with underscore', function() {
    it('should return identifier node with name of _abc_', function(done) {
      assert.equal('Identifier', ast.body[3].expression.type);
      assert.equal('_abc_', ast.body[3].expression.name);
      done();
    });
  });

  describe('start with escaped unicode with ID_Start true', function() {
    it('should return identifier node with name of Vabc', function(done) {
      assert.equal('Identifier', ast.body[1].expression.type);
      assert.equal('Vabc', ast.body[1].expression.name);
      done();
    });
  });

  describe('escaped unicode with ID_continue true', function() {
    it('should return identifier node with name of abV', function(done) {
      assert.equal('Identifier', ast.body[4].expression.type);
      assert.equal('abV', ast.body[4].expression.name);
      done();
    });
  });

  describe('start with unicode with ID_Start true', function() {
    it('should return identifier node with name of 测试a232', function(done) {
      assert.equal('Identifier', ast.body[5].expression.type);
      assert.equal('测试a232', ast.body[5].expression.name);
      done();
    });
  });

  describe('unicode with ID_continue true', function() {
    it('should return identifier node with name of $测试', function(done) {
      assert.equal('Identifier', ast.body[6].expression.type);
      assert.equal('$测试', ast.body[6].expression.name);
      done();
    });
  });

  describe('start with ID_start false', function() {
    it('should throw error when parsing 1a', function(done) {
      try {
        parser.parse('1a;');
      } catch (ex) {
        assert.equal(true, ex instanceof Error);
      }
      done();
    });
  });

  describe('start with keyword', function() {
    it('should return identifier node', function(done) {
      ast = parser.parse('constA;');
      assert.equal('Identifier', ast.body[0].expression.type);
      assert.equal('constA', ast.body[0].expression.name);
      done();
    });
  });

});
