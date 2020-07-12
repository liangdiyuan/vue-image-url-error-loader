### 当图片出错时，统一为图片添加展示错误图片的路径。例子： onerror="this.src='error.png'"

```
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
    new VueLoaderPlugin(),
  ],
};
module.exports = config;
```