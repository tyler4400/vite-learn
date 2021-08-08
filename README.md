[![lint](https://github.com/tyler4400/vite-learn/actions/workflows/lint.yml/badge.svg)](https://github.com/tyler4400/vite-learn/actions/workflows/lint.yml)
[![deploy](https://github.com/tyler4400/vite-learn/actions/workflows/deploy.yml/badge.svg)](https://github.com/tyler4400/vite-learn/actions/workflows/deploy.yml)

### 项目介绍
#### 用vite搭建一个vue3 + vue全家桶 + ts 的初始项目
vite2 + vue3 + vue-router@next + eslint + hosky + lint-staged。
其中vuex不打算集成，打算使用[pinia](https://github.com/posva/pinia) 。
另外，element plus 和 ant design of vue还在考虑中

###项目部署
1. 已部署到github pages, [点击访问](https://tyler4400.github.io/vite-learn/), 由于采用的history路由模式，且github pages有基础路径`/vite-learn/`，所以访问可能会有404现象

2. 已部署到Tencent Cloudbase, [点击访问](https://helloworld-7gdt5hd730eba3c7-1302238818.tcloudbaseapp.com/dist/), 也有上面404问题，下来看一下怎么加nginx

3. 部署到Tencent CloudService，[点击访问](https://vite-learn.tyler4400.com/Home), 已做了nginx配置不会出现404了

我这里使用shh的方式，在push的时候把`build`的文件，发送到腾讯云服务，使用的action是[ssh-deploy](https://github.com/easingthemes/ssh-deploy)

以下是腾讯云实例上的[nginx配置](https://blog.csdn.net/Nirvana_lss/article/details/103959543) ,由于采用的路由模式是[HTML5 模式](https://next.router.vuejs.org/zh/guide/essentials/history-mode.html#html5-%E6%A8%A1%E5%BC%8F), 所以如同官网所说nginx这里要做如下配置
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

我的目标是使用github action完成自动化部署，如上自动化部署已经完成了，部署到3个服务器上。但我还希望在里面加入approval flow的机制。最终完成的还不错。
[语法](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idenvironment) 参见这里，文章参考了[这篇](https://devblogs.microsoft.com/devops/i-need-manual-approvers-for-github-actions-and-i-got-them-now/), 不知道现在还在beta阶段不。
根据语法，不知道能不能单独加一个url。如果加了之后，也能出来进度条和链接，那么会很cool！

![dd](https://storage2.timheuer.com/approvalpost6.png)


顺便一说了，给了个`warning` 目前还不清楚是怎么回事。
> Skip setting environment url as environment 'production' may contain secret.

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
先在`lint.yml` 配置了CI环境
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

#### 4. 腾讯云开发部署 成功

云开发部署， 因为`cloudbaserc.json`的配置问题，一直报错，不知道怎么提供`package.json`

[云开发action](https://github.com/marketplace/actions/tencent-cloudbase-github-action)


```
  dist/index.html                         0.48kb
  dist/assets/NotFound.817e0452.js        0.19kb / brotli: 0.15kb
  dist/assets/LazyLoadPage.d275ae9f.js    0.21kb / brotli: 0.16kb
  dist/assets/index.86c38747.css          2.26kb / brotli: 0.83kb
  dist/assets/index.5e7e54f8.js           2.77kb / brotli: 1.16kb
  dist/assets/vendor.a7c71577.js          65.21kb / brotli: 22.94kb
   CloudBase Framework  info     🧬 compile: client...
   CloudBase Framework  info     🧬 compile: server...
   CloudBase Framework  warn     函数 vue-echo 设置了云端安装依赖，但函数代码根目录下未提供 package.json
   CloudBase Framework  info     🧬 compile: auth...
   CloudBase Framework  error     函数目录或者文件 vue-echo 不存在
   CloudBase Framework  info     部署日志: '/home/runner/cloudbase-framework/logs/2021-06-29_11-53-46.log'
```
`更新` 后来把云函数直接删了就部署成功了,看来云函数还有很多东西要学习


### references
搭建基础项目时参考了下面：
- [从 0 开始手把手带你搭建一套规范的 Vue3.x 项目工程环境](https://juejin.cn/post/6951649464637636622)
- [备战2021：vite工程化实践，建议收藏](https://juejin.cn/post/6910014283707318279#heading-22)

eslint踩坑：
- [Vite Vue3项目eslint配置遇到的问题](https://www.cnblogs.com/Jingge/p/14927175.html)

github action的*环境变量*使用(第二篇废话挺多，建议看第一篇就好了):
- [I need manual approvers for GitHub Actions!!!! And I got them now :)](https://devblogs.microsoft.com/devops/i-need-manual-approvers-for-github-actions-and-i-got-them-now/)
- [Adding approval workflow to your GitHub Action](https://timheuer.com/blog/add-approval-workflow-to-github-actions/)
- [官网文档:Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idenvironment)

vue相关:
- [一个基于vue3+vite+ts的完整项目](https://juejin.cn/post/6881795051492474893)
> `Vue Vben Aadmin 2.0`确实可以，能加的功能几乎都加进去了，但也因此显的项目比较臃肿，真正需要用到没有这么多
- [vue 异步处理_在Vue 3 / Composition API中处理异步](https://blog.csdn.net/weixin_26738395/article/details/108258992)
> 如标题，主要介绍了vue处理异步的几种方案
- [单文件组件组合式 API 语法糖 (`<script setup>`)](https://github.com/vuejs/rfcs/blob/a55d6f69760eceb57502fc9d4ff1a088dabb2c15/active-rfcs/0040-script-setup.md)
> 这个语法很棒，不过还是实验性质的
- [pinia](https://github.com/posva/pinia)
> vuex 计划干掉mutation，只有getters,setters,action，pinia已经率先实现了
- [awesome-vue](https://github.com/vuejs/awesome-vue)
> 正如标题，这是一个罗列了所有和vue相关的项目、demo，组件，插件等，需要的时候可以在这里搜索

另外，几个很有用的库推荐：
- [vueuse](https://vueuse.org/guide/config.html)
> 类似于react的hooks utils，很方便。 使用前可以先看看这篇[Vue3造“hooks”轮子前先看看这个](https://juejin.cn/post/6893289942596714503)
- [vue-gn-components](https://github.com/huxiaocheng/vue-gn-components)
> 这是一些业务上的组件库，依赖具体业务，用的可能不会很多，看可以看一下源码和实现
