import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  devServer: {
    contentBase: 'dist',
    host: '0.0.0.0',
    inline: true,
    stats: { colors: true },
  },
  entry: {
    js: './app/index.js',
    jsx: './app/index.jsx',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.(jpg|png)$/, loader: 'url?limit=8192' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.sass$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
      { test: /\.pug$/, loader: 'pug-html-loader' },
    ],
  },
  output: {
    path: 'dist',
    filename: 'index_[name].js',
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({ template: './app/index.pug' }),
  ],
}

// vi:et:ts=2
