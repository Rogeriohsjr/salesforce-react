const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
  return {
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    entry: {
      'vendors-react': {
        import: ['react', 'react-dom', 'redux-saga', '@reduxjs/toolkit', 'react-redux', 'redux-saga/effects', 'miragejs', '@faker-js/faker/locale/en'],
      },
      'account-dashboard': { import: './src/ui/pages/account-dashboard/index.tsx', dependOn: 'vendors-react' },
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'pages/[name]/[name].js',
      clean: true,
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              // 2. Turns css into commonjs
              loader: 'css-loader',
              options: {
                import: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      //new BundleAnalyzerPlugin(),
      new webpack.DefinePlugin({
        'process.env.MIRAGE_ON': JSON.stringify(env.MIRAGE_ON),
      }),
      // This is for the localhost
      // This create the html and add the js css into the html for us test
      new HtmlWebpackPlugin({
        inject: true,
        chunks: ['vendors-localhost', 'vendors-react', 'account-dashboard'],
        template: 'src/ui/pages/account-dashboard/index.html',
        filename: 'pages/account-dashboard/index.html',
      }),
      // This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
      new MiniCssExtractPlugin({
        filename: 'pages/[name]/[name].css',
      }),
    ],
  };
};
