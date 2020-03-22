---
title: 11ty markdown config to add classes
abstract: ---
quote: ---
quoteAuthor: ---
img: 'https://source.unsplash.com/---'
imgAuthorName: '---'
imgAuthorProfile: 'https://unsplash.com/---'
date: 2020-01-23
mainTag: static-site-generator
tags:
  - 11ty
  - static-site-generator
---

```javascript
const markdownIt = require("markdown-it")
const markdownItAttrs = require('markdown-it-attrs')
const options = {
  html: true,
  breaks: true,
  linkify: true
}
const markdownLib = markdownIt(options).use(markdownItAttrs)
eleventyConfig.setLibrary("md", markdownLib)
```

```md
# header {.style-me}
paragraph {data-toggle=modal}

another bit of data {.class #identifier attr=value attr2="spaced value"}
```
