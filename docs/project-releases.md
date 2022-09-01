# Project releases

## 1. Merge `develop` into the `main` branch

## 2. Bump version

Bump version

```shell
npm version major|minor|patch
```

| Bump  | Description                 |
|-------|-----------------------------|
| major | breaking change             |
| minor | awesome new functionality   |
| patch | content update, minor fixes |

## 3. Push (automatic deploy on Netlify) and update `super-blog-content` repo

and push `main` and the new tag

```shell
gp && gp --tags && update super-blog-content
```

Note: `update super-blog-content` is an alias in `~/.zshrc`

```shell
alias update super-blog-content='cp -a ~/Sites/super-blog-11ty/content/. ~/Sites/super-blog-content/ && cd ~/Sites/super-blog-content/ && gaa && gcam "content: upate content from main blog repo" && gp && cd ~/Sites/super-blog-11ty/'
```