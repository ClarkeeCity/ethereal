const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/preset-scss",
      options: {
        rule: {
          test: /\.module\.s[cs]ss$/,
        },
        cssLoaderOptions: {
          modules: { localIdentName: "[name]__[local]--[hash:base64:5]" },
        },
      },
    },
    "storybook-addon-sass-postcss",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
