const eleventyNavigation = require("@11ty/eleventy-navigation")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const { DateTime } = require("luxon")
const tableOfContents = require('eleventy-plugin-nesting-toc')
const readingTime = require('eleventy-plugin-reading-time');
const socialImages = require("@11tyrocks/eleventy-plugin-social-images");

function uniqueArray(arr) {
  return [...new Set(arr)]
}

module.exports = {
  // markdownTemplateEngine: 'md',
  // see README for more informations
}

module.exports = function(eleventyConfig) {
  /**
  * plugins
  */

  eleventyConfig.addPlugin(eleventyNavigation);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(tableOfContents)
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(socialImages);

  /**
  * pass through copy
  */

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("google*.html"); // TODO: check this!
  eleventyConfig.addPassthroughCopy("site-*.webmanifest");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("super-styleguide/src/css/style.css");
  eleventyConfig.setDataDeepMerge(true); // used to merge 'blog.11tydata.js' tags with .md tags

  /**
  * collections
  */

  // array of tags, used in pills
  // important: this function returns all tags used in posts (that means thats 'projects' are exluced!)

  eleventyConfig.addCollection("tagsArr", function(collection) {
    const entriesWithTags = collection.getFilteredByTag('post').filter(entry => entry.data.tags)
    const tags = entriesWithTags.reduce((tags, entry) => [...tags, ...entry.data.tags], [])
    return uniqueArray(tags)
  })

  /**
  * filters
  */

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

  // Filter collection by tag

  eleventyConfig.addFilter('filterByTag', (collection, tag) => {
    return collection.filter(entry => entry.data.tags.includes(tag))
  })

  // Filter collection by categoy

  eleventyConfig.addFilter('filterByCategory', (collection, category) => {
    return collection.filter(entry => entry.data.category == category)
  })

  // Remove from array
  eleventyConfig.addFilter('removeFromArray', (arr, itemToRemove) => {
    return arr.filter(item => item !== itemToRemove)
  })

  /**
  * Markdown optionsilters
  */

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
