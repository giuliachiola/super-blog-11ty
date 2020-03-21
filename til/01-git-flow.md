---
title: 'Git flow initialize'
abstract: 'How to fast initialize git flow'
quote: 'Tidying your physical space allows you to tend to your psychological space.'
quoteAuthor: 'Marie Kondo'
img: 'https://source.unsplash.com/KPaSCpklCZw'
imgAuthorName: 'Giulia Chiola'
modifiers: ['bottom-text']
date: 2020-02-01
mainTag: git
tags:
  - git
  - shell
---

To inizialize _git flow_ with default branches configuration, run

```shell
git flow init -d
```

It will create a git flow structure to your project

```shell
Initialized empty Git repository in /Users/giulia/Sites/giulia/test/.git/
Using default branch names.
No branches exist yet. Base branches must be created now.
Branch name for production releases: [master]
Branch name for "next release" development: [develop]
.git/hooks/post-commit: line 8: git-stats: command not found

How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
Hooks and filters directory? [/Users/giulia/Sites/giulia/test/.git/hooks]
```

[Read more about git flow]()
