# 快速了解

## 功能特性

### :jigsaw: 框架无关

vben3不与任何框架深度集成，开发者可以选择自己中意的框架进行开发:smiling_face_with_three_hearts:。

默认情况下，vben3的示例demo采用[Naive UI](https://www.naiveui.com/zh-CN/light)框架进行编写。

### :herb: Turborepo架构

采用比Monorepo更优秀的Turborepo架构，提升构建体验:sunglasses:

::: info
点击 [此处](https://turbo.build/repo/docs/core-concepts/monorepos) 查看Turborepo对Monorepo的优势
:::

### :rocket: 快速开发

每个开发者都有自己用的习惯或顺手的轮子进行快速开发。

在vben3里，我们将轮子与业务彻底解耦，开发者可以引入自己熟悉的轮子或者直接引用vben3封装完成的轮子进行快速开发，从而大大节省时间和精力:heart_eyes:。

::: details
但是，任何轮子都需要时间进行学习，我们将vben3的框架工具类在本文档进行详尽编写，任何你觉得有疑问的地方都可以先查询本文档:thinking:。
:::

## 内置功能

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

## 技术选型

采用技术以及版本号清单……

- Vite
- TypeScript
- pnpm & monorepo
- 其它

## 浏览器支持

**本地开发** 推荐使用最新版的 `Chrome` 浏览器，**不支持**`Chrome 80`以下版本。

**生产环境** 支持现代浏览器，不支持 IE。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                not support                                                                                                                |                                                                                          last 2 versions                                                                                          |                                                                                               last 2 versions                                                                                                |                                                                                             last 2 versions                                                                                              |                                                                                             last 2 versions                                                                                              |
