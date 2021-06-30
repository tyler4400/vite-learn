[![lint](https://github.com/tyler4400/vite-learn/actions/workflows/lint.yml/badge.svg)](https://github.com/tyler4400/vite-learn/actions/workflows/lint.yml)
[![deploy](https://github.com/tyler4400/vite-learn/actions/workflows/deploy.yml/badge.svg)](https://github.com/tyler4400/vite-learn/actions/workflows/deploy.yml)

### 项目介绍
#### 用vite搭建一个vue3 + vue全家桶 + ts 的初始项目
vite2 + vue3 + vue-router@next + eslint + hosky + lint-staged。
其中vuex不打算集成，打算使用[pinia](https://github.com/posva/pinia)。
另外，element plus 和 ant design of vue还在考虑中

###项目部署
1. 已部署到github pages, [点击访问](https://tyler4400.github.io/vite-learn/), 由于采用的history路由模式，且github pages有基础路径`/vite-learn/`，所以访问可能会有404现象

2. 已部署到Tencent Cloudbase, [点击访问](https://helloworld-7gdt5hd730eba3c7-1302238818.tcloudbaseapp.com/dist/), 也有上面404问题，下来看一下怎么加nginx

3. 部署到Tencent CloudService，[点击访问](http://49.234.117.123:3000/home), 已做了nginx配置不会出现404了

我这里使用shh的方式，在push的时候把`build`的文件，发送到腾讯云服务，使用的action是[ssh-deploy](https://github.com/easingthemes/ssh-deploy)

以下是腾讯云实例上的[nginx配置](https://blog.csdn.net/Nirvana_lss/article/details/103959543) ,由于采用的路由模式是[HTML5 模式](https://next.router.vuejs.org/zh/guide/essentials/history-mode.html#html5-%E6%A8%A1%E5%BC%8F), 所以如同官网所说nginx这里要做如下配置
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```


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

只能手动部署了一下，[链接](https://helloworld-7gdt5hd730eba3c7-1302238818.tcloudbaseapp.com/dist/)


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
