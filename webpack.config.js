const path = require("path");
const webpack = require("webpack");

module.exports = (_, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "frontend/static"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i, // how to setup images for webpack5 config
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
      ],
    },
    optimization: {
      minimize: isProduction,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      }),
    ],
  }
};