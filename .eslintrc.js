module.exports = {
  root: true,
  extends: '@react-native-community',
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
        "@screens": "./src/screens",
        "@navigation": "./src/navigation",
        "@atomic-components": "./src/components/atomic",
        "@common-components": "./src/components/common",
        "@screen-components": "./src/components/screen",
        
      }
    }
  }
};
