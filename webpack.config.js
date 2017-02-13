let path = require('path');
const srcPath = path.join(__dirname, '/src');
let config = {
  devServer: {
    port: 8010,
    historyApiFallback: true,
    hot: true,
    noInfo: false
  },
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
            presets: ['es2015','react']
        }
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },{
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },{
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },{
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },{
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};

module.exports = config;