const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  output: { path: path.resolve(__dirname, "./dist") },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: ["node_modules", "src"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[fullhash:8].js",
      chunkFilename: "[id].[fullhash:8].js",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
