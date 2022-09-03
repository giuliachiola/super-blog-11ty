---
title: Vue JS: basic project setup
abstract: How to set up a Vue JS project step by step from scratch.
quote: Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.
quoteAuthor: Lou Holtz

date: 2020-04-04

permalink: posts/vue-project-setup/
crossPostDEV:
crossPostHashnode:

mainTag: vuejs
tags:
  - vuejs
  - js
  - sass

id: 32
---

> 🧨 **!important**
>
> edited on September 2022:
> this guide used Vue 2, probably now it's obsolete and maybe you would like to use Vue 3 instad. Here it is the link to the [migration guide](https://www.vuemastery.com/blog/vue-3-migration-build/)

I recently approached the world of **Vue JS** and its trusty sidekick, Webpack. Here are some simple simple tips to get you started on a project.

I will split the guide into 5 independent parts:

1. Vue + Webpack
2. Vuex
3. Git Lab + Gitflow
4. SASS
5. Boostrap

## 1. Install Vue + Webpack

First, check if you have **vue-cli** updated. If not, this command will install/update it to the latest version:

```shell
npm i -g vue-cli
```

Go to the system folder you want to create the project, than run

```shell
vue init webpack projectname
```

Let's press `Enter` (implicit "Yes") for all the questions, except those for "Setup Unit Test", to which you can answer "No" if you as me don't need them in this simple project (in any case, if you realize that you need them later, they can always be installed at any time).

```shell
Project name projectname
? Project description A Vue.js project
? Author Giulia Chiola
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm
```

![shell_01](https://res.cloudinary.com/giuliachiola/image/upload/v1585317435/super-blog/032-vue-project-setup/shell_01_etsnpm.jpg)

Great, we just created the scaffolding for the project.
If we want to see what we have achieved so far, let's do what the shell says: let's go into the folder and run the server in development mode

```shell
cd projectname
npm run dev
```

![shell_02](https://res.cloudinary.com/giuliachiola/image/upload/v1585317443/super-blog/032-vue-project-setup/shell_02_cdjow6.jpg)

Open the browser at [http://localhost:8080](http://localhost:8080) and you should see an Hello Vue!

![HelloVue](https://res.cloudinary.com/giuliachiola/image/upload/v1585317435/super-blog/032-vue-project-setup/HelloVue_yaeiqy.jpg)

Let's analyze which important files are into the root folder:

- _index.html_
this is the page that is compiled in Server Side Rendering and that we are looking at.
Inside `index.html` there is an HTML node with an id: `<div id ="app"></div>`. That's _where the magic happens_ ✨: when VueJS is up and running that `<div>` is replaced with another identical node (see `App.js` below), but istead of being an empty node, the new node contains our whole Vue application.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Progetto piccino</title>

  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

<style type="text/css">
</style>
```

- _src/App.vue_

it has a `<template>` tag with the app id reference inside `<div id ="app">`. That content is what we are seeing in the browser.
(Important: it is no coincidence that `App` component has only one node inside the `<template>` wrapper tag! Each Vue component must **necessarily** have a single node at its first level, which in turn can contain as many components we want)

```js
<template>
  <div id="app">
    <MyComponent />
    <AnotherMyComponent />
  </div>
</template>
```

- _src/main.js_
this is the main JavaScript file of the project, where Vue and the router are instantiated (here we could also add the store manager using Vuex)

```js
import App from './App'

new Vue({
  template: `
    <div id="app">
    </div>
  `
}).$mount('#app')
```

At this point, I have a Vue application up and running, but I like to be organized so let's take it a little bit further: by default Vue wants that we save the `.vue` components inside the `components` directory, but we can also create subfolders to make them more tidy

Keep in mind that it is _webpack_ that resolves paths of _components_ directories, so we have to tell him what to do with our subfolders.

```shell
├── src
│   ├── components
│       └── elements
│           └── HelloWord.vue
│       └── icons
│       └── layout
│       └── templates
```

Let's go to webpack settins and add _alias_ to those already present. I have just added _icons, elements, layout, templates_.

```js
// webpack.base.conf.js

resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue $': 'vue / dist / vue.esm.js',
      '@elements': resolve ('src / components / elements'),
      '@icons': resolve ('src / components / icons'),
      '@layout': resolve ('src / layout'),
      '@templates': resolve ('src / components / templates'),
      '@components': resolve ('src / components'),
      '@root': resolve ('src')
    }
}
```

Using that config above, in every component inside the `components/` folder, we can include the other ones, preceded by the alias of the folder.

E.g. `<HelloWorld>` is inside `components/elements` folder, so:

```js
// layout/MyLayout.vue

import HelloWorld from '@elements/HelloWorld.vue'
// plain syntax
// import HelloWorld from '../elements/HelloWorld.vue'
```

![webpack_resolve_02](https://res.cloudinary.com/giuliachiola/image/upload/v1585317440/super-blog/032-vue-project-setup/webpack_resolve_02_lq9xfs.jpg)

To check everything is ok this far, add `HelloVue.vue` in your `main.js` and check that everything works. Remember that a best practice would be to _not_ include components inside `main.js`, keep that file just for the Vue instance. 

Best practices say you sould import _components_ in _templates_, and _templates_ should be called by the Vue Router.

## 2. Vuex

Long story short: `Vuex` is a state management pattern for Vue applications. It serves as a centralized repository for all components of an application, with rules ensuring that state can only be changed in a predictable way. [Detailed Guide](https://vuex.vuejs.org/en/intro.html)

Installing Vuex is definitely optional. Not all apps