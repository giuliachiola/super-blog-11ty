---
title: Fix developer path after upgrade to MacOS Catalina
abstract: Your git commands do not probably work as expected after upgrade to MacOS Catalina, here is how to fix developer path error.
quote: When a new day begins, <br class="u-ty-break-t">dare to smile gratefully.
quoteAuthor: Steve Maraboli

date: 2020-04-07
mainTag: mac-os
tags:
  - mac-os
---

After MacOS system upgrade to [Catalina](https://www.apple.com/macos/catalina/), git did not work anymore.

Running any of git commands, you would probably got this error

```shell
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

To fix it, you had to run

```shell
xcode-select --install
```

The "xcode-select" command requires the command line developer tools.

A prompt will appear asking you to install it now.

![xcode-prompt](https://res.cloudinary.com/giuliachiola/image/upload/v1585479297/super-blog/til/11-macos-catalina/xcode-prompt_n6obrx.jpg)

When installation is completed, git should work as expected! 😎

> 📚 More info
>
> [Invalid active developer path](https://apple.stackexchange.com/questions/254380/why-am-i-getting-an-invalid-active-developer-path-when-attempting-to-use-git-a)
