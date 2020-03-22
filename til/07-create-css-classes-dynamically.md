---
title: Create CSS classes dynamically
abstract: ---
quote: ---
quoteAuthor: ---
img: 'https://source.unsplash.com/---'
imgAuthorName: '---'
imgAuthorProfile: 'https://unsplash.com/---'
date: 2020-01-23
mainTag: css
tags:
  - css
---

```scss
$co_card-gradient-git: #eb3349, #f45c43;
$co_card-gradient-vuejs: #11998e, #38ef7d;
$co_card-gradient-js: #f2994a, #f2c94c;
$co_card-gradient-vsc: #1a2980, #26d0ce;
$co_card-gradient-css: #915073, #c26b98;
$co_card-gradient-nodejs: #36582f, #7ab659;
$co_card-gradient-design-system: yellow, violet;

@mixin card-gradient($dir, $tag) {
  @if $tag == 'git' {
    background: linear-gradient($dir, $co_card-gradient-git);
  }

  @else if $tag == 'vuejs' {
    background: linear-gradient($dir, $co_card-gradient-vuejs);
  }

  @else if $tag == 'js' {
    background: linear-gradient($dir, $co_card-gradient-js);
  }

  @else if $tag == 'vsc' {
    background: linear-gradient($dir, $co_card-gradient-vsc);
  }

  @else if $tag == 'css' {
    background: linear-gradient($dir, $co_card-gradient-css);
  }

  @else if $tag == 'nodejs' {
    background: linear-gradient($dir, $co_card-gradient-nodejs);
  }
}

// ========

$tags: git, vsc, nodejs, design-system;

@each $tag in $tags {
  .c-card--#{$tag} {
    @include card-gradient(to right, $tag);
  }
}
```
