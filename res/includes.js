const path = require('path')

var options = {}

try {
  options = Object.assign(options, require(path.resolve(process.cwd(), 'test')))
} catch (e) { }

require('babel-register')(options)
