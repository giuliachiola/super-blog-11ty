module.exports = function(eleventyConfig) {
  // let ejs = require("ejs");
  // eleventyConfig.setLibrary("ejs", ejs);

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
};
