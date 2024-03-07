# 布局

 布局，是前端开发中最基础的功能之一，了解一些常见的布局可以提高软件的多样化和美观程度😎。

`layouts` 是存放项目布局相关的标准目录。

## 🕸️目录组织

```ts
📁layouts
┣━━📁src
  ┣━━ 📁components
    └── 📁breadcrumb      // 面包屑导航
    └── 📁feature         // 全局配置侧边栏
    └── 📁lock            // 锁屏组件
    └── 📁menu            // 菜单组件
    └── 📁mixSideBar      // 混合菜单
    └── 📁notify          // 通知组件
    └── 📁search          // 搜索组件
    └── 📁setting         // 全局配置项
    └── 📁tabs            // tabs标签相关
    └── 📁trigger         // 折叠触发器相关
    └── 📁user-dropdown   // 下拉框
    └── 📄footer.vue
    └── 📄FullScreen.vue
    └── 📄header.vue
    └── 📄index.ts
    └── 📄main.vue
  ┣━━ 📁logics
  ┣━━ 📄index.vue
  ┣━━ 📄left-menu.vue
  ┣━━ 📄mix-sidebar.vue
  ┣━━ 📄mobile-menu.vue
  ┣━━ 📄top-menu-mixed.vue
  ┣━━ 📄top-menu.vue
  ┣━━ 📄useComposables.ts
┣━━📄bridge.ts
┣━━📄index.ts
```

## 🔥快速使用

如上所示，`components` 目录包含了基本的功能性组件，如果你想继续添加其它的功能，存放到 `components` 目录下即可。

Vben3页面全局图形化配置的入口存放在 `setting` 目录下，你可以查看源码或者根据业务自定义调整即可。

## ⚙️相关功能

| 名称     | 文件路径                                      |
| -------- | --------------------------------------------- |
| 夜色模式 | `/setting/components/DarkModeToggle.vue`      |
| 布局切换 | `/setting/components/NavigationBarPicker.vue` |
| 主题编辑 | `/setting/components/ThemeEditor.vue`         |
| 界面配置 | `/setting/components/Content.vue`             |
| 动画     | `/setting/components/Transitions.vue`         |


