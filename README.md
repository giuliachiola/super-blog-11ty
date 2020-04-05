---
layout: layouts/post.njk
title: README
img: 'https://source.unsplash.com/1600x900/?nature,water'
---


## How to run this project

```
npm run dev
```

## Project submodules

This project has its content as git submodule in `super-blog-content` folder.
To pull updated content run

```shell
git submodule update --recursive --remote
```

## Post

### Post empty fields

```md
---
title: How to delete git branch
abstract: ---
quote: ---
quoteAuthor: ---
img: 'https://source.unsplash.com/---'
imgAuthorName: '---'
imgAuthorProfile: 'https://unsplash.com/---'
date: 2020-03-23
readingTime: 10 mins
mainTag: ---
tags:
  - ---
---
```
