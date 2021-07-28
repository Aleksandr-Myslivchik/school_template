const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const DIST_PATH = path.resolve(__dirname, "dist");
module.exports = {
  entry: path.resolve(__dirname, "tasks/Asynchronous/script.js"),
  output: {
    path: DIST_PATH,
    filename: "bundle.[hash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "tasks/Asynchronous/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ]
    },
      {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader"
      ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        "file-loader"
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      }
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }
    ]
  },
  devServer: {
    contentBase: DIST_PATH,
    port: 1000
  },
  devtool: 'eval-cheap-source-map',
};
