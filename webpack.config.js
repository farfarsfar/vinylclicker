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
    path: path.resolve(__dirname, 'build/public'),
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
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Fabian Ris Lundblad',
      template: 'index.template.html'
    })
  ]

}
