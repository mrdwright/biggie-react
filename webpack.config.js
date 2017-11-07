var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

//const CompressionPlugin = require('compression-webpack-plugin');
// const definePlugin = new webpack.DefinePlugin({
//   __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'false')),
//   'process.env': {
//     NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
//   }
// });
// const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } });
// const compressionPlugin = new CompressionPlugin();

var config = {
  entry: APP_DIR + '/App.jsx',
  module : {
    rules : [
      {
        test: /\.jsx$/,
        include : APP_DIR,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" 
          }, 
          {
            loader: "css-loader", 
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: true,
              //localIdentName: "[name]__[local]___[hash:base64:5]"  
             }
          }, 
          {
            loader: "sass-loader" 
          }
        ]
      }         
    ]    
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    // definePlugin,
    // uglifyPlugin,
    // compressionPlugin
  ],
};

module.exports = config;