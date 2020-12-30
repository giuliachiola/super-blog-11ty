---
layout: layouts/items-list.njk
mainTag: search
paletteColor: 3

permalink: /tags/{{ tag }}/
pagination:
  data: collections
  size: 1
  alias: tag
renderData:
  title: 'Tagged posts<br> <span class="c-hero__title-custom">{{ tag }}</span>'
mainLayout: grid
isPageTag: true
---
