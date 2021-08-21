const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const assets = [
  {
    from: 'src/img',
    to: 'img/',
  },
];
module.exports = {
    mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        }
    }),
    new CopyWebpackPlugin ({
      patterns: [...assets],
    }),
  ],
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        use: ['html-loader'] 
      },
      {
        //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:'file-loader',
        options: {
          name: '[name].[ext]',
        }
      },
    ]
  },
  devServer: {
    contentBase: './build',
    open: true,
    port: 8000,
    historyApiFallback: true
  },
};