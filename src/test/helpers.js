const BITE_SIZE = 256;
const fs = require('fs');

function createFileHelper(src) {
  const values = [];
  let readbytes = 0;
  let file = null;

  return {
    readFileAsync(cb) {
      if (!file) {
        fs.open(src, 'r', (err, fd) => {
          if (err) {
            throw new Error(err);
          }
          file = fd;
          this.readFileAsync(cb);
        });
        return;
      }
      const stats = fs.fstatSync(file);

      if (stats.size < readbytes + 1) {
        cb(null, values.join(''));
      } else {
        fs.read(file, new Buffer(BITE_SIZE), 0, BITE_SIZE, readbytes, (err, bytecount, buff) => {
          if (err) {
            throw new Error(err);
          }
          values.push(buff.toString('utf-8', 0, bytecount));
          readbytes += bytecount;
          process.nextTick(() => {
            this.readFileAsync(cb);
          });
        });
      }
    },
  };
}

exports.createFileHelper = createFileHelper;
