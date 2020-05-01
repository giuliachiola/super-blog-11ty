const eleventyNavigation = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomItem(arr) {
//   return arr[getRandomInt(0, arr.length - 1)]
// }

function uniqueArray(arr) {
  return [...new Set(arr)]
}

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
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("google*.html"); // TODO: check this!
  eleventyConfig.addPassthroughCopy("site-*.webmanifest");
  eleventyConfig.addPassthroughCopy("super-styleguide/src/css/style.css");
  eleventyConfig.setDataDeepMerge(true); // used to merge 'blog.11tydata.js' tags with .md tags

  eleventyConfig.addCollection("categories", function(collection) {
    const categ = collection.getAll().filter(entry => entry.data.category)
    return categ // tutte le entries con categorie
  })

  // posts = entries with category 'blog' or 'til'
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getAll().filter(entry => entry.data.category).filter(el => el.data.category === 'blog' || el.data.category === 'til')
  })

  eleventyConfig.addCollection("tagsArr", function(collection) {
    const entriesWithTags = collection.getAll().filter(entry => entry.data.tags)
    const tags = entriesWithTags.reduce((tags, entry) => [...tags, ...entry.data.tags], [])
    return uniqueArray(tags)
  })

  // Markdown options

  const markdownIt = require("markdown-it")
  const markdownItAttrs = require('markdown-it-attrs')
  const options = {
    html: true,
    breaks: true,
    linkify: true
  }
  const markdownLib = markdownIt(options).use(markdownItAttrs)
  eleventyConfig.setLibrary("md", markdownLib)
}
