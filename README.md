---
layout: layouts/post.njk
title: README
img: 'https://source.unsplash.com/1600x900/?nature,water'
---


## How to run this project

```
npm run dev
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

### Pull all submodules:

```shell
git submodule foreach git pull origin master
```

## Post

### Post empty fields

```md
---
title: How to delete git branch
abstract: ---
quote: ---
quoteAuthor: ---
img: 'https://source.unsplash.com/---'
imgAuthorName: '---'
imgAuthorProfile: 'https://unsplash.com/---'
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
