---
title: Add comments in JSON file
abstract: ---
quote: ---
quoteAuthor: ---
img: 'https://source.unsplash.com/---'
imgAuthorName: '---'
imgAuthorProfile: 'https://unsplash.com/---'
date: 2020-01-23
mainTag: git
tags:
  - json
  - nodejs
---

Spoiler: I lied.

<div class="c-article-section__img--small">
  <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/10wuTDLxgXIuuQ" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
</div>

As you know, you cannot and will never can add comments in JSON file **but** you can add something that act like a comment 😈.


```html
{
  "name": "super-styleguide",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "_____________________________CSS_____________________________": "",
    "stylelint": "stylelint 'src/scss/**/*.scss' || echo \"Stylelint failed for some file(s).\"",
    "scss-to-css-dev": "node-sass --output-style expanded src/scss/styles/develop -o src/css/",
    "css-to-postcss-dev": "postcss src/css --dir dist/css",
    "styles-dev": "npm run stylelint && npm run scss-to-css-dev && npm run css-to-postcss-dev",
	 "_____________________________SVG_____________________________": "",
    "clean-svgo": "rimraf src/icons/svgo/*",
    "svg-optimize": "npm run clean-svgo && node scripts/svgo.js",
	...
	...
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@gitlab.com/giuliachiola/giulia-styleguide.git"
  },
```
