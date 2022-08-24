const { withNativebase } = require("@native-base/next-adapter");
const path = require("path");

module.exports = withNativebase({
  dependencies: [
    "@native-base/icons", "react-native-web-linear-gradient", "react-native-svg", 
    "react-native-safe-area-context","components"
  ],
  nextConfig: {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/@native-base/icons"),
      });
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native$": "react-native-web",
        "react-native-linear-gradient": "react-native-web-linear-gradient",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.jsx",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      return config;
    },
  },
});


// const withPlugins = require("next-compose-plugins");
// const withTM = require("next-transpile-modules")([
//   "native-base",
//   "react-native-svg",
//   "react-native-safe-area-context",
//   "components",
// ]);

// module.exports = withPlugins([withTM], {
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...(config.resolve.alias || {}),
//       // Transform all direct `react-native` imports to `react-native-web`
//       "react-native$": "react-native-web",
//       "react-native-linear-gradient": "react-native-web-linear-gradient"
//     };
//     config.resolve.extensions = [
//       ".web.js",
//       ".web.jsx",
//       ".web.ts",
//       ".web.tsx",
//       ...config.resolve.extensions,
//     ];

//     return config;
//   },
// });