
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss']
    },
    output: {
      path: path.resolve(__dirname, '../', 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack + Babel + React + More',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };