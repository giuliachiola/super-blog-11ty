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

### Pull submodules manually

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

Embedded giph from Giphy

```html
<iframe src="https://giphy.com/embed/62PP2yEIAZF6g" width="480" height="273" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a class="u-giphy__caption" href="https://giphy.com/gifs/swag-80s-sunglasses-62PP2yEIAZF6g">via GIPHY</a>
```

### More info about ...

> 📚 More info about ...
>
> [...](...)
> [...](...)

# Validators check

- [Twitter card validartor](https://cards-dev.twitter.com/validator)
- [Facebook card validator](https://developers.facebook.com/tools/debug/)
- [Check broken links](https://www.drlinkcheck.com/)
