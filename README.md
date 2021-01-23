# Super blog 11ty

[![Netlify Status](https://api.netlify.com/api/v1/badges/418bc946-0474-46c4-9bc3-48031743a7ef/deploy-status)](https://app.netlify.com/sites/blog-giuliachiola/deploys)

## Run this project

```
npm run dev
```

## Build this project (ex. Netlify build)

```
npm run build
```

## Project submodules

This project has its content as git submodule in `super-blog-content` folder.
To pull updated content run

```shell
git submodule update --recursive --remote
```

### Pull **one** submodule only

* Change to the submodule directory
cd submodule_dir

* Checkout desired branch
git checkout master

* Update
git pull

* Get back to your project root
cd ..

* Now the submodules are in the state you want, so
git commit -am "Pulled down update to submodule_dir"

### Pull *all* submodules:

```shell
git submodule foreach git pull origin master
```

### Pull submodules *manually*

This is useful for this project if you want to have different test branches and not `master` on every project

```shell
cd super-blog-content/ && git pull && cd .. && cd super-styleguide/ && git pull && cd ..
```

**Branches**

- super-styleguide: `master` -> production
- super-blog-content: `master`
- (this project) super-blog-11ty: `master` -> production, `develop` -> staging

## Content

### Post empty fields

```md
---
title: How to delete git branch
abstract: ---
quote: ---
quoteAuthor: ---

crossPostDEV:
crossPostHashnode:
date: 2021-03-23
mainTag: ---
tags:
  - ---
id: T20
---
```

### Tags

```md
tags:
  - css
  - design-system
  - git
  - js
  - json
  - mac-os
  - nodejs
  - nunjucks
  - performance
  - pug
  - regex
  - shell
  - shell
  - static-site-generator
  - uiengine
  - vsc
```

#### Quotes line break

```md
quote: If opportunity doesn’t knock, <br class="u-ty-break-t">build a door.
```

### More info

> 📚 More info
>
> [...](...)
> [...](...)

### ⚡️ Bonus tip

...

### Important

> 🧨 **!important**
>
> 

### Codepen example

[🖥 Codepen example](#)

### GitLab snippet

```md
[🦊 Gitlab snippet](#)
```

### Internal links

[📒 styleguide setup]({{ global.siteUrl }}/posts/styleguide-setup/)

### WIP posts

- add `eleventyExcludeFromCollections: true` flag in WIP posts

## Images

### Shadow image using markdown-it

```
![alt text](image.jpg){.u-shadow}
```

### Set image max-width

- `s-img--medium-d` (max-width: 70% in desktop)
- `s-img--small-d` (max-width: 50% in desktop)
same as gifs.

### Gifs

```html
<div class="s-giphy s-giphy--medium-d">
...
</div>
```

Use tag `<video>` to improve performance:

```html
<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/5gXYzsVBmjIsw/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://giphy.com/gifs/cat-cool-5gXYzsVBmjIsw">via GIPHY</a></p>
</div>
```

## Markdown

Default is liquid template, please be sure to wrap twig/nunjucks snippets

{% raw %}
```html
<article class="c-card c-card--{{ tag }}"> ... </div>
```
{% endraw %}


## Table of contents

Used for Cloudinary folder match

http://localhost:8080/_generate/table-of-content

### Responsive images

```html
<img srcset="photo-720w.jpg 720w,
             photo-976w.jpg 976w,
             photo-1024w.jpg 1024w,
             photo-2048w.jpg 2048w"
     sizes="(max-width: 767px) 720px, (max-width: 1023px) 976px,
            1024px"
     src="photo-1024w.jpg"
     alt="">
```

Example at 720w:
```
https://res.cloudinary.com/giuliachiola/image/upload/v1586637232/f_auto,w_720/super-blog/T8-issue-and-pr-templates/til-14-bug-report-01_fcauoy.jpg
```

IMPORTANT: do *not* indent HTML tag, because 11ty build breaking lines as `<br>`

❌ bad
```
<img src="/media/cc0-images/grapefruit-slice-332-332.jpg"
     alt="Grapefruit slice atop a pile of other slices">
```

✅ good
```
<img src="/media/cc0-images/grapefruit-slice-332-332.jpg" alt="Grapefruit slice atop a pile of other slices">
```

Using `width`, `height`, `lazy`

```html
<img loading="lazy" src="" alt="" width="" height="">
```

Add classes

```html
![issue template 01](https://res.cloudinary.com/giuliachiola/image/upload/v1586637232/super-blog/T8-issue-and-pr-templates/til-14-bug-report-01_fcauoy.jpg){.c-article-section__img--shadow}
```

## Debug 11ty

Print all collections (= output in Nunjucks `{%- for pages in collections.all %}` )

```js
eleventyConfig.addCollection("debugMyContent", function(collectionApi) {
  const cleaned = collectionApi.getAll().map(coll => ({
    // edit here to print just some values
    path: coll.template.inputPath,
    title: coll.data.title,
  }))
  console.log('cleaned *** ', cleaned)
  return collectionApi.getAll()
});
```

# Validators check

- [Twitter card validartor](https://cards-dev.twitter.com/validator)
- [Facebook card validator](https://developers.facebook.com/tools/debug/)
- [Check broken links](https://www.drlinkcheck.com/)

# Posts to review


```md
---
...

eleventyExcludeFromCollections: true
---

// REVIEW:
```
