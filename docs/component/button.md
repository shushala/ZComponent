# Button 组件文档说明

### 属性

#### size (大小)

- 类型: 字符串
- 可选值: 'small', 'medium', 'large'
- 默认值: 无
- 描述: 设置按钮的尺寸。

#### type (颜色类型)

- 类型: 字符串
- 可选值: 'primary', 'success', 'warning', 'danger', 'info', 'default', ''
- 默认值: ''
- 描述: 设置按钮的颜色类型。自定义校验器确保值为给定的可选值之一。

#### round (圆角)

- 类型: 布尔值
- 默认值: false
- 描述: 指示按钮是否应该具有圆角样式。

#### loading (加载状态)

- 类型: 布尔值
- 默认值: false
- 描述: 指示按钮是否处于加载状态。在加载状态下，按钮将被禁用，并可能显示加载指示器。

#### disabled (禁用状态)

- 类型: 布尔值
- 默认值: false
- 描述: 指示按钮是否应该处于禁用状态，无法进行交互。

#### nativeType (原生类型)

- 类型: 字符串
- 可选值: 'button', 'submit', 'reset'
- 默认值: 'button'
- 描述: 指定按钮的原生 HTML 类型。

#### iconPlacement (图标位置)

- 类型: 字符串
- 可选值: 'left', 'right'
- 默认值: ''
- 描述: 设置按钮中图标的位置。图标可以放置在按钮文本的左侧或右侧。

### 插槽

- icon: 可用于在按钮中插入一个图标。

### 事件

- click: 当按钮被点击时触发。回调函数参数为鼠标事件对象。
- mousedown: 当鼠标按下按钮时触发。回调函数参数为鼠标事件对象。

### 示例

```vue
<template>
  <z-button
    size="medium"
    type="primary"
    round
    :loading="isLoading"
    :disabled="isDisabled"
    nativeType="button"
    iconPlacement="left"
    @click="handleClick"
    @mousedown="handleMousedown"
  >
    <template #icon>
      <icon-component />
    </template>
    点击我
  </z-button>
</template>

<script>
import ZButton from './Button.vue'
import IconComponent from './IconComponent.vue'

export default {
  components: {
    ZButton,
    IconComponent
  },
  data() {
    return {
      isLoading: false,
      isDisabled: false
    }
  },
  methods: {
    handleClick(event) {
      // 处理点击事件
    },
    handleMousedown(event) {
      // 处理鼠标按下事件
    }
  }
}
</script>
```

在这个示例中，`ZButton` 组件具有各种属性，可以根据需要定制按钮的外观和行为。按钮的内容可以包含文本和图标，并且在不同的交互状态下，按钮的外观也会有所变化。事件处理函数可以通过 `@click` 和 `@mousedown` 属性来定义，以便在按钮被点击或鼠标按下时执行相应的操作。
