const eleventyNavigation = require("@11ty/eleventy-navigation")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const { DateTime } = require("luxon")
const tableOfContents = require('eleventy-plugin-nesting-toc')
const readingTime = require('eleventy-plugin-reading-time');

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
  eleventyConfig.addPlugin(tableOfContents)
  eleventyConfig.addPlugin(readingTime);

  // configs
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("google*.html"); // TODO: check this!
  eleventyConfig.addPassthroughCopy("site-*.webmanifest");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("super-styleguide/src/css/style.css");
  eleventyConfig.setDataDeepMerge(true); // used to merge 'blog.11tydata.js' tags with .md tags

  eleventyConfig.addCollection("categories", function(collection) {
    const categ = collection.getAll().filter(entry => entry.data.category)
    return categ // tutte le entries con categorie
  })

  // posts = entries with category 'tutorials' or 'til'
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getAll().filter(entry => entry.data.category).filter(el => el.data.category === 'tutorials' || el.data.category === 'til')
  })

  eleventyConfig.addCollection("tagsArr", function(collection) {
    const entriesWithTags = collection.getAll().filter(entry => entry.data.tags)
    const tags = entriesWithTags.reduce((tags, entry) => [...tags, ...entry.data.tags], [])
    return uniqueArray(tags)
  })

  // date manipulation

  eleventyConfig.addFilter('htmlDateString', (dateObj, format) => {
    let dateFormat = 'yyyy-LL-dd' // 2020-03-30

    if (format === 'human-readable') {
      dateFormat = 'dd LLL yyyy' // 30 Mar 2020
    }

    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(dateFormat);
  })

  // Remove dashes in strings (e.g. label tags)

  eleventyConfig.addFilter('removeDashes', (string) => {
    return string.replace(/-/g, ' ')
  })

  // Markdown options

  const markdownIt = require("markdown-it")
  const markdownItAttrs = require('markdown-it-attrs')
  const markdownItAnchor = require('markdown-it-anchor');
  const options = {
    html: true,
    breaks: true,
    linkify: true
  }
  const markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItAnchor)
  eleventyConfig.setLibrary("md", markdownLib)
}
