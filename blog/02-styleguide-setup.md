---
title: Styleguide setup
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
  - css
  - node
---

## Styles

- node sass
```shell
npm install node-sass --save-dev
```

- postcss
```shell
npm install postcss postcss-cli postcss-preset-env postcss-import --save-dev
```

<script src="https://gist.github.com/giuliachiola/146d8866adf5d67dbda53d6e8615840e.js"></script>

- stylelint
```shell
npm install stylelint stylelint-scss stylelint-order --save-dev
```

<script src="https://gist.github.com/giuliachiola/c93494069521ea5f20f5b76936efd710.js"></script>

- sass-mq
```shell
npm install sass-mq --save-dev
```

Save the file `src/scss/00-settings/_mq-config.scss` // TODO: add snippet gist!

Add the following lines in `src/scss/00-settings/__settings.scss`:

```scss
// media queries
@import 'node_modules/sass-mq/_mq.scss';
@import 'mq-config';
```

- normalize-scss
```shell
npm install normalize-scss --save-dev
```

_package.json_

```
"scripts": {
    "_____________________________Styles_____________________________": "",
    "stylelint": "stylelint 'src/scss/**/*.scss' || echo \"Stylelint failed for some file(s).\"",
    "cleanup:dev": "rimraf dist src/css/*.css",
    "scss:to:css:dev": "node-sass --output-style expanded src/scss/ -o src/css/",
    "css:to:postcss:dev": "postcss src/css --dir dist/css",
    "styles:dev": "npm run stylelint && npm run scss:to:css:dev && npm run css:to:postcss:dev",
  },
```

Add SCSS files with this structure

```
src/
  |-- scss/
      | -- here there will be the scss files structure
  |-- css/
      | -- here there will be the node-sass compiled CSS output
```

## SVG

- svgo
