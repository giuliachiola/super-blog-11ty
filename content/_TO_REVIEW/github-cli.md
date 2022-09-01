---
title: How to speed up development with GitHub CLI
abstract: GitHub comes with an easy to use CLI, with awesome features in it.
quote: Man cannot discover new oceans unless he has the courage to lose sight of the shore.
quoteAuthor: Andre Gide

date: 2022-08-28
crossPostDEV: 
crossPostHashnode: 
mainTag: git
tags:
  - github
  - shell
id: 31
---

## Wait, what?!

I was today years old when I found out that GitHub has a command line interface 🤯.

<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/zMpHQobxFfCE0/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://media.giphy.com/media/zMpHQobxFfCE0/giphy.gif">via GIPHY</a></p>
</div>

In the [official docs](https://cli.github.com/) the instructions to install and use it are quite clear to follow.

## Installation

I use _brew_ to install GitHub CLI, so

```shell
brew install gh
```

did the magic in less then a minute.

## Authorization

You have to authorize this application in order to use your GitHub account from the CLI:

```shell
gh auth login
```

Answer few questions about CLI configuration, here's mines:

```shell
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations? SSH
? Upload your SSH public key to your GitHub account? /Users/giulia/.ssh/id_ed25519.pub
? Title for your SSH key: GitHub CLI
? How would you like to authenticate GitHub CLI? Login with a web browser

! First copy your one-time code: XXXX-XXXX
Press Enter to open github.com in your browser...
```

In your browser will appear this screen to confirm the authorization

![authorize-github-cli](https://res.cloudinary.com/giuliachiola/image/upload/v1662011978/super-blog/031-github-cli/authorize-github-cli_wzm6r5.png)

and you have to add your `one-time code: XXXX-XXXX`

![device-activation](https://res.cloudinary.com/giuliachiola/image/upload/v1662011978/super-blog/031-github-cli/device-activation_zsdjcw.png)

Ok, now you should be all set! ✨

```shell
Press Enter to open github.com in your browser...
✓ Authentication complete.
- gh config set -h github.com git_protocol ssh
✓ Configured git protocol
```

![congratulations](https://res.cloudinary.com/giuliachiola/image/upload/v1662011978/super-blog/031-github-cli/congratulations_a4rz5a.png)

## Let's run some commands!

To create a new GitHub repository, run

```shell
gh repo create test-repository --private

✓ Created repository giuliachiola/test-repository on GitHub
```

![test-repository-github](https://res.cloudinary.com/giuliachiola/image/upload/v1662012410/super-blog/031-github-cli/test-repository-github_hshmkm.png)


Note: you have to specify if the repo you are creating will be private or public.

