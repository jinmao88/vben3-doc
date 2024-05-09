# 快速了解

了解自己使用的或者想使用的工具特性很有必要，因为每个人的用途和想法都不同，可能是工作需要，也可能以学习为目的...

## 🍒 Features

### :rocket: 快速开发

本项目使用 Monorepo 方式管理，这意味着在新开项目的时候，可以一定程度上减少重复造轮子（~~相应的增加学(hua)习(shui)的时间~~），但是采用本框架的时候需要自行调研这轮子用着顺不顺手以及会不会用，还有团队的接受程度等。

本着框架无关的原则，Vben3 不与任何框架深度集成，开发者可以选择自己中意的框架进行开发:smiling_face_with_three_hearts:。

并不是所有的项目都需要使用该种方式管理，就像不是所有项目都必须使用微服务一样。

### :herb: Turborepo架构

采用比Monorepo更优秀的Turborepo架构，提升构建体验:sunglasses:

:::info 提示
点击 [此处](https://turbo.build/repo/docs/core-concepts/monorepos) 查看Turborepo对Monorepo的优势
:::

## 📁 目录结构

vben3内置功能存放在`packages`目录下：

```js
📁 packages
  ┣━ 📁components -------------- 存放自定义组件
  ┣━ 📁constants --------------- 存放全局常量枚举
  ┣━ 📁demo -------------------- 示例demo
  ┣━ 📁directives -------------- 存放自定义指令
  ┣━ 📁hooks ------------------- 存放hooks工具类
  ┣━ 📁locale ------------------ 存放多语言本地化i18n相关
  ┣━ 📁request ----------------- 存放http请求工具类
  ┣━ 📁router ------------------ 存放router路由工具类
  ┣━ 📁stores ------------------ 存放状态管理库工具类
  ┣━ 📁style ------------------- 存放主题配置相关类 
  ┣━ 📁types ------------------- 存放类型定义配置文件类 
  ┣━ 📁utils ------------------- 存放工具类相关
  ┣━ 📁vbenComponents ---------- 存放封装好的第三方组件
  ┣━ 📁grid-layouts ------------ 存放布局相关工具类
```

## 🌐 浏览器支持

**本地开发** 推荐使用最新版的 `Chrome` 浏览器，**不支持**`Chrome 80`以下版本。

**生产环境** 支持现代浏览器，不支持 IE。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                not support                                                                                                                |                                                                                          last 2 versions                                                                                          |                                                                                               last 2 versions                                                                                                |                                                                                             last 2 versions                                                                                              |                                                                                             last 2 versions                                                                                              |
