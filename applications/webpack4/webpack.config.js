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
    // clean: true, webpack 4에는 존재하지 않는 설정
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  // dual-webpack-mjs 를 불러올 때 아래와 같은 .mjs 처기 가 없으면 에러가 안남
  // module: {
  //   rules: [
  //     {
  //       test: /\.mjs$/,
  //       include: /node_modules/,
  //       type: "javascript/auto",
  //     },
  //   ],
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /node_modules\/.*\.js$/,
  //       sideEffects: false, // 이 설정을 통해 sideEffect.js도 부작용이 없다고 선언
  //     },
  //   ],
  // },
};
