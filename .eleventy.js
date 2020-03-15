const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = {
  markdownTemplateEngine: 'njk',
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.setDataDeepMerge(true); // used to merge 'blog.11tydata.js' tags with .md tags

  // eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));
  eleventyConfig.addCollection('tagList', function(collection) {
    let tags = []
    const tagsToRemove = ['blog', 'projects']
    collection.getAll().forEach(function(item) {
      if("tags"in item.data ) {
        tags = item.data.tags;
      }
    })
    return tags.filter(item => !tagsToRemove.includes(item))
  });
};
