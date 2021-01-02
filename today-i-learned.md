---
layout: layouts/items-list.njk
title: Today I learned
subtitle: A collection of useful code snippets for a faster development.<br>Reading time &lt; 5 mins
paletteColor: 1

eleventyNavigation:
  key: til
  order: 1

pagination:
  data: collections.post
  size: 10
  reverse: true
permalink: "{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber }}/{% endif %}/"

categoryFilter: til
---
