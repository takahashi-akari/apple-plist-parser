/**
 * sakaitaka/index.js
 * Apple Plist Parser
 * Language: javascript
 * Copyright (c) 2022 sakaitaka
 * URL: https://github.com/sakaitaka/apple-apple-plist-parser
 * Version: 0.0.3
 * Date: 2022-03-12
 * Description: Apple Plist Parser
 * Usage: node index.js
 * @author sakaitaka <hyise.71@gmail.com>
 * @license MIT
 */

/**
 * Parse Apple Plist to JSON.
 * @param {string} plist_path - Plist file path.
 * @return {object} JSON object.
 */
const parse = plist_path => {
  const fs = require('fs')
  const plist = require('plist')
  const xml = fs.readFileSync(plist_path, 'utf8')
  const json = plist.parse(xml)
  return json
}

module.exports = {
  parse: parse
}
