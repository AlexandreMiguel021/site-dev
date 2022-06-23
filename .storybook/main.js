const path = require('path');

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  "stories": [
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
}
