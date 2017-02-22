const path = require('path')

require('babel-register')({
  ignore: function(filename) {
    const full = path.resolve('./node_modules/react-chunky')
    const isDep = filename.startsWith(full)
    return !isDep
  }
})
