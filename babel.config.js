module.exports = function (api) {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['last 2 versions', 'safari >= 7'],
            node: '14.16',
          },
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: ['@babel/plugin-proposal-class-properties', 'transform-class-properties', 'react-hot-loader/babel'],
  }
}
