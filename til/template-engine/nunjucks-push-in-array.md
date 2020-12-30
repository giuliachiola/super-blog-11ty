---
title: Add items to an array in nunjucks
abstract: Using push() method, add items in array using Nunjucks template engine.
quote: Whether you think you can <br class="u-ty-break-t">or think you can’t, you’re right.
quoteAuthor: Henry Ford

date: 2020-04-06
mainTag: template-engine
tags:
  - template-engine
  - nunjucks
id: T20
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

> 🧨 **!important**
>
> If you use {% raw %}`{% set .... %}`{% endraw %} inside a for-loop block, pay attention to have defined it **outside** before entering the loop.