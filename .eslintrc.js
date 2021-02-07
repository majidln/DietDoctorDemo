module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['detox', 'jest'],
  overrides: [
    {
      files: ['*.e2e.js', "**/*.test.js", './jestSetup.js'],
      env: {
        'detox/detox': true,
        jest: true,
        'jest/globals': true,
      },
    },
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".android.js",
          ".ios.js"
        ]
      },
      "babel-module": {
        "@src": "./src",
        "@assets": "./assets",
        "@screens": "./src/screens",
        "@navigation": "./src/navigation",
        "@services": "./src/services",
        "@hooks": "./src/hooks",
        "@atomic-components": "./src/components/atomic",
        "@common-components": "./src/components/common",
        "@screen-components": "./src/components/screen",
      }
    }
  }
};
