module.exports = {
  dependency: {
    platforms: {
      ios: {
        sharedLibraries: [
          "libz",
          "libiconv",
          "libsqlite3",
          "libstdc++",
          "Security",
          "SystemConfiguration",
          "CoreTelephony",
          "CoreGraphics",
        ],
      },
    },
    hooks: {
      postlink:
        "node node_modules/react-native-qqsdk/scripts/postlink/postlink",
      postunlink:
        "node node_modules/react-native-qqsdk/scripts/postunlink/postunlink",
    },
  },
};
