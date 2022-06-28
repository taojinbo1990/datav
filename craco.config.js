const { resolve } = require("path");
const CracoLessPlugin = require("craco-less");
/** @type {import('@craco/craco').CracoConfig} */
const config = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@c": resolve(__dirname, "src/components"),
    },
  },
};

module.exports = config;
