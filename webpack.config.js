var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var ENTRY_PATH = path.resolve(ROOT_PATH, 'src');
var OUTPUT_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  entry: {
    index: path.resolve(ENTRY_PATH, 'js', 'app.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: OUTPUT_PATH,
  },
  devServer: {
    contentBase: OUTPUT_PATH,
    compress: true,
    host: '0.0.0.0',
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'file-loader', options: { limit: 10240 } }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
