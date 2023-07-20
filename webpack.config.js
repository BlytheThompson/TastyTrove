module.exports = {
    entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/assets/js/recipe-fetcher.js'],
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };