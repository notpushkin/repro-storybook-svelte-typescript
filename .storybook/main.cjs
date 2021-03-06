module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  // "svelteOptions": {
  //   "preprocess": require("../svelte.config.js").preprocess
  // }
  // svelteOptions: {
  //   "preprocess": require("svelte-preprocess"),
  // }
  webpackFinal: async (config) => {
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes("svelte-loader")
    );
    svelteLoader.options.preprocess = require("svelte-preprocess")({
      postcss: true,
    });
    return config;
  },
}