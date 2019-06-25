module.exports = {
    mode: 'development',
    entry: './src/index.js', // arquivo a ser carregado
    output: {
      filename: 'main.js',
      publicPath: 'dist'
    },
    devServer: {
      contentBase: './src',
      watchContentBase: true
    },
    module: {
      rules: [
        { // babel + webpack
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
};