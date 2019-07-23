const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // arquivo a ser carregado
  output: {
    filename: "main.js",
    publicPath: "dist"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    contentBase: "./src",
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/, // carrega imagens
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(css|styl)$/, // stylus renderizando direto no head
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.js$/, // deleta node_modules
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // babel
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
