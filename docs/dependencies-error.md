# Dependencies error

If `npm install` throw this error

```shell
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! Found: markdown-it@12.2.0
npm ERR! node_modules/markdown-it
npm ERR!   peer markdown-it@"*" from markdown-it-anchor@6.0.1
npm ERR!   node_modules/markdown-it-anchor
npm ERR!     dev markdown-it-anchor@"^6.0.1" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! dev markdown-it-attrs@"^3.0.3" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: markdown-it@11.0.1
npm ERR! node_modules/markdown-it
npm ERR!   peer markdown-it@">= 9.0.0 < 12.0.0" from markdown-it-attrs@3.0.3
npm ERR!   node_modules/markdown-it-attrs
npm ERR!     dev markdown-it-attrs@"^3.0.3" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
```

please run this

```shell
npm install --save --legacy-peer-deps
```