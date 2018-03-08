'use strict';

var BITE_SIZE = 256;
var fs = require('fs');

function createFileHelper(src) {
  var values = [];
  var readbytes = 0;
  var file = null;

  return {
    readFileAsync: function readFileAsync(cb) {
      var _this = this;

      if (!file) {
        fs.open(src, 'r', function (err, fd) {
          if (err) {
            throw new Error(err);
          }
          file = fd;
          _this.readFileAsync(cb);
        });
        return;
      }
      var stats = fs.fstatSync(file);

      if (stats.size < readbytes + 1) {
        cb(null, values.join(''));
      } else {
        fs.read(file, new Buffer(BITE_SIZE), 0, BITE_SIZE, readbytes, function (err, bytecount, buff) {
          if (err) {
            throw new Error(err);
          }
          values.push(buff.toString('utf-8', 0, bytecount));
          readbytes += bytecount;
          process.nextTick(function () {
            _this.readFileAsync(cb);
          });
        });
      }
    }
  };
}

exports.createFileHelper = createFileHelper;