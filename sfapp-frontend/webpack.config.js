const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: {
    'vendors-localhost': ['miragejs', '@faker-js/faker/locale/en'],
    'vendors-react': { import: ['react', 'react-dom', 'redux-saga', '@reduxjs/toolkit', 'react-redux'], dependOn: 'vendors-localhost' },
    'account-page': { import: './src/pages/account-page/index.tsx', dependOn: 'vendors-react' },
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'pages/[name]/bundle.js',
    clean: true,
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    //new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['vendors-localhost', 'vendors-react', 'account-page'],
      template: 'src/pages/account-page/index.html',
      filename: 'pages/account-page/index.html',
    }),
  ],
};
