# 业务组件

`components` 目录创建的目的是存放一些与业务强关联的组件。或者官方没有提供的一些特殊组件。

## 🕸️目录组织

```ts
📁components/
  └── 📁src/
    └── click-outside       // 鼠标点击外部触发组件
    └── count-to            // 数字动画
    └── countdown-input     // 倒计时组件
    └── cropper             // 图片裁剪组件
    └── description         // 详情组件
    └── icon                // 图标库组件
    └── icon-picker         // 图标选择组件
    └── qrcode              // 二维码组件
    └── scrollbar           // 滚动组件
    └── strength-meter      // 密码强度组件
    └── svg-icon            // svg引用组件
    └── time                // 时间组件
    └── transition          // 动画组件
    └── virtual-scroll      // 虚拟滚动组件
```

## 🔥快速使用

在项目模块下导入 `@vben/components` 即可。

```js
// 导入
import { CountTo } from "@vben/components"

// 使用组件
<template>
  <CountTo ...></CountTo>
</template>
```
