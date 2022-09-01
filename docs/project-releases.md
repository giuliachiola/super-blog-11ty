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

To update production release, run

```shell
blog-deploy
```

Note: These aliases should be in your `~/.zshrc`

```shell
alias blog-deploy='npm version patch && gp && gp --tags && blog-update-content-repo'

alias blog-update-content-repo='cp -a ~/Sites/super-blog-11ty/content/. ~/Sites/super-blog-content/ && cd ~/Sites/super-blog-content/ && gaa && gcam "content: upate content from main blog repo" && gp && cd ~/Sites/super-blog-11ty/'
```

