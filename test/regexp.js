var assert = require('assert');
const parser = require('../src/index');

const { createFileHelper } = require('../src/test/helpers');

describe('regular expression', function() {
  let ast = null;

  before(function(done) {
    const fileHelper = createFileHelper('./mock/regexp.js');
    fileHelper.readFileAsync((err, data) => {
      ast = parser.parse(data);
      done();
    })
  });

  describe('no classes', function() {
    it('simple', function(done) {
      assert.equal('RegexpLiteral', ast.body[0].expression.type);
      assert.equal('a', ast.body[0].expression.pattern);
      assert.equal('', ast.body[0].expression.flags);
      done();
    });
    it('keyword', function(done) {
      assert.equal('RegexpLiteral', ast.body[1].expression.type);
      assert.equal('for', ast.body[1].expression.pattern);
      assert.equal('', ast.body[1].expression.flags);
      done();
    });
    it('flags', function(done) {
      assert.equal('RegexpLiteral', ast.body[2].expression.type);
      assert.equal('a', ast.body[2].expression.pattern);
      assert.equal('gi', ast.body[2].expression.flags);
      done();
    });
    it('backslash sequence', function(done) {
      assert.equal('RegexpLiteral', ast.body[3].expression.type);
      assert.equal('\\d+', ast.body[3].expression.pattern);
      assert.equal('', ast.body[3].expression.flags);
      done();
    });
    it('backslash sequence and flags', function(done) {
      assert.equal('RegexpLiteral', ast.body[4].expression.type);
      assert.equal('\\d+', ast.body[4].expression.pattern);
      assert.equal('g', ast.body[4].expression.flags);
      done();
    });
  });

  describe('with classes', function() {
    it('simple', function(done) {
      assert.equal('RegexpLiteral', ast.body[5].expression.type);
      assert.equal('a[bc]', ast.body[5].expression.pattern);
      assert.equal('', ast.body[5].expression.flags);
      done();
    });
    it('embed', function(done) {
      assert.equal('RegexpLiteral', ast.body[6].expression.type);
      assert.equal('a[[]]', ast.body[6].expression.pattern);
      assert.equal('', ast.body[6].expression.flags);
      done();
    });
    it('wrong flags', function(done) {
      try {
        const astNew = parser.parse('/[a]/[');
        assert.equal(false, true);
        done();
      } catch (ex) {
        assert.equal(true, ex instanceof Error);
        done();
      }
    });
  });

  describe('real world', function() {
    it('/\w+\s/g', function(done) {
      assert.equal('RegexpLiteral', ast.body[7].expression.type);
      assert.equal('\\w+\\s', ast.body[7].expression.pattern);
      assert.equal('g', ast.body[7].expression.flags);
      done();
    });
    it('/([.*+?^=!:${}()|[\]\/\\])/g', function(done) {
      assert.equal('RegexpLiteral', ast.body[8].expression.type);
      assert.equal('([.*+?^=!:${}()|[\\]\\/\\\\])', ast.body[8].expression.pattern);
      assert.equal('g', ast.body[8].expression.flags);
      done();
    });
    it('/(\w+)\s(\w+)/', function(done) {
      assert.equal('(\\w+)\\s(\\w+)', ast.body[9].expression.pattern);
      assert.equal('', ast.body[9].expression.flags);
      done();
    });
    it('/(?:)/', function(done) {
      assert.equal('(?:)', ast.body[10].expression.pattern);
      assert.equal('', ast.body[10].expression.flags);
      done();
    });
  });
});
