# 介绍

定义项目全局样式，支持Less，Sass高级应用场景。

`styles`: 样式存放目录。

## 组件目录
```js
📁styles
┣━━📁src
  └── 📁transition          // 过渡
  └── 📄common.css          // 公共样式
  └── 📄entry.css            
  └── 📄variables.css       // 公共变量
  └── 📄index.ts            // 入口
```

## 🌈快速使用

在项目下入口文件`main.ts`引入style:
```ts
import '@vben/style'
```
即可应用。

## 局部样式

在vue中，修改局部组件的样式需要在 `<style>` 标签中启用 `scoped` 属性。
```vue
<style scoped>
  /*业务代码*/
</style>
```
::: tip
使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。
:::

## 深度选择器

如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 `>>>` 操作符。有些像 Sass 之类的预处理器无法正确解析 `>>>`. 这种情况下你可以使用 `/deep/` 或 `::v-deep` 操作符取而代之——两者都是 `>>>` 的别名，同样可以正常工作。

使用 scoped 后，父组件的样式将不会渗透到子组件中，所以可以使用以下方式解决：

```vue
 <style scoped>
  /* deep selectors */
  ::v-deep(.foo) {
  }
  /* shorthand */
  :deep(.foo) {
  }

  /* targeting slot content */
  ::v-slotted(.foo) {
  }
  /* shorthand */
  :slotted(.foo) {
  }

  /* one-off global rule */
  ::v-global(.foo) {
  }
  /* shorthand */
  :global(.foo) {
  }
 </style>
```