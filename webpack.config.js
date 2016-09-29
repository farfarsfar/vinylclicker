var webpack         = require('webpack'),
    path            = require('path');
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // React hot loader är inbyggd och funkar like a charm.
  entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, './index.js')
      ],
  // bygger ut till ./dist
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // js-filer kan refereras utan att behöva ändelser
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
      // loaders för styles och typsnitt
      { test: /\.css$/, loader: "style!css" },
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=1000' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 
      // sätter NODE_ENV till 'production' för att slippa React-varning om 'minified dev build'
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Vinyl Clicker',
      template: 'index.template.html'
    })
  ]

}
