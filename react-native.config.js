module.exports = {
    project: {
        ios: {},
        android: {}, // grouped into "project"
    },
    dependencies: {
      "@invertase/react-native-apple-authentication": {
        platforms: {
          android: null
        }
      },
      "ios-background-upload": {
        platforms: {
          android: null
        }
      },
      "react-native-background-upload": {
        platforms: {
          ios: null
        }
      }
    },
    assets: ["./src/assets/fonts/"], // stays the same
};
