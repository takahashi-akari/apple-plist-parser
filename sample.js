var parser = require('apple-plist-parser');
parser.parseFile('path/to/file.plist', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});