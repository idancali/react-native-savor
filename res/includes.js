const path = require('path')

var deps = ["react-native-savor"]

try {
  const mod = require(path.resolve(process.cwd(), 'test'))
  if (mod.deps) {
    deps = deps.concat(mod.deps)
  }
} catch (e) { }


function isDep(file) {
  var found = false
  deps.forEach(dep => {
    const full = path.resolve("node_modules", dep)
    found = file.startsWith(full)
  })
  return found
}

require('babel-register')({
  ignore: !isDep
})
