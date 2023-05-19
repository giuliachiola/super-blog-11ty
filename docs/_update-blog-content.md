# How to update content in `super-blog-content` repository

🚨 **DO NOT USE `super-blog-content` repository to change posts content**, use it just this one (`super-blog-11ty`), and use `super-blog-content` just to store markdown posts.

Run the alias inside this repository `super-blog-11ty` from the root, on the `main` branch:

```shell
~/Sites/super-blog-11ty > main > update-super-blog-content
```

in `.zshrc` you should have these lines:

```sh
alias deploy-blog='npm version && git push && update-super-blog-content'

alias update-super-blog-content='cp -a ~/Sites/super-blog-11ty/content/. ~/Sites/super-blog-content/ && cd ~/Sites/super-blog-content/ && gaa && gcam "content: upate content from main blog repo" && gp && cd ~/Sites/super-blog-11ty/'
```

This alias will:

- go to the blog local folder `content/`
- copy all content files to the local repo `super-blog-content/`
- commit and push to `super-blog-content` repo

Note: a long time ago, this repository was a git submodule, but for my own sake of mind I prefer to remove it as submodule.
