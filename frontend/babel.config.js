process.env.TAMAGUI_TARGET = 'native'

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),

      ['transform-inline-environment-variables', {
        include: ['TAMAGUI_TARGET']
      }],

      // NOTE: this is optional, you don't *need* the compiler
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
        },
      ],
      
      // NOTE: this is only necessary if you are using reanimated for animations
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
