---
title: UIengine project setup
abstract: ---
quote: ---
quoteAuthor: ---
img: 'https://source.unsplash.com/---'
imgAuthorName: '---'
imgAuthorProfile: 'https://unsplash.com/---'
date: 2020-01-23
mainTag: css
tags:
  - design system
  - node
  - css
---

# UIengine

- module-alias
```shell
npm install module-alias --save-dev
```

...

## Run parallel tasks

- cross-env
```shell
npm install cross-env --save-dev
```

- run-all
```shell
npm install npm-run-all --save-dev
```

- nodemon
```shell
npm install nodemon --save-dev
```

## UIengine config

In _uiengine.config.js_ file add

- themes

```javascript
themes: [
    {
      id: 'light',
      title: 'Light'
    },
    {
      id: 'dark',
      title: 'Dark'
    }
  ],
```

- CSS file to customize UIengine layout

```javascript
customStylesFile: '/css/uiengine.css',
```
