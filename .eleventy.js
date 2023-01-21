const eleventyNavigation = require('@11ty/eleventy-navigation')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const { DateTime } = require('luxon')
const tableOfContents = require('eleventy-plugin-nesting-toc')
const readingTime = require('eleventy-plugin-reading-time')
const socialImages = require('@11tyrocks/eleventy-plugin-social-images')
const CleanCSS = require('clean-css') // CSS minifier
const { minify } = require("terser") // JS minifier
require('dotenv').config()

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

  eleventyConfig.addPlugin(eleventyNavigation)
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(tableOfContents)
  eleventyConfig.addPlugin(readingTime)
  eleventyConfig.addPlugin(socialImages)

  /**
  * pass through copy
  */

  eleventyConfig.addPassthroughCopy("img")
  eleventyConfig.addPassthroughCopy("dist/js/bundle.js")
  eleventyConfig.addPassthroughCopy("super-styleguide/src/css/print.css")
  eleventyConfig.addPassthroughCopy("google*.html") // TODO: check this!
  eleventyConfig.addPassthroughCopy("site-*.webmanifest")
  eleventyConfig.addPassthroughCopy("robots.txt")
  eleventyConfig.setDataDeepMerge(true) // used to merge 'blog.11tydata.js' tags with .md tags

  /**
  * watchers for external resources
  */
  eleventyConfig.addWatchTarget("super-styleguide/src/css/");
  eleventyConfig.addWatchTarget("./js/");

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

  // Table of contents post - sorted by IDs
  eleventyConfig.addCollection("postsSortedByIds", function(collection) {
    const items = collection.getAll().filter(el => el.data.id)

    // posts (ID = number, e.g. 001)
    const posts = items.filter(el => typeof el.data.id === 'number')
    const postsSorted = posts.sort((a, b) => a.data.id - b.data.id)

    // projects (ID = string, e.g. P1)
    const projects = items.filter(el => typeof el.data.id === 'string')
    const projectsSorted = projects.sort((a, b) => a.data.id.localeCompare(b.data.id))

    return [...postsSorted, ...projectsSorted]
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

    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(dateFormat)
  })

  // time reading
  // string -> number
  // 3 min read -> 3

  eleventyConfig.addFilter('timeReadingToNumber', (string) => {
    return Number(string.replace(' min', ''))
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

  // CSS

  eleventyConfig.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles
  })

  // Shortcodes
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`)

  /**
  * Markdown optionsilters
  */

  const markdownIt = require("markdown-it")

  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
    .use(require('markdown-it-attrs'))
    .use(require('markdown-it-anchor'), {
      permalink: true,
      permalinkSymbol: '#',
      permalinkClass: 'j-header-anchor'
    })
  eleventyConfig.setLibrary("md", markdownLib)

  /**
  * JS minifier
  */

  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code)
      callback(null, minified.code)
    } catch (err) {
      console.error("Terser error: ", err)
      // Fail gracefully.
      callback(null, code)
    }
  })
}
