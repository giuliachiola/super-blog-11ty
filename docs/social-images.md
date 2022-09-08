# Social images

Social images are generated using this script

```shell
"social:images": "eleventy-social-images --imageDir social-img --templatePath _generate/social-img-build/preview.html",
```

**IMPORTANT**

PNG files are not available neither in local enviroment nor in `develop` environment, but they are deployed and available just in production:

e.g.

200:
https://giuliachiola.dev/social-img/how-to-speed-up-development-with-github-cli.png 

404:
https://develop--blog-giuliachiola.netlify.app/social-img/how-to-speed-up-development-with-github-cli.png

because I am using `globalSiteUrl` as variable (should I change it? Who knows! 😇)

```html
{%- set socialImg %}{{ global.siteUrl }}/social-img/{{ title | slug }}.png{% endset-%}
```

## Puppeteer error on M1 chip

Add in your `~/.zshrc` these lines

```shell
# Fix Puppeteer on M1 chip (super-blog-11ty error 2022-08-22)
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export PUPPETEER_EXECUTABLE_PATH=`which chromium`
```