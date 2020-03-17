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
  eleventyConfig.addCollection("tagList", function(collection) {
    // const valuesToRemove = ['blog', 'projects']
    collection.getAll().forEach(function(item) { // FIXME: ciclare meglio questa porcata!
      if('tags' in item.data ) {
        tags = item.data.tags;
      }
    })

    return tags.filter(item => item !== 'blog'); // FIXME: !valuesToRemove.includes(item) non funziona con multipli valori!
  });

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
    // console.log(tags)
    return [...new Set(tags)]
  })

  // eleventyConfig.addNunjucksFilter("uniqueArray", (arr) => { console.log(arr); return [...new Set(arr)]});
};
