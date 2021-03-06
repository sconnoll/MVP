const webpack = require("webpack");
const path = require("path");
const { json } = require("body-parser");

config = {
  mode: "development",
  entry: "./client/app.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    noParse: function (content) {
      return /express/.test(content);
    },
    rules: [
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
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     NODE_ENV: json.stringify(process.env.NODE_ENV),

  //   })
  // ]
};

module.exports = config;
