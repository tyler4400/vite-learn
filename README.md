[![lint](https://github.com/tyler4400/vite-learn/actions/workflows/lint.yml/badge.svg)](https://github.com/tyler4400/vite-learn/actions/workflows/lint.yml)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/tyler4400/vite-learn/deploy_gitHub_pages)

### 项目介绍
#### 用vite搭建一个vue3 + vue全家桶 + ts 的初始项目
vite2 + vue3 + vue-router@next + eslint + hosky + lint-staged。
其中vuex不打算集成，打算使用[pinia](https://github.com/posva/pinia)。
另外，element plus 和 ant design of vue还在考虑中

###项目地址
已部署到github pages, 点击访问：[项目地址](https://tyler4400.github.io/vite-learn/), 由于采用的history路由模式，且github pages有基础路径`/vite-learn/`，所以访问可能会有404现象

### 代码规范
使airbnb风格的eslint


### 踩坑
#### 1. webstorm 还不识别vite的@别名，但我们可以创建一个`webpack.config.js`
 you can create webpack.config.js file manually
```js
module.exports = {
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "src") // change this to your folder path
    }
  }
};
```
然后添加到as a webpack configuration file in Settings | Languages & Frameworks | JavaScript | Webpack.

#### 2. eslint 不支持vite
[Vite Vue3项目eslint配置遇到的问题](https://www.cnblogs.com/Jingge/p/14927175.html)


#### 3. 测试vite是否可以拿到是否可以拿到执行action时注入的环境
先在`deploy_gitHub_pages.yml` 配置了CI环境
```yaml
#...最末尾
env:
  CI: 'gh'
```
但在vite中根本拿不到，在vue-cli中应该可以拿到吧
```js
// 下面两个输出均为undefined
console.log('import.meta.env.CI', import.meta.env.CI)
console.log('process.env.CI', process.env.CI)
```
