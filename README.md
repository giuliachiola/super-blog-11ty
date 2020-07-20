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

- super-styleguide: `develop`
- super-blog-content: `master`


## Post

### Post empty fields

```md
---
title: How to delete git branch
abstract: ---
quote: ---
quoteAuthor: ---
# img: 'https://source.unsplash.com/---'
# imgAuthorName: '---'
# imgAuthorProfile: 'https://unsplash.com/---'

date: 2020-03-23
readingTime: 10 mins
mainTag: ---
tags:
  - ---
---
```


### More info about ...

> 📚 More info about ...
>
> [...](...)
> [...](...)

### Shadow image using markdown-it

```
![alt text](image.jpg){.c-article-section__img--shadow}
```

### GitLab snippet

```md
[🦊Gitlab snippet](#)
```

# Validators check

- [Twitter card validartor](https://cards-dev.twitter.com/validator)
- [Facebook card validator](https://developers.facebook.com/tools/debug/)
- [Check broken links](https://www.drlinkcheck.com/)

### WIP posts

- add `eleventyExcludeFromCollections: true` flag in WIP posts
