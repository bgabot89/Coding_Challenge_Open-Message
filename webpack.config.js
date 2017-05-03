var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
     },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
    }
  ]
  },
  plugins: [
    new ExtractTextPlugin('./styles/index.css', {
        allChunks: true
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    publicPath: 'http://localhost:8080/',
    historyApiFallback: true,
    contentBase: './',
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};
