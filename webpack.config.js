const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'docsify-docbucket.min.js': [
      path.resolve(__dirname, 'src/index.js'),
      path.resolve(__dirname, 'src/extra.js')
    ]
  },  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'docsify-docbucket.min.js'
  }
};