## ApplePlistParser
ApplePlistParser is a simple library to parse Apple plist files.

## Installation
```bash
npm install apple-plist-parser --save
```

## Usage
```javascript
var parser = require('apple-plist-parser');
parser.parseFile('path/to/file.plist', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```
## License
MIT License  
Copyright (c) 2022 by [sakaitaka](https://github.com/sakaitaka/apple-plist-parser)