module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@src': './src',
          '@screens': './src/screens',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@atomic-components': './src/components/atomic',
          '@common-components': './src/components/common',
          '@screen-components': './src/components/screen',
        },
      },
    ],
  ],
};
