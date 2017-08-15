var assert = require('assert');
const parser = require('../src/index');

const { createFileHelper } = require('../src/test/helpers');

describe('parsing real world\'s javascript code', function() {
  describe('angular', function() {
    it(`angular 1.6 dev`, function(done) {
      try {
        const fileHelper = createFileHelper('./mock/angular-1.6.js');
        fileHelper.readFileAsync((err, data) => {
          ast = parser.parse(data);
          done();
        })
      } catch(ex) {
        assert.equal(true, false);
        done();
      }
    });
  });
  describe('jquery', function() {
    it(`jquery 3.2.1 dev`, function(done) {
      try {
        const fileHelper = createFileHelper('./mock/jquery-3.2.1.js');
        fileHelper.readFileAsync((err, data) => {
          ast = parser.parse(data);
          done();
        })
      } catch(ex) {
        assert.equal(true, false);
        done();
      }
    });
  });
  describe('zepto', function() {
    it(`zepto 1.2.0 production`, function(done) {
      try {
        const fileHelper = createFileHelper('./mock/zepto-1.2.0.min.js');
        fileHelper.readFileAsync((err, data) => {
          ast = parser.parse(data);
          done();
        })
      } catch(ex) {
        assert.equal(true, false);
        done();
      }
    });
  });
});
