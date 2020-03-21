---
title: How to delete git branch
abstract: ---
quote: ---
quoteAuthor: ---
img: 'https://source.unsplash.com/---'
imgAuthorName: '---'
imgAuthorProfile: 'https://unsplash.com/---'
date: 2020-01-23
mainTag: git
tags:
  - git
  - shell
---

## Rename local branch

To rename a *local* branch in git is easy as order a cup of coffee ☕️

- Move on the branch you want to rename
```shell
git checkout -b feature/wrong-name
```

- Rename it locally
```bash
git branch -m feature/new-awesome-name
```

## Rename also remote branch

To rename a *remote* branch is quite longer, but easy as order a cup of coffee macchiato ☕️+🥛

- Unset the upstream branch to unlink local and remote branch
```bash
git branch --unset-upstream
```

Note: you don't have to delete local branch because you already have rename it!

- Update the upstream branch to the new one and push it
```bash
git push --set-upstream origin feature/new-awesome-name
```

- Delete remote branch
```bash
git push origin --delete feature/wrong-name
```
