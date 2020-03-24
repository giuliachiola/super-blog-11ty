---
title: Add items to an array in Nunjucks
abstract: ---
quote: ---
quoteAuthor: ---
img: 'https://source.unsplash.com/---'
imgAuthorName: '---'
imgAuthorProfile: 'https://unsplash.com/---'
date: 2020-03-24
mainTag: template-engine
tags:
  - template-engine
  - nunjucks
---

To add items in nunjucks, use the `.push()` function.


{% raw %}
  ```twig
  {% set arr = [1,2] %}
  {% set arr = (arr.push(3), arr) %}
  ```
{% endraw %}

Final array:

```md
arr = [1,2,3]
```

Unfortunately, I did not found any references in the official [Nunjucks documentation](https://mozilla.github.io/nunjucks/templating.html) for this useful function 🤷🏻‍♀️

{% raw %}
  ```twig
  {% set animals = ['cat 🐱', 'dog 🐶', 'lion 🦁'] %}
  {% set domesticAnimals = [] %}
  {% for animal in animals %}
    {% if animal !== 'lion' %}
      {% set domesticAnimals = (domesticAnimals.push(animal), domesticAnimals) %}
    {% endif %}
  {% endfor %}
  ```
{% endraw %}

Final array:

```md
arr = ['cat 🐱', 'dog 🐶']
```

🧨 **!important**

If you use {% raw %}`{% set .... %}`{% endraw %} inside a for-loop block, pay attention to have defined it **outside** before entering the loop.
