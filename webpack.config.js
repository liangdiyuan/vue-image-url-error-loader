// import { Configuration } from "webpack";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

/**
 * @type {Configuration}
 */
const config = {
  mode: "none",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: [
          "vue-loader",
          {
            loader: "./vue-image-url-error-loader",
            options: { imageUrl: "erroe.png" },
          },
        ],
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Plugin Sample",
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
};
module.exports = config;
