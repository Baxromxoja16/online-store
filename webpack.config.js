const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  mode: "development",
  module: {
    rules: [
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.ts$/, use: "ts-loader" }
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [].concat(
    ["index","pages/about","pages/product","pages/main","pages/cart"].map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: path.resolve(__dirname, `./src/${page}.html`),
          filename: `${page}.html`,
        })
    )
  ),
};
