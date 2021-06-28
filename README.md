![GitHub Workflow Status](https://img.shields.io/github/workflow/status/tyler4400/vite-learn/lint)

### 规范目录结构
├── publish/
└── src/
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── router/                    // 路由配置目录
    ├── store/                     // 状态管理目录
    ├── style/                     // 通用 CSS 目录
    ├── utils/                     // 工具函数目录
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.ts
    ├── shims-vue.d.ts
├── tests/                         // 单元测试目录
├── index.html
├── tsconfig.json                  // TypeScript 配置文件
├── vite.config.ts                 // Vite 配置文件
└── package.json

### 代码规范
使airbnb风格的eslint


### 踩坑
#### webstorm 还不识别vite的@别名，但我们可以创建一个`webpack.config.js`
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
