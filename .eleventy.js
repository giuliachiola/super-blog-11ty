const eleventyNavigation = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = {
  // markdownTemplateEngine: 'njk',
}

module.exports = function(eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(eleventyNavigation);
  eleventyConfig.addPlugin(syntaxHighlight);

  // configs
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.setDataDeepMerge(true); // used to merge 'blog.11tydata.js' tags with .md tags

  eleventyConfig.addCollection("categories", function(collection) {
    const categ = collection.getAll().filter(entry => entry.data.category)
    return categ // tutte le entries con categorie
  })

  // function uniqueArray(arr) {
  //   return [...new Set(arr)]
  // }

  eleventyConfig.addCollection("tagsArr", function(collection) {
    const entriesWithTags = collection.getAll().filter(entry => entry.data.tags)
    const tags = entriesWithTags.reduce((tags, entry) => [...tags, ...entry.data.tags], [])
    return [...new Set(tags)]
  })
};
