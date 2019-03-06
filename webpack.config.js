const path = require('path');

module.exports = {
  entry: './svg-to-react-native-cli.js',
  output: {
    path: __dirname,
    filename: 'svg-to-react-native-cli-bundle.js'
  },
  target: 'node'
};
