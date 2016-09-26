var webpack         = require('webpack'),
    path            = require('path');
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, './index.js')
      ],
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=1000' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),*/
    //new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Fabian Ris Lundblad',
      template: 'index.template.html'
    })
  ]

}
