# Minimal Vue SSR w/Webpack Example

Created due to the fact there wasn't a clear, consisce sample Vue SSR application with Webpack. Based heavily on the following resources:
* [Basic Server Side Rendering with Vue.js and Express | Alligator.io](https://alligator.io/vuejs/basic-ssr/)
* [Vue & SSR: The best practices - VueConf US 2018 | Vue Mastery](https://www.vuemastery.com/conferences/vueconf-us-2018/vue-and-ssr-the-best-practices-sebastien-chopin/)
* [Vue.js Server-Side Rendering With Vue Router: Step-By-Step Guide | Vue.js Developers](https://vuejsdevelopers.com/2017/12/11/vue-ssr-router/)
* [Introducing Bundle Renderer | Vue SSR Guide](https://ssr.vuejs.org/guide/bundle-renderer.html)

## Usage

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# build and serve WITHOUT hot reload at localhost:3000
npm run start
```

## Pending TODOs

* Add hot reloading.
* Pass server `context` to Vue App.

## Q&A
* Why did you do this?
  * I couldn't find any online tutorials that achieved a minimal Webpack + Vue SSR configuration, and also provided the source code for the complete solution. So I built one.
* Why didn't you use `vue-ssr-webpack-plugin`?
  * I wanted to keep things as simple as possible. You can add it if you needed.
* Why aren't changes being reflected on save?
  * I haven't implemented hot-reloading with webpack-dev-server yet. I might add it later, but it will be at the cost of added example complexity.