module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@": "./",
            "@assets": "./assets",
            "@components": "./components",
            "@constants": "./constants",
            "@navigations": "./navigations",
            "@screens": "./screens",
            "@utils": "./utils",
          },
        },
      ],
    ],
  };
};
