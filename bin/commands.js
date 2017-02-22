var commands = require('savor/bin/commands')
var coverageBin = "./node_modules/.bin/babel-node";
var coverageLocalArgs = ['./node_modules/.bin/istanbul', 'cover', './node_modules/.bin/_mocha', '--', '--require', 'react-native-mock/mock', '--report', 'lcovonly', 'test/specs/**/*.js'];

var testBin = "./node_modules/.bin/mocha"
var testArgs = ['--require', 'react-native-mock/mock', '--require', './node_modules/react-native-savor/res/includes.js', '--compilers', 'js:babel-core/register', '--recursive', 'test/specs/**/*.js']

commands.test = [{
  bin: testBin,
  args: testArgs
}]

commands.coverage = [{
  bin: coverageBin,
  args: coverageLocalArgs
}]

module.exports = commands
