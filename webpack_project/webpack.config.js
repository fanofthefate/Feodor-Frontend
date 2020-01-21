const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const jQuery = require('jquery');

const path = require('path');

module.exports = {
  entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: path.resolve(__dirname, 'dist'), // Folder to store generated bundle
    filename: 'bundle.js'  // Name of generated bundle after build
  },
  module: { 
   rules: [ 
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/preset-env']
    }
  }
},
{
  test: /\.(png|jpg|gif)$/,
  use: [
  {
   loader: 'file-loader',
   options: {name: 'img/[name].[ext]'}  
 }
 ]
},
{
  test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, 
  use: [
  'file-loader',
  ],
},
{
  test: /\.(sass|scss)$/,
  use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, 

          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
            	plugins: function () {
            		return [
            		require('precss'),
            		require('autoprefixer')
            		];
            	}
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          },
          ]
        }
        ]
      },
  plugins: [  // Array of plugins to apply to build chunk
  new HtmlWebpackPlugin({
  	template: __dirname + "/src/public/index.html",
  	inject: 'body'
  }),
  new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'windows.jQuery': 'jquery',
    }),
  new CopyPlugin([
        { from: './src/public/img', to: './img'}
    ])
  ],
  devServer: {  // configuration for webpack-dev-server
      contentBase: './src/public',
      port: 7700 // port to run dev-server
    } 
  };