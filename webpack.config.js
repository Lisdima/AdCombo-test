const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 4200,
    overlay: true,
    open: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
};
