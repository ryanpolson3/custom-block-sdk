module.exports = function (eleventyConfig) {

  eleventyConfig.addWatchTarget('./src/scripts');
  eleventyConfig.setLiquidOptions({ dynamicPartials: true });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "partials",
      layouts: "layouts",
      data: "data",
    },
  };
};
