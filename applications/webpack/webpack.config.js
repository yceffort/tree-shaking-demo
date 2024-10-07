const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  stats: {
    modules: true,
    reasons: true,
  },
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /node_modules\/.*\.js$/,
  //       sideEffects: false, // 이 설정을 통해 sideEffect.js도 부작용이 없다고 선언
  //     },
  //   ],
  // },
};
