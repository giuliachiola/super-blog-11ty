---
title: 'Appunti 11ty'
img: 'https://source.unsplash.com/1600x900/?nature,water'
mainTag: git
abstract: 'Lorem ipsum'
date: '2020-01-23'
tags:
  - git
  - shell
---

https://github.com/11ty/eleventy/issues/76#issuecomment-372331202

pagination:
  data: items
  size: 2
items:
  - item1
  - item2
  - item3
  - item4
permalink: paged/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber }}/{% endif %}index.html

https://github.com/11ty/eleventy/issues/76#issuecomment-372528823

{% for item in pagination.items %}
  {% include "item/post" %}
{% endfor %}

FUNZIONANTE: https://github.com/11ty/eleventy/issues/455#issuecomment-474026138

CHECK DEBUG
https://github.com/11ty/eleventy/issues/455#issuecomment-474236311

REPO
https://github.com/danurbanowicz/eleventy-netlify-boilerplate
https://github.com/EdenKupe/notTheSky

MIO ERRORE CYCLE
https://github.com/11ty/eleventy/issues/644

LEGGERE TODO
https://github.com/11ty/eleventy/issues/455
