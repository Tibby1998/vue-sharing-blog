# Vue多人博客

## 简介

> 在线地址：[https://tibby1998.github.io/vue-sharing-blog/](https://tibby1998.github.io/vue-sharing-blog/)
>
> 项目来源：[https://xiedaimala.com/courses/d6825a79-25e3-446b-b1c0-556cd4e77a41#/common](https://xiedaimala.com/courses/d6825a79-25e3-446b-b1c0-556cd4e77a41#/common)

**vue-sharing-blog** 是一个多人博客系统，虽然结构简单，但对于“复健”选手来说也是一个不错的练手demo了，自己也在此基础上进行更改，将它的grid布局改成了flex布局，对一些代码逻辑也自己敲过了一遍，也很深刻地理解了一些设计巧妙之处，未来的学习生涯中一定会积极学习这些优秀的设计，努力让自己变得更强~~（秃）~~

## 安装与运行

```jsx
git clone https://github.com/Tibby1998/vue-sharing-blog.git
cd vue-sharing-blog
npm install    //安装依赖
npm run serve  //项目运行
npm run build  //项目打包
```

## 目录结构

```jsx
├── package.json
├── public
|  ├── favicon.ico
|  └── index.html
├── vue.config.js
├── src
|  ├── api
|  |  ├── auth.js
|  |  └── blog.js
|  ├── App.vue
|  ├── assets
|  |  ├── common.scss
|  |  ├── logo.png
|  |  ├── mixin.scss
|  |  └── variable.scss
|  ├── components
|  |  ├── Footer.vue
|  |  └── Header.vue
|  ├── helpers
|  |  ├── request.js
|  |  └── util.js
|  ├── main.js
|  ├── router
|  |  └── index.js
|  ├── store
|  |  ├── index.js
|  |  └── modules
|  |     ├── auth.js
|  |     └── blog.js
|  └── views
|     ├── Create
|     ├── Detail
|     ├── Edit
|     ├── Index
|     ├── Login
|     ├── My
|     ├── Register
|     └── User
└── README.md
```

## 开发篇

### 技术栈

【前端】

- Vue：前端MVVM框架
- Vue-router：使用了 Lazy Loading Routes 技术来实现异步加载优化性能
- Vuex：状态管理工具
- SCSS：CSS预编译处理器
- ES6：模块化、解构赋值、Promise、Async/Await

【自动化构建工具】

- vue-cli：Vue 脚手架工具，快速搭建项目

### 收获

1. 熟悉了一连串的开发流程
2. 学习到了使用Promise封装异步请求技巧，让接口更加易用，这里封装的是axios
3. 学习到了一套常用的JS工具库
4. 总结了一套SCSS使用经验
5. GET到了一个Markdown解析器和编译器库——Marked.js

## 部署篇

### 准备工作

对于Vue项目的部署呢，在打包运行命令npm run build之前，先要对项目的publicPath进行配置：

1. 在最新版的vue-cli创建项目时，不会自带Build配置项，这时候就需要新建一个vue.config.js文件，对publicPath进行配置如下：

    ```jsx
    module.exports = {
        publicPath: './'
      }
    ```

2. 对于路由也需要将base目录改为我们githubPage的目录如下

    ```jsx
    const router = new VueRouter({
      mode: 'history',
      base: '/vue-sharing-blog/',
      routes
    })
    ```

### 打包上传到github仓库

1. 使用package.json脚本方法，定义一个upload脚本，使用npm run build完成打包上传

```jsx
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "upload": "npm run build && cd dist && git init && git add .&&git commit -am \"init\" && git remote add 【your repositories】 && git push -f origin master"
  },
```

### 创建Github-Page分支

1. 创建分支

    ```jsx
    git checkout -b gh-pages
    ```

2. 删除除dist之外的文件 → 把dist目录中的文件粘贴到项目根目录下 → 删除dist文件夹
3. git push -u origin gh-pages

### 在Setting中设定gh-pages为Github-Page

## 延伸阅读

- [使用脚本一键部署github-page](https://zhuanlan.zhihu.com/p/100806442)
- [Github-CI自动化部署方案](https://mp.weixin.qq.com/s/iQdIfRZtApcDpPPqc_1WyQ)
- [使用procee.env.BASE_URL切换环境](开发环境与生产环境)
