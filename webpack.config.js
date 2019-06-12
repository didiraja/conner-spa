module.exports = {
    mode: 'development',
    entry: './index.js', // arquivo a ser carregado
    output: {
      filename: 'main.js',
      publicPath: 'dist'
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