module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current' } }
    ],
    '@babel/preset-typescript'
  ],

  plugins: [
    ['module-resolver', {
      root: ['./src'],

      // Read more about babel-plugin-module-resolver: https://github.com/tleunen/babel-plugin-module-resolver
      alias: {
        '@models/*': './models/*',
        '@utils/*': './utils/*'
      }
    }]
  ],

  ignore: []
};
