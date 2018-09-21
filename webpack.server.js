const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require( 'nodemon-webpack-plugin' )
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './server/server.ts',
  target: 'node',
  externals: [nodeExternals()], // don't process node_modules and other
  plugins: [
    new CleanWebpackPlugin(['dist/server.js']),
    new NodemonPlugin() // auto restart server when webpack recompiles
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  }
}