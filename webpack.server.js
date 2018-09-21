const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './server/server.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}